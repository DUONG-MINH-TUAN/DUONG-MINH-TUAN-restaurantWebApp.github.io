import { useEffect, useState,useCallback} from "react";
import GlobalStyle from "../assets/globalStyle/foodManagement.globalStyle";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function FoodManagement() {
  const navigate = useNavigate();
  const {
    allDishes,
    setAllDishes,
    deleteDishes,
    dishDeleteQueue,
    setDishDeleteQueue,
    getAllInforDishes,
    insertDish,
    logout,
    promoteAdminButGet,
    getAllAdminIds
  } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);
  const [newFood, setNewFood] = useState({
    name: "",
    price: 0.0,
    Category_ID: 1,
  });


  const handlePromoteAdmin = useCallback(async (e)=>{
          e.preventDefault();
          await promoteAdminButGet();
          await getAllAdminIds();
          //navigate to manageUser
          navigate("/manage-user");
      },[]);

  // Thêm hoặc loại bỏ người dùng khỏi danh sách xóa

  const toggleDeleteQueue = (productId) => {
    console.log("Current deleteQueue:", dishDeleteQueue); // In giá trị deleteQueue trước khi thay đổi
    // console.log('Selected userId:', userId); // In giá trị userId
    setDishDeleteQueue((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId); // Loại bỏ người dùng khỏi danh sách xóa
      }
      return [...prev, productId]; // Thêm người dùng vào danh sách xóa
    });
  };
  //
  const handleDeleteAll = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteDishes(dishDeleteQueue);

      if (!response) {
        toast.error("There is no selected products");
        return;
      }
      if (response.success) {
        toast.success(response.message || "Products deleted successfully!!!");
      } else {
        toast.error(
          response.message || "No products found with the provided IDs!!!"
        );
      }
      setDishDeleteQueue([]);
      const dishes = await getAllInforDishes();
      setAllDishes(dishes);
    } catch (error) {
      console.error("Error deleting dishes in UI:", error);
      toast.error("An error occurred while deleting users.");
    }
  };
  //open modal
  const openModal = () => {
    setModalOpen(true);
  };

  //close modal
  const closeModal = () => {
    setModalOpen(false);
    setNewFood({ name: "", image: "", price: "" });
  };

  //auto save allDishes into session when the allDishes is changing
  useEffect(() => {
    if (allDishes.length > 0) {
      sessionStorage.setItem("allDishes", JSON.stringify(allDishes));
    }
  }, [allDishes]);

  // take dishes when reloading
  useEffect(() => {
    const reloadTakeDishesSession = () => {
      const tempAllDishes = sessionStorage.getItem("allDishes");
      const parseAllDishes = JSON.parse(tempAllDishes);
      if (parseAllDishes) {
        try {
          if (JSON.stringify(parseAllDishes) !== JSON.stringify(allDishes)) {
            setAllDishes(parseAllDishes);
          }
        } catch (error) {
          console.log("Error in all dishes UI in parse all dishes: ", error);
        }
      }
    };
    reloadTakeDishesSession();
  }, []);

  //add new food
  const addNewFood = async () => {
    if (!newFood.name || !newFood.price || !newFood.Category_ID) {
      alert("Please fill out all fields.");
      return;
    }
    const response = await insertDish(newFood);
    setDishDeleteQueue([]);
    const dishes = await getAllInforDishes();
    setAllDishes(dishes);
    if (!response.success) {
      toast.error(response.message);
    }
    toast.success(response.message);
    closeModal();
  };

  const handleLogout = async(e) => {
    e.preventDefault();
      await logout();
      navigate("/login");
  }

  // get image path
  const getImagePath = (imageName) => {
    return require(`../assets/img/${imageName}`);
  };
  return (
    <section>
      <GlobalStyle />
      <ToastContainer />
      <div className="sidebar">
        <div className="column">
          <div>
            <h1 className="sidebar-title" onClick={()=> navigate("/")}>TTT</h1>
            <a onClick={(e)=>handlePromoteAdmin(e)}>User</a>
            <a href="#">Order</a>
          </div>
          
          <div>
            <a onClick={(e) => handleLogout(e)} className="logout">
              Logout
            </a>
          </div>
        </div>
      </div>

      <div className="dashboard">
        <h1>Food Management</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allDishes.map((food) => (
              <tr key={food.ID}>
                <td>{food.ID}</td>
                <td>
                  <img
                    src={
                      getImagePath(food.img_url) ||
                      "https://via.placeholder.com/40"
                    }
                    alt="Food"
                    style={{ width: "40px", height: "40px" }}
                  />
                </td>
                <td>{food.Name}</td>
                <td>${food.price.toFixed(2)}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => toggleDeleteQueue(food.ID)}
                  >
                    {dishDeleteQueue.includes(food.ID) ? "Cancel" : "Delete"}
                  </button>
                  {dishDeleteQueue.includes(food.ID) && (
                    <span className="note">(Selected)</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-button" onClick={(e) => handleDeleteAll(e)}>
          Delete All
        </button>
        <button className="add-button" onClick={() => openModal()}>
          Add New Food
        </button>
      </div>

      {modalOpen && (
        <div className={`modal ${modalOpen ? "show" : ""}`} id="addFoodModal">
          <div className="modal-content">
            <h3>Add New Food</h3>
            <input
              type="text"
              value={newFood.name}
              onChange={(e) =>
                setNewFood((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Food Name"
            />
            <input
              type="number"
              step="0.01"
              value={newFood.price}
              onChange={(e) =>
                setNewFood((prev) => ({
                  ...prev,
                  price: parseFloat(e.target.value) || 1.0,
                }))
              }
              placeholder="Food Price"
            />
            <input
              type="number"
              value={newFood.Category_ID}
              max={4}
              onChange={(e) =>
                setNewFood((prev) => ({
                  ...prev,
                  Category_ID: parseInt(e.target.value, 10) || 1,
                }))
              }
              placeholder="Food Image URL"
            />

            <button onClick={addNewFood} className="add-food">
              Add Food
            </button>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
