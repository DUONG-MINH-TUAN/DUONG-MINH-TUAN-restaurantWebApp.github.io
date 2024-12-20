import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer,toast } from 'react-toastify';
import React from "react";
// import './App.css'; // CSS file for styles
import GlobalStyle from "../assets/globalStyle/test.globalStyles";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  
  const {
    cart,
    setCart,
    selectedProducts,
    setSelectedProducts,
    getDishesWithCategory,
    selectedNewButton,
    setSelectedNewButton,
    orderFoods,
  } = useAuth();
  // State for saving data cache
  const [categoryDataCache, setCategoryDataCache] = useState(
    () => JSON.parse(sessionStorage.getItem("categoryDataCache")) || {}
  );
  const [currentCategory, setCurrentCategory] = useState(
    () => sessionStorage.getItem("currentCategory") || 1 // take the session, if not, the default value is 1
  );

  const handleNewButtonClick = (buttonId) => {
    setSelectedNewButton(buttonId);
  };

  // load data from database
  const fetchCategoryData = async (categoryId) => {
    if (categoryDataCache[categoryId]) {
      // if the data is exist in cache, setCart by that data cache
      setCart(categoryDataCache[categoryId]);
    } else {
      try {
        console.log("category in UI cart", categoryId);
        const updateCart = await getDishesWithCategory(categoryId); // send request for categoryId
        setCart(updateCart);
        const updatedCache = {
          ...categoryDataCache,
          [categoryId]: updateCart, // save cache
        };
        setCategoryDataCache(updatedCache);
        sessionStorage.setItem(
          "categoryDataCache",
          JSON.stringify(updatedCache)
        ); // save cache into session
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
  };
//   // take selected products when reloading
// useEffect(() => {
//   const reloadTakeProductsSession = () => {
//     const tempCart = sessionStorage.getItem("selectedProducts");
//     const parseCart = JSON.parse(tempCart);
//     if (parseCart) {
//       try {
//         if (JSON.stringify(parseCart) !== JSON.stringify(selectedProducts)) {
//           setCart(parseCart);
//         }
//       } catch (error) {
//         console.log("Error in selectedProduct UI in parse cart: ", error);
//       }
//     }
//   };
//   reloadTakeProductsSession();
// }, []);

  // hanle category switching
  const handleCategoryClick = (categoryId) => {
    setCurrentCategory(categoryId);
    sessionStorage.setItem("currentCategory", categoryId);
    fetchCategoryData(categoryId);
  };

  // Handle selecting or deselecting a product
  const updateSelectedProducts = (productId, delta) => {
    setSelectedProducts((prev) => {
      let updatedProducts = [...prev];

      const index = updatedProducts.findIndex((item) => item.ID === productId);

      if (index !== -1) {
        const updatedProduct = { ...updatedProducts[index] };
        updatedProduct.quantity = Math.max(0, updatedProduct.quantity + delta);

        if (updatedProduct.quantity === 0) {
          updatedProducts = updatedProducts.filter(
            (item) => item.ID !== productId
          );
        } else {
          updatedProducts[index] = updatedProduct;
        }
      } else if (delta > 0) {
        const productToAdd = cart.find((item) => item.ID === productId);
        if (productToAdd) {
          updatedProducts.push({ ...productToAdd, quantity: delta });
        }
      }

      return updatedProducts;
    });
  };

  // Load the data when first going to the page (Starter)
  useEffect(() => {
    fetchCategoryData(currentCategory);
  }, []);

  //auto save cart into session when the cart is changing
  useEffect(() => {
    if (cart.length > 0) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // take dishes when reloading
  useEffect(() => {
    const reloadTakeDishesSession = () => {
      const tempCart = sessionStorage.getItem("cart");
      const parseCart = JSON.parse(tempCart);
      if (parseCart) {
        try {
          if (JSON.stringify(parseCart) !== JSON.stringify(cart)) {
            setCart(parseCart);
          }
        } catch (error) {
          console.log("Error in cart UI in parse cart: ", error);
        }
      }
    };
    reloadTakeDishesSession();
  }, []);

  // get image path
  const getImagePath = (imageName) => {
    return require(`../assets/img/${imageName}`);
  };

  const handleSendOrder = async(e)=> {
    e.preventDefault();
    if(!selectedProducts){
      toast.error("There is no selected product");
      return;
    }
    await orderFoods();
    navigate("/checkout");
  }

  
  const handleCancleOrder = (e)=> {
    e.preventDefault();
    setSelectedProducts([]);
  }

  useEffect(()=>{
    if(!selectedProducts){
      toast.error("There is no selected product");
    }
  },[selectedProducts])
  return (
    <section>
      <GlobalStyle />
      <ToastContainer/>
      {/* Header*/}
      <div className="header-container">
        <header className="header">
          <div className="logo" onClick={() => navigate("/")}>
            TTT
          </div>
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
          <button
            className={`menu-button ${currentCategory == 1 ? "active" : ""}`}
            onClick={() => handleCategoryClick(1)}
          >
            Starter
          </button>
          <button
            className={`menu-button ${currentCategory == 2 ? "active" : ""}`}
            onClick={() => handleCategoryClick(2)}
          >
            Main Course
          </button>
          <button
            className={`menu-button ${currentCategory == 3 ? "active" : ""}`}
            onClick={() => handleCategoryClick(3)}
          >
            Desserts
          </button>
          <button
            className={`menu-button ${currentCategory == 4 ? "active" : ""}`}
            onClick={() => handleCategoryClick(4)}
          >
            Drinks
          </button>
        </div>

        {/* Main container */}
        <div className="main-container">
          <div className="cart-container">
            {cart.map((product) => (
              <div key={product.ID} className="product-card">
                <div className="image-section">
                  <img
                    src={getImagePath(product.img_url)||"https://via.placeholder.com/100"}
                    alt={product.Name}
                    className="product-image"
                  />
                </div>
                <div className="info-section">
                  <div className="text-section">
                    <h3 className="product-title">{product.Name}</h3>
                    <p className="product-price">${product.price}</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateSelectedProducts(product.ID, -1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-value">
                      {selectedProducts.find((item) => item.ID === product.ID)
                        ?.quantity || 0}
                    </span>
                    <button
                      onClick={() => updateSelectedProducts(product.ID, 1)}
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
            <div className="temp">

          {/* Selected Products Section */}
          <div className="selected-products">
            <div className="selected-products-container">
              {selectedProducts.map((product) => (
                <div key={product.ID} className="selected-product-card">
                  <img
                    src={getImagePath(product.img_url)}
                    alt={product.Name}
                    className="selected-product-image"
                    />
                  <div className="selected-product-info">
                    <div>
                      <h3>{product.Name}</h3>
                      <p>${product.price * product.quantity}</p>
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
          <div className="detail-checkout">

            <div className="order-summary">
              <p>
                Subtotal: $
                {selectedProducts.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                )}
              </p>
              <p>
                Service Charge 10%: $
                {(
                  selectedProducts.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}
              </p>
              <p>
                Total: $
                {(
                  selectedProducts.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) * 1.1
                ).toFixed(2)}
              </p>
            </div>
            {/* New Buttons */}
            <div className="new-buttons-container">
              <button
                className={`new-button ${
                  selectedNewButton === "cash" ? "selected" : ""
                }`}
                onClick={() => handleNewButtonClick("cash")}
                >
                Cash
              </button>
              <button
                className={`new-button ${
                  selectedNewButton === "QR" ? "selected" : ""
                }`}
                onClick={() => handleNewButtonClick("QR")}
                >
                QR
              </button>
            </div>
            <div className="order-actions">
              <button className="cancel-order" onClick={(e)=> handleCancleOrder(e)}>Cancel Order</button>
              <button
                className="send-order"
                onClick={(e) => handleSendOrder(e)}
                >
                Send Order
              </button>
            </div>
          </div> 
          {/* detail-checkout */}
        </div>
        {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Cart;
