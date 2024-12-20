import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { baseUrl, serverUrl } from "../services/requestManager";
import axios from "axios";
import DOMPurify from "dompurify";
import instance from "../config/axiosInstance";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// used for reloading token
const RELOAD_SECOND = 5; //second
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
  ]);
  const [allDishes, setAllDishes] = useState([]);
  const [dishDeleteQueue,setDishDeleteQueue] = useState([]);
  const [deleteQueue, setDeleteQueue] = useState([]);
  const [loginInfor, setLoginInfor] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [registerInfor, setRegisterInfor] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [promoteAdminError, setPromoteAdminError] = useState(null);
  const [selectedProducts,setSelectedProducts] = useState([]);
  const [selectedNewButton, setSelectedNewButton] = useState(null);
  // Used for promote-to-admin
  const [users, setUsers] = useState({
    userList: [],
  });
  const [admins, setAdmins] = useState([]);


  const [orders,setOrders] = useState([]);

  // TOKEN
  // decode access token and take the payload
  const decodeAccessToken = useCallback((accessToken) => {
    try {
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    } catch (error) {
      console.log(
        "Error in decode the access token in login process: ",
        error.message
      );
      return;
    }
  }, []);


  // check expiration for token
  const checkExpiration = useCallback((token) => {
    if (!token) {
      console.log("No access token ");
      return false;
    }
    try {
      const decodedToken = jwtDecode(token);
      const expTime = decodedToken.exp;
      const currentTime = Date.now() / 1000; // in second
      console.log(currentTime);
      return expTime < currentTime;
    } catch (error) {
      return true;
    }
  }, []);
  // useEffect(async()=>{
  //     await reloadAccessToken();
  // },[accessToken]);

  //reload access token based on refresh token
  const reloadAccessToken = async () => {
    try {
      // const response = await axios.get(`${baseUrl}/refresh`);
      const response = await axios.get(`${baseUrl}/refresh`, {
        withCredentials: true,
      });
      if (response.data.accessToken) {
        setAccessToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      console.log("Reload access token");
    } catch (error) {
      let errorMessage = "unknown error";
      if (error.response) {
        if (error.response.status === 401) {
          setLoginError({ message: errorMessage });
          logout();
        }
        errorMessage = error.response?.data?.message;
      } else if (error.request) {
        errorMessage = "No Internet";
      } else {
        errorMessage = error.message;
      }
      console.log("Error in reload access token: ", errorMessage);
      setLoginError({ message: errorMessage });
    }
  };

  // Automatic checker for token
  useEffect(() => {
    // 5 minutes -> check
    const intervalId = setInterval(async () => {
      if (checkExpiration(accessToken)) {
        localStorage.removeItem("accessToken");
        setAccessToken(null);
        await reloadAccessToken(); // if token is expired, reload new access token
      }
    }, RELOAD_SECOND * 1000); //ms

    // Clean up khi component unmount
    return () => clearInterval(intervalId);
  }, [accessToken]);






  // ADMIN
  // Promote admin but get All users and verify
  const promoteAdminButGet = useCallback(async () => {
    try {
      const users = await getAllUsers();
      if (!users) {
        console.log(
          "There is no found users in promoteAdminButGet in auth context"
        );
        return;
      }
      setUsers({ userList: users });
      sessionStorage.setItem("users", JSON.stringify({ userList: users }));
      return;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(errorMessage);
      return;
    }
  }, []);

  //like the name, it promotes the user to admin real
  const promoteAdminReal = async (userId) => {
    try {
      if (!userId) {
        console.log(
          "Error in promote admin real in auth context: no found user id"
        );
        return;
      }
      const response = await instance.post(
        `${baseUrl}/protected/promote-to-admin-real`,
        { userId }
      );
      if (!response) {
        console.log(
          "There is no response in promote admin real in auth context"
        );
        return;
      }
      return response.data.newAdmin;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          // Hiển thị thông báo lỗi 409
          console.log(
            "Error in promote admin real in auth context: ",
            error.response.data.message
          );
          setPromoteAdminError({ message: error.response.data.message });
        } else {
          // Xử lý lỗi các mã khác (500, 404, v.v.)
          console.log(
            "Error in promote admin real in auth context: ",
            error.response.data.message
          );
          setPromoteAdminError({
            message:
              error.response.data.message || "An unexpected error occurred",
          });
        }
      } else {
        console.log(
          "Error in promote admin real in auth context: ",
          error.message
        );
        // setPromoteAdminError({message: error.message});
      }
    }
  };


  const getAllAdminIds = useCallback(async() => {
    try {
        const response = await instance.get(`${baseUrl}/protected/get-all-admins`);
        const adminsResponse = response.data.admins;
        if (!adminsResponse) {
            console.log("There is no admins found in get all admin ids in auth context");
            return;
          }
        
            adminsResponse.map((admin) => {
                setAdmins((prev) => {
                    if(!Array.isArray(prev)){
                        console.log("the prev is not an array in auth context (get all admins)");
                    }
                    if(prev.includes(admin.user_id)){
                        return[...prev];
                    }
                    return [...prev,admin.user_id];
                })
            })
        
        } catch (error) {
          console.log(
            "Error in getting all users in auth context: ",
            error.message
          );
        }
  },[])

  useEffect(() => {
    if (admins.length > 0) {
      // Khi admins đã được cập nhật, lưu vào sessionStorage
      sessionStorage.setItem('admins', JSON.stringify(admins));
      // console.log("values of admins in session in auth context: ", sessionStorage.getItem('admins'));
    }
  }, [admins]); // Theo dõi khi admins thay đổi
  
  // useEffect(() => {
  //   console.log("Admins state updated: ", admins);
  // }, [admins]);


