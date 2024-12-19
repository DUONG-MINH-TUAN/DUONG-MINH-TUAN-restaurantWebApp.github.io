import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* PaymentQR.css */
.payment-qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

body {
height: 100%;
}

#root{
height:100%;
}
.payment-qr-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.payment-title {
  font-size: 18px;
  font-weight: bold;
  color: #beA47A;
  margin-bottom: 10px;
}

.qr-title {
  font-size: 20px;
  font-weight: bold;
  color: #6b4f26;
}

.merchant-info {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}

.merchant-id {
  font-size: 14px;
  color: #6b4f26;
}

.qr-code img {
  width: 250px;
  height: 250px;
  margin: 15px 0;
}

.qr-instruction {
  font-size: 14px;
  color: #888;
  margin: 10px 0;
}

.price-details {
  margin: 20px 0;
}

.price-row {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #6b4f26;
  background-color: #f8f5f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.cancel-button,
.accept-button {
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button {
  background-color: white;
  color: #6b4f26;
  border: 1px solid #6b4f26;
}

.accept-button {
  background-color: #beA47A;
  color: white;
}

.cancel-button:hover {
  background-color: #f8f5f0;
}

.accept-button:hover {
  background-color: #9c8a6b;
}
`;
export default GlobalStyle;