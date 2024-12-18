import React from "react";
// import "./PaymentQR.css";
import GlobalStyle from "../assets/globalStyle/checkout.globalStyle";
import qrCode from "../assets/img/qrCodePayment.png";
const PaymentQR = () => {
  return (
    <div className="payment-qr-container">
      <GlobalStyle/>
      <div className="payment-qr-card">
        <h2 className="payment-title">Payment QR</h2>
        <h3 className="qr-title">Scan QR Code</h3>
        <p className="merchant-info">TTT</p>
        <p className="merchant-id">NMID: 123412341234</p>
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
            <span>$43.50</span>
          </div>
          <div className="price-row">
            <span>Total Receive</span>
            <span>$45.00</span>
          </div>
        </div>
        <div className="actions">
          <button className="cancel-button">Cancel</button>
          <button className="accept-button">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentQR;