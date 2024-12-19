import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.logo{
  font-family: "Lavishly Yours", cursive;
  font-weight: 400;
  width:100px;
  height:auto;
  font-size: 40px;
  color: #FAE889;
  cursor: pointer;
}

.image-section img{
width:170px;
height:170px;
border-right: 1px solid white;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  display: flex;
  height: 90vh;
  background-color: #f8f9fa;
  flex-direction: row;
}

/* Header Container */
.header-container {
  width: 100%;
  background-color: #BEA47A;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}



.search-bar {
  flex: 1;
  padding: 10px;
  margin: 0 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}


.call-button {
  background-color: #f0ad4e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Left container */
.left-container {
  width: 10%;
  background-color:#1E242A;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  border-right: 2px solid rgb(225, 225, 225); /* Đường thẳng dọc */
}

.menu-button {
  background-color: #BEA47A;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  width: 100%;
 
}

.menu-button:hover {
  background-color:rgb(152, 131, 98);
}

/* Main container */
.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height:100%;
  background-color: #1E242A;
}

.cart-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  overflow-y: auto;
  padding: 20px;
  background-color:#1E242A;
}

/* New Buttons Container */
.new-buttons-container {
  display: flex;
  justify-content: space-around; /* Space between buttons */
  margin-top: 10px; /* Add spacing from above content */
  padding: 10px 0;
  border-top: 1px solid #ddd; /* Optional separator line */
}

/* New Buttons */
.new-button {
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.new-button.selected {
  background-color: yellow;
  color: black;
}

.product-card {
  display: flex;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.selected-product-info p{
font-size: 18px;
}

.selected-product-card img{

width:100px;
height:100px;
border-right: 1px solid white;
}
.image-section {
  flex: 6;
  background-color:rgb(255, 255, 255);
}

.info-section {
  flex: 4;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #BEA47A;
}

.text-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* Chỉ áp dụng căn giữa cho tên sản phẩm và giá tiền */
  justify-content: center;
}

.product-title {
  font-size: 14px;
  font-weight: bold;
}

.product-price {
  font-size: 16px;
  color: #888;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quantity-btn {
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.quantity-value {
  font-size: 16px;
  font-weight: bold;
}

/* Right container */
.right-container {
  color:#BEA47A;
  width: 27%;
  background-color: #1E242A;
  padding: 20px;
  border-left: 1px solid #ddd;
  display: flex;
  // width: 100%; /* Full width */
  height: 90vh; /* Full viewport height */
}

.side-container.right-container {
    display: flex;
    flex-direction: column;
}

.temp{
display: flex;
    flex-direction: column;
}

.order-header {
  font-size: 18px;
  font-weight: bold;
}

.order-items {
  margin: 10px 0;
}

.order-item {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.order-summary {
  // margin-top: -77px;
  border-top: 1px solid #ddd;
  // padding-top: 20px;
  margin-top: 20px;
}

.order-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
  .order-actions button {
  width: 48%; /* Ensure buttons fit comfortably within the row */
}

/* Buttons */
.cancel-order {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.send-order {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-order:hover {
  background-color: darkred;
}

.send-order:hover {
  background-color: darkgreen;
}

.detail-checkout{
    display: flex;
    flex-direction: column;
// flex: 4;
}

.selected-products {

  // margin-top: 20px;
  // padding: 20px;
  border-color: 2px solid #BEA47A;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 18rem; /* Fixed height to fit two items vertically */
  overflow-y: auto; /* Enable vertical scrolling if items exceed two */
  background-color: #1E242A;
  // flex: 6;
  // width: 350px;
}

/* Ẩn scrollbar trên trình duyệt Webkit (Chrome, Edge, Safari) */
.selected-products::-webkit-scrollbar {
  display: none; /* Ẩn scrollbar */
}

.cart-container::-webkit-scrollbar {
  display: none; /* Ẩn scrollbar */
}
.selected-products-container {

display: flex;
  flex-direction: column; /* Items are stacked vertically */
  gap: 10px;
}

.selected-product-card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color:rgb(212, 228, 234);
  max-width: 100%;
  height: 95px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   margin: 0; /* Đảm bảo không có khoảng cách dư thừa */
  padding: 0; /* Loại bỏ padding */
}

.selected-product-image {
  height: 95px;
  object-fit: cover;
}

.selected-product-info {
  padding: 5px;
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: space-between;
  align-items: center;
}
.selected-product-info > div {
  display: flex; /* Bên trong mỗi phần, sử dụng Flexbox */
  flex-direction: column; /* Đặt các thành phần theo chiều dọc */
}

.selected-product-info > div:first-child {
  flex: 1; /* Chiếm không gian còn lại để đẩy phần thứ hai sang phải */
}

.selected-product-info > div:last-child {
  text-align: right; /* Căn chỉnh nội dung bên phải */
}

.menu-actions {

background-color: #BEA47A;
  display: flex;
  justify-content: space-between; /* Chia đôi khoảng cách giữa các nút */
  padding: 0; /* Loại bỏ padding dư thừa */
  gap: 0; /* Đảm bảo không có khoảng trắng ở giữa */
}

.menu-actions > div {
  flex: 1; /* Chia đều mỗi container */
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
  justify-content: center; /* Căn giữa theo chiều ngang */
}


.menu-btn{
  padding:15px;
}

.send-btn{
padding:15px;
}

`;

export default GlobalStyle;