//   DISHES
  const getAllInforDishes = async() => {
    try {
        const response = await axios.get(`${baseUrl}/get-all-dishes`);
        const dishes = response.data.dishes;
        if(!dishes) {
            console.log("There is no dishes");
            return;
        }
        
        return dishes;

    } catch (error) {
        console.log("Error in getting all dishes infor in auth context: ", error.message);
    }
  }

  // used to set all dishes
  const getAllFoods = async() => {
    try {
      const dishes = await getAllInforDishes();
      if(!dishes) {
          console.log("There is no foods");
          return;
      }
      
      setAllDishes(dishes);
  } catch (error) {
      console.log("Error in getting all foods in auth context: ", error.message);
  }
  }

  const insertDish = async(dish) => {
    try {
      const response = await instance.post(`${baseUrl}/protected/add-new-dish`,dish);
      if(!response){
        console.log("there is no response in insertDish in auth context");
        return;
      }
      console.log("response in insert dish context",response);
      if (!response.data.success){
        console.log(response.data.message);
      }
      return response.data.message;
    } catch (error) {
      console.log("Error in inserting dish",error);
    }
  }
  const addQuantity = (dishes) => {
    const updateCart =dishes.map((dish) => ({
        ...dish,
        quantity:0    
    }));
    return updateCart;
  }
  

  const getDishesWithCategory = async (categoryId) =>
 {
  try {
    // console.log("category id in auth context:",categoryId);
    const response = await axios.post(`${baseUrl}/get-dishes-by-category`,{categoryId: categoryId});
    const dishes = response.data.dishes;
    if(!dishes) {
        console.log("There is no dishes");
        return;
    }
    const updateCart = await addQuantity(dishes);
    return updateCart;   
} catch (error) {
    console.log("Error in getting dishes by category infor in auth context: ", error.message);
}
 }

 const deleteDishes = async (dishDeleteQueue) => {
  try {
    const response = await instance.post(
      `${baseUrl}/protected/delete-dishes`,
      dishDeleteQueue
    );
    if (!response) {
      console.log("There is no response from api endpoint of delete dishes route");
      return;
    }
    console.log("The successfull message: ", response.data.message);
    return response.data;
  } catch (error) {
    console.log("There is error in deleting dishes in auth context:", error);
  }
};
  const orderFoods = async() => {
    try {
      console.log("Selected products: ",selectedProducts);
      const response = await axios.post(`${baseUrl}/send-to-cart`,selectedProducts);
      if(!response) {
        console.log("There is no response from sending to cart in auth context");
        return;

      }
      return response;
    } catch (error) {
      console.log("Error in sending cart in auth context: ",error);
      return {message: error.message};
    }
  }


  const getAllOrders = useCallback(async() => {
    try {
      const response = await instance.get(`${baseUrl}/protected/get-all-orders`);
      if (!response.data.success) {
        console.log(response.data.message);
        return;
      }
      return response.data.orders;
    } catch (error) {
      console.log(
        "Error in getting all orders in auth context: ",
        error.message
      );
    }
  },[])


  const convertToOrders = async() => {
    try {
      //get all orders
      const orders = await getAllOrders();
      let temp = [];
      orders.map((order) => {
        temp.push({
          id: order.ID,
        })
      }) 

      let temp2 = [];
      orders.map((order) => {
        temp2.push({
          id: order.User_ID,
        })
      }) 

      console.log("users_id_array:",temp2);
      const idArray = temp2
  .map((order) => order.id) // Extract the `id` field
  .filter((id) => id !== null && id !== undefined && id !== ""); // Remove invalid entries


      console.log("idArray",idArray);
      let users= [];
      if(idArray && idArray.length > 0){
        //get all users with the same ids in orders 
        users = await findUsersByIds(idArray);
      }
      // find all dishes by ids
      const dishes = await findDishByIds(temp);
      // Kết hợp giá trị `Name` từ `dishes` vào `orders`
      orders.forEach((order) => {
        const dish = dishes.find((d) => d.ID === order.ID); // Tìm dish có ID khớp với ID trong order
        order.name = dish ? dish.Name : null; // Nếu tìm thấy dish thì gán Name, nếu không thì gán null
      });
      console.log("first parse orders: ",orders);
      if(users && users.length > 0){
      orders.forEach((order) => {
        const user = users.find((d) => d.id === order.User_ID); // Tìm dish có ID khớp với User_ID trong order
        order.username = user ? user.name : null; // Nếu tìm thấy dish thì gán Name, nếu không thì gán null
      });
    }
    console.log("second parse orders",orders);
      // add name to orders
      setOrders(orders);
      
    } catch (error) {
       console.log("Error in converting to orders", error);
    }

  }

  const findDishByIds = async(orderIds) =>{
    try {
      const response = await instance.post(`${baseUrl}/find-dishes-by-ids`,orderIds);
      if(!response){
        console.log("There is no response from find dishes by ids in auth context");
        return;
      }
      if(!response.data.success){
        console.log(response.data.message);
        return;
      }
      return response.data.dishes;
    } catch (error) {
      console.log("Error in find dishes by ids in auth context", error);

    }
  }
