import { useEffect,useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import GlobalStyle from "../assets/globalStyle/order.globalStyle";
import { useNavigate } from "react-router-dom";
export default function OrderTracking() {
  const { orders, setOrders, convertToOrders,logout,promoteAdminButGet,getAllAdminIds } = useAuth();
    const navigate = useNavigate();

  // Save orders into the session storage
  useEffect(() => {
    sessionStorage.setItem("orders", JSON.stringify(orders));
    console.log(
      "Values of orders in session in auth context: ",
      sessionStorage.getItem("orders")
    );
  }, [orders]);

  // Retrieve orders from session storage on reload
  useEffect(() => {
    const reloadTakeOrdersSession = () => {
      const tempOrders = sessionStorage.getItem("orders");
      const parseOrders = JSON.parse(tempOrders);
      if (parseOrders) {
        try {
          if (JSON.stringify(parseOrders) !== JSON.stringify(orders)) {
            setOrders(parseOrders);
          }
        } catch (error) {
          console.error("Error parsing orders from session:", error);
        }
      }
    };
    reloadTakeOrdersSession();
  }, []);

  const handleLogout = async(e) => {
    e.preventDefault();
      await logout();
      navigate("/login");
  }
  
    const handlePromoteAdmin = useCallback(async (e)=>{
            e.preventDefault();
            await promoteAdminButGet();
            await getAllAdminIds();
            //navigate to manageUser
            navigate("/manage-user");
        },[]);
  
  return (
    <section>
        <GlobalStyle/>
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
        <h1>Food Order Tracking</h1>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Foods</th>
              <th>Quantities</th>
              {/* <th>Total Price</th> */}
              <th>Date</th>
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.ID}>
                {/* Order ID */}
                <td>{order.ID}</td>

                {/* User */}
              { order.User_ID && (
                  <td>{order.username}</td>
                )
              }
              {
                order.Guest_ID && (
                    <td>{order.Guest_ID}</td>
                )
              }
                {/* Foods*/}
                <td>
                  {order.name}
                </td>

              {/* Quantities*/}
                <td>
                  {order.Quantity}
                </td>

                {/* Total Price
                <td>${order.totalPrice.toFixed(2)}</td> */}

                {/* Date */}
                <td>{order.date}</td>

                {/* Status Dropdown
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => {
                      const updatedOrders = orders.map((o) =>
                        o.orderId === order.orderId
                          ? { ...o, status: e.target.value }
                          : o
                      );
                      setOrders(updatedOrders);
                    }}
                  >
                    <option value="pending">PENDING</option>
                    <option value="cooking">COOKING</option>
                    <option value="completed">DELIVERED</option>
                  </select>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
