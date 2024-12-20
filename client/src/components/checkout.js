import React from "react";
// import "./PaymentQR.css";
import GlobalStyle from "../assets/globalStyle/checkout.globalStyle";
import qrCode from "../assets/img/qrCodePayment.png";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const PaymentQR = () => {
  const navigate = useNavigate();
  const {selectedProducts,setSelectedProducts} = useAuth();
  const totalReceive = (
    selectedProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) * 0.1
  ).toFixed(2);

  const handleAccept = (e) => {
    e.preventDefault();
    setSelectedProducts([]);
    navigate("/");
  }
  return (
    <div className="payment-qr-container">
      <GlobalStyle/>
      <div className="payment-qr-card">
        <h2 className="payment-title">Payment QR</h2>
        <h3 className="qr-title">Scan QR Code</h3>
        <p className="merchant-info">TTT</p>
        <p className="merchant-id">Account ID: 99MM24270M84427777</p>
        <div className="qr-code">
          {/* Replace with your QR code image */}
          <img
            src={qrCode} // Example QR code placeholder
            alt="QR Code"
          />
        </div>
        <p className="qr-instruction">Scan the QR code above</p>
        <div className="price-details">
          <div className="price-row">
            <span>Total Price</span>
            <span>{(
                  selectedProducts.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Total Receive</span>
            <span>{totalReceive}</span>
          </div>
        </div>
        <div className="actions">
          <button className="cancel-button" onClick={()=>navigate("/cart")}>Cancel</button>
          <button className="accept-button" onClick = {(e)=>handleAccept(e)}>Accept</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentQR;