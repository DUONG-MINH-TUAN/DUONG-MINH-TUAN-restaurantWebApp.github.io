import item1 from "../assets/img/item-1.png";
import minus from "../assets/img/minus.svg";
import plus from "../assets/img/plus.svg";
import item2 from "../assets/img/item-2.png";
import item3 from "../assets/img/item-3.png";
import item4 from "../assets/img/item-4.png";
import item5 from "../assets/img/item-5.png";
import item6 from "../assets/img/item-7.webp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from 'react';
// import './App.css'; // CSS file for styles
import GlobalStyle from "../assets/globalStyle/test.globalStyles";
const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    { id: 1, name: "French Fries", price: 5, quantity: 0 },
    { id: 2, name: "Summer Salad", price: 10, quantity: 0 },
    { id: 3, name: "Chicken Wings", price: 20, quantity: 0 },
    { id: 4, name: "Spaghetti", price: 15, quantity: 0 },
    { id: 5, name: "Grilled Fish", price: 25, quantity: 0 },
    { id: 6, name: "Fried Rice", price: 12, quantity: 0 },
    { id: 7, name: "Burger", price: 8, quantity: 0 },
    { id: 8, name: "Pizza", price: 18, quantity: 0 },
    { id: 9, name: "Hot Dog", price: 6, quantity: 0 },
    { id: 10, name: "Ice Cream", price: 7, quantity: 0 },
    { id: 11, name: "Ice Cream", price: 7, quantity: 0 },
    { id: 12, name: "Ice Cream", price: 7, quantity: 0 },
    { id: 13, name: "Ice Cream", price: 7, quantity: 0 },
  ]);

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };
  const handleHome = ()=>{
    navigate("/");
  }
  return (
    <section>
 <GlobalStyle/>
    {/* Header (Tách ra ngoài) */}
    <div className="header-container">
    <header className="header">
      <div className="logo" onClick={handleHome}>TTT</div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search product or any order..."
        />
      <button className="call-button">Call Staff</button>
    </header>
  </div>
    <div className="page-container">
       
        
      

      {/* Left container with buttons */}
      <div className="side-container left-container">
        <button className="menu-button">Starter</button>
        <button className="menu-button">Main Course</button>
        <button className="menu-button">Desserts</button>
        <button className="menu-button">Drinks</button>
      </div>
  
      {/* Main container */}
      <div className="main-container">
        <div className="cart-container">
          {cart.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-section">
                <img
                  src={item1}
                  alt={product.name}
                  className="product-image"
                  />
              </div>
              <div className="info-section">
                <div className="text-section">

                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="quantity-btn"
                    >
                    -
                  </button>
                  <span className="quantity-value">{product.quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="quantity-btn"
                    >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Right container */}
      <div className="side-container right-container">
        <h3 className="order-header">ORDER #</h3>
        
        {/* Selected Products Section */}
        <div className="selected-products">
          
            <div className="selected-products-container">
              {cart
                .filter((item) => item.quantity > 0)
                .map((product) => (
                  <div key={product.id} className="selected-product-card">
                    <img
                      src={item2}
                      alt={product.name}
                      className="selected-product-image"
                    />
                    <div className="selected-product-info">
                      <div>
                      <h3>{product.name}</h3>
                      <p>${product.price* product.quantity}</p>
                      </div>
                      <div>
                      <h3>Quantity:</h3>
                      <p>{product.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        
        </div>

        <div className="order-summary">
          <p>
            Subtotal: $
            {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </p>
          <p>
            Service Charge 10%: $
            {(
              cart.reduce((sum, item) => sum + item.price * item.quantity, 0) *
              0.1
            ).toFixed(2)}
          </p>
          <p>
            Total: $
            {(
              cart.reduce((sum, item) => sum + item.price * item.quantity, 0) *
              1.1
            ).toFixed(2)}
          </p>
        </div>
        <div className="order-actions">
          <button className="cancel-order">Cancel Order</button>
          <button className="send-order">Send Order</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Cart;
