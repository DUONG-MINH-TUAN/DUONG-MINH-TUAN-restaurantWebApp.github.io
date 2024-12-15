import { useEffect,useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from "../assets/globalStyle/manageUser.globalStyle";
export default function ManageUser() {
    const {users,deleteUsers,setUsers,deleteQueue,setDeleteQueue,getAllUsers} = useAuth();
    
    //configure toast
    // toast.configure();

    const deleteRow = (userId) => {
        const row = document.querySelector("tr[data-id]");
        const rowId = row.getAttribute('data-id'); // Lấy data-id từ dòng hiện tại
        if (rowId === userId) {
            row.remove(); // Xóa dòng nếu data-id trùng với userId
        }
    };

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
 // Lưu danh sách người dùng vào sessionStorage
 useEffect(() => {
    // Kiểm tra xem có dữ liệu trong sessionStorage không
    const storedUsers = sessionStorage.getItem('users');
    if (storedUsers) {
        // Nếu có, sử dụng dữ liệu trong sessionStorage thay vì API
        setUsers(JSON.parse(storedUsers));
    } else {
        // Nếu không có, gọi API để lấy dữ liệu người dùng
        console.log("No data in state 'users'");
    }
}, []);
   
    const handleDeleteAll = async () => {
        
        try {
            // deleteQueue.map((user) =>{
            //     deleteRow(user.id);
            // })
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
            const users = await getAllUsers();
            setUsers({userList: users});
            sessionStorage.setItem('users',users);
        } catch (error) {
            console.error("Error deleting users in UI:", error);
      toast.error("An error occurred while deleting users.");
        }
        
    };
    const handlePromoteAdmin = async() =>{
      
    }
  return (
    <div className="row">
      <GlobalStyle />
      <ToastContainer/>
      <div className="sidebar">
        <div className="column">
          <div>
            <a href="#">Users</a>
            <a href="#">Items</a>
            <a href="#">Tables</a>
            <a href="#">Message</a>
          </div>
          {/* <div className="spacer"></div> */}
          <div>
            <a href="#" className="settings">
              Setting
            </a>
            <a href="#" className="logout">
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
                <button className="delete-button" onClick="">
                  Promote
                </button>
                
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
        <button className="delete-button" onClick={handleDeleteAll}>Delete Selected Users</button>
      </div>)}
    </div>
  );
}
