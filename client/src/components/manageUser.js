import { useEffect,useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from "../assets/globalStyle/manageUser.globalStyle";
export default function ManageUser() {
    const navigate = useNavigate();
    const {
            users,
            deleteUsers,
            setUsers,
            deleteQueue,
            setDeleteQueue,
            getAllUsers,
            promoteAdminReal,
            promoteAdminError,
            admins,
            getAllAdminIds,
            setAdmins,
            logout,
            getAllFoods,
            convertToOrders
          } = useAuth();
    


  const handleFoodManager = useCallback(async(e)=>{
        e.preventDefault();
        await getAllFoods();
        navigate("/food-management");
        return;
    },[]);

    // Thêm hoặc loại bỏ người dùng khỏi danh sách xóa
    
    const toggleDeleteQueue = (userId) => {
        console.log('Current deleteQueue:', deleteQueue); // In giá trị deleteQueue trước khi thay đổi
        console.log('Selected userId:', userId); // In giá trị userId
        setDeleteQueue((prev) => {
            if (prev.includes(userId)) {
                return prev.filter(id => id !== userId); // Loại bỏ người dùng khỏi danh sách xóa
            }
            return [...prev, userId]; // Thêm người dùng vào danh sách xóa
        });
       
    };

    const handleLogout = async(e) => {
      e.preventDefault();
        await logout();
        navigate("/login");
    }
    useEffect(()=>{
      console.log("Delete queue in manageUser: ",deleteQueue);
    },[deleteQueue])

    useEffect(() => {
      // Function để lấy dữ liệu từ sessionStorage
      const loadUsersFromSession = () => {
        const storedUsers = sessionStorage.getItem('users');
        if (storedUsers) {
          setUsers(JSON.parse(storedUsers));
        }
      };
  
      // Lấy dữ liệu ngay khi component mount
      loadUsersFromSession();
  
      
    }, []);

 
    const handleDeleteAll = async (e) => {
        e.preventDefault();
        try {
            
            const response = await deleteUsers(deleteQueue);
            
            if(!response){
                toast.error("There is no selected products");
                return;
            }
            if(response.success){
                toast.success(response.message||"Users deleted successfully!!!");
                
            }else {
                toast.error(response.message||"No users found with the provided IDs!!!");
            }    
            setDeleteQueue([]);
            const users = await getAllUsers();
            setUsers({userList: users});
            sessionStorage.setItem('users',users);
        } catch (error) {
            console.error("Error deleting users in UI:", error);
      toast.error("An error occurred while deleting users.");
        }
        
    };

    // can optimize through using batch processing technique
    const handlePromoteAdmin = async(userId) =>{
       const newAdmin = await promoteAdminReal(userId);
      // Đợi hàm `promoteAdminReal` xong và kiểm tra lỗi sau khi cập nhật

       if(!newAdmin){
        // toast.error("No admin created");
        console.log("There is no admin response in manageUser");
        return;
       }
       toast.success("Promote admin successfully");
       await getAllAdminIds();

       return;
    }
    useEffect(() => {
      if (promoteAdminError?.message) {
        // Chạy một lần khi promoteAdminError thay đổi và đã có lỗi
        console.log("Error updated:", promoteAdminError.message);
        toast.error(promoteAdminError.message);
      }
    }, [promoteAdminError]);  // Lắng nghe thay đổi của promoteAdminError4

    useEffect(()=>{
      // Function để lấy dữ liệu từ sessionStorage
      const loadAdminsFromSession = () => {
        const storedAdmins = sessionStorage.getItem('admins');
        if (storedAdmins) {
          try {
            const parsedAdmins = JSON.parse(storedAdmins);
            console.log("parsedAdmins: ", parsedAdmins);
            if (JSON.stringify(parsedAdmins) !== JSON.stringify(admins)) {
              setAdmins(parsedAdmins);
            }
          } catch (error) {
            console.error('Error parsing stored admins:', error);
          }
        }
      };
  
      // Lấy dữ liệu ngay khi component mount
      loadAdminsFromSession();
    },[])
    useEffect(()=>{
      console.log("Admins:",admins);
    },[admins])

    const handleOrderManager = useCallback(async(e) => {
      e.preventDefault();
      await convertToOrders();
      navigate("/order-management");
  })
  return (
    <div className="row">
      <GlobalStyle />
      <ToastContainer/>
      <div className="sidebar">
        <div className="column">
          <div>
            <h1 className="sidebar-title" onClick={()=>navigate("/")}>TTT</h1>
            <a onClick={(e)=>handleFoodManager(e)}>Items</a>
            <a onClick={(e) => handleOrderManager(e)}>Order</a>
          </div>
          {/* <div className="spacer"></div> */}
          <div>
            <a onClick={(e)=>handleLogout(e)} className="logout">
              Logout
            </a>
          </div>
        </div>
      </div>

    {users && (
      <div className="dashboard">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Promote</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.userList.map((user) =>(
            <tr key={user.id} data-id={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  className="avatar"
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                />
              </td>
              <td>
                {user.name}
                
                </td>
              <td>
                {user.email}
              </td>
              <td>
              {
                !admins.includes(user.id) &&
                (
                <button className="delete-button" onClick={()=> handlePromoteAdmin(user.id)}>
                Promote
                </button>
                )
              }  
              </td>
              <td>
                <button className="delete-button" onClick={() => toggleDeleteQueue(user.id)}>
                {deleteQueue.includes(user.id) ? "Cancel" : "Delete"}
                </button>
                {deleteQueue.includes(user.id) && (
                                            <span className="note">(Selected)</span>
                                        )}
                </td>
                
            </tr>
            ))}
            
          </tbody>
        </table>
        <button className="delete-button" onClick={(e) =>handleDeleteAll(e)}>Delete Selected Users</button>
      </div>)}
    </div>
  );
}
