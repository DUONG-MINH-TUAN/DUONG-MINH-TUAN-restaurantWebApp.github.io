import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import GlobalStyle from "../assets/globalStyle/manageUser.globalStyle";
export default function ManageMenu() {
    const {users} = useAuth();
  useEffect(() => {
    function deleteRow(button) {
      const row = button.closest("tr");
      row.remove();
    }

    // function addNewUser() {
    //   const table = document.querySelector("table tbody");
    //   const rowCount = table.rows.length + 1;

    //   const newRow = document.createElement("tr");
    //   newRow.innerHTML = `
    //             <td>${rowCount}</td>
    //             <td><img className="avatar" src="https://via.placeholder.com/40" alt="Avatar"/></td>
    //             <td>New User</td>
    //             <td>
    //                 <select>
    //                     <option>Admin</option>
    //                     <option>Customer</option>
    //                 </select>
    //             </td>
    //             <td><button className="delete-button" onclick="deleteRow(this)">Delete</button></td>
    //         `;

    //   table.appendChild(newRow);
    // }
  }, []);
  return (
    <div className="row">
      <GlobalStyle />
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
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  className="avatar"
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                />
              </td>
              <td>{user.name}</td>
              <td>
                {user.email}
              </td>
              <td>
                <button className="delete-button" onclick="">
                  Promote
                </button>
                
              </td>
              <td>
                <button className="delete-button" onclick="">
                  Delete
                </button>
                </td>
            </tr>
            ))}
            
          </tbody>
        </table>
        
      </div>)}
    </div>
  );
}