//save selectedProducts into the session
useEffect(()=>{
  // if(selectedProducts.length > 0){
      sessionStorage.setItem('selectedProducts',JSON.stringify(selectedProducts));
      console.log("Values of cart in session in auth context: ", sessionStorage.getItem('selectedProducts'));
  // } 
},[selectedProducts])

// take selected products when reloading
useEffect(() => {
  const reloadTakeProductsSession = () => {
    const tempCart = sessionStorage.getItem("selectedProducts");
    const parseCart = JSON.parse(tempCart);
    if (parseCart) {
      try {
        if (JSON.stringify(parseCart) !== JSON.stringify(selectedProducts)) {
          setCart(parseCart);
        }
      } catch (error) {
        console.log("Error in selectedProduct UI in parse cart: ", error);
      }
    }
  };
  reloadTakeProductsSession();
}, []);


  // SERVER
  // server checker
  const checkServerStatus = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/status`);

      return response.status === 200;
    } catch (error) {
      console.error("Server status check failed:", error);
      return false;
    }
  };

//   useEffect(() => {
//     console.log("User: ", user);
//   }, [user]);
  // USER
  const registerUser = useCallback(async () => {
    try {
      // Validation
      const temp = validateForm(
        registerInfor.email,
        registerInfor.password,
        registerInfor.confirmedPassword
      );
      if (Object.keys(temp.errors).length > 0) {
        setRegisterError(temp.errors);
      }
      // console.log(temp.errors);
      if (!temp.valid) return;

      setIsRegisterLoading(true);
      setRegisterError(null);
      // console.log("register infor", registerInfor);
      const response = await axios.post(`${baseUrl}/signup`, registerInfor);
      // console.log(registerError);
      setIsRegisterLoading(false);
      setRegisterSuccess(true);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error.response) {
        // Server returned a response with error code
        errorMessage = error.response?.data?.message || error.message;
      } else if (error.request) {
        // No response from server, possibly network issues
        errorMessage = "No Internet";
      } else {
        // Something went wrong in setting up the request
        errorMessage = error.message;
      }
      setRegisterError({ message: errorMessage });
      setIsRegisterLoading(false);
    }
  }, [registerInfor]);

  const updateLoginInfor = (infor) => {
    setLoginInfor(infor);
  };
  //validation and sanitization
  const validateForm = (email, password, confirmedPassword = null) => {
    const errors = {};

    if (!email || !password) {
      errors.message = "Please input the email or password";
      setRegisterError(errors);
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    let valid = true;
    const temp = {
      valid: valid,
      errors: errors,
    };
    //sanitize the input data
    const sanitizedEmail = DOMPurify.sanitize(email.trim());
    const sanitizedPassword = DOMPurify.sanitize(password.trim());
    if (email) {
      if (!emailRegex.test(sanitizedEmail)) {
        temp.errors.email = "Invalid email format.";
        temp.valid = false;
      }
    }
    // if (password) {

    //     if (!passwordRegex.test(sanitizedPassword)) {
    //         temp.errors.password = 'Password must be at least 8 characters, contain letters, numbers, and special characters.';
    //         temp.valid = false;
    //     }
    // }
    if (confirmedPassword) {
      const sanitizedConfirmedPassword = DOMPurify.sanitize(
        confirmedPassword.trim()
      );
      if (sanitizedPassword !== sanitizedConfirmedPassword) {
        temp.errors.confirmedPassword = "Passwords do not match.";
        temp.valid = false;
      }
    }

    return temp;
  };

  const updateRegisterInfor = (infor) => {
    setRegisterInfor(infor);
  };

  const logout = useCallback(async () => {
    // const accessToken = localStorage.getItem("accessToken");
    // if (!accessToken) {
    //   setAccessToken(null);
    //   setLoginError(null);
    //   setRegisterError(null);
    //   navigate("/login"); // Điều hướng đến trang login
    //   return;
    // }
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    setLoginError(null);
    setRegisterError(null);
    await axios.post(`${baseUrl}/logout`);

    return;
  }, []);

  const login = useCallback(async () => {
    try {
      const temp = validateForm(loginInfor.email, loginInfor.password);
      if (Object.keys(temp.errors).length > 0) {
        setLoginError(temp.errors);
      }
      console.log(temp.errors);
      if (!temp.valid) return;
      // Check the server status
      const serverStatus = await checkServerStatus();
      if (!serverStatus) {
        setLoginError({
          message: "Server is not running!!! \nPlease start the server!!!",
        });
        return;
      }
      setIsLoginLoading(true);
      setLoginError(null);
      const response = await axios.post(`${baseUrl}/login`, loginInfor);

      // console.log("Response:", response);
      // save the access token into the local storage
      localStorage.setItem("accessToken", response.data.accessToken);
      // sessionStorage.setItem("expiryDate",response.data.expiryDate);
      setAccessToken(response.data.accessToken);
      // setExpiryDate(response.data.expiryDate);

      //decode the payload and set the user
      const decodedToken = decodeAccessToken(response.data.accessToken);
      if (!decodedToken) {
        console.log("Error in login process: the decodedToken is null");
        return;
      }
      // console.log("decodedToken: ", decodedToken);
      setUser(decodedToken);
      setIsLoginLoading(false);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error.response) {
        // Server returned a response with error code
        errorMessage = error.response?.data?.message || error.message;
      } else {
        // Something went wrong in setting up the request
        errorMessage = error.message;
      }
      setLoginError({ message: errorMessage });
      setIsLoginLoading(false);
    }
  }, [loginInfor]);
  const deleteUsers = async (deleteQueue) => {
    try {
      const response = await instance.post(
        `${baseUrl}/protected/delete-users`,
        deleteQueue
      );
      if (!response) {
        console.log("There is no response from api endpoint of delete route");
        return;
      }
      console.log("The successfull message: ", response.data.message);
      return response.data;
    } catch (error) {
      console.log("There is error in deleting users in auth context:", error);
    }
  };

  const getAllUsers = useCallback(async () => {
    try {
      const response = await instance.get(`${baseUrl}/protected/get-all-users`);
      if (!response.data.users) {
        console.log("There is no users found in get all users in auth context");
        return;
      }
      return response.data.users;
    } catch (error) {
      console.log(
        "Error in getting all users in auth context: ",
        error.message
      );
    }
  }, []);
  
  const findUsersByIds = async(userIds) =>{
    try {
      const response = await instance.post(`${baseUrl}/protected/get-users-by-ids`,userIds);
      if(!response){
        console.log("There is no response from find users by ids in auth context");
        return;
      }
      if(!response.data.success){
        console.log(response.data.message);
        return;
      }
      return response.data.users;
    } catch (error) {
      console.log("Error in find users by ids in auth context", error.message);

    }
  }
  
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        updateLoginInfor,
        loginInfor,
        isLoginLoading,
        loginError,
        setLoginError,
        registerUser,
        registerError,
        registerInfor,
        isRegisterLoading,
        updateRegisterInfor,
        setRegisterError,
        accessToken,
        registerSuccess,
        setRegisterSuccess,
        users,
        deleteUsers,
        setUsers,
        deleteQueue,
        setDeleteQueue,
        getAllUsers,
        promoteAdminButGet,
        promoteAdminReal,
        promoteAdminError,
        admins,
        getAllAdminIds,
        setAdmins,
        cart,
        setCart,
        getAllInforDishes,
        selectedProducts,
        setSelectedProducts,
        getDishesWithCategory,
        selectedNewButton,
        setSelectedNewButton,
        allDishes,
        setAllDishes,
        dishDeleteQueue,
        setDishDeleteQueue,
        getAllFoods,
        deleteDishes,
        insertDish,
        orderFoods,
        convertToOrders,
        orders,
        setOrders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
