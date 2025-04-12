import React from "react";
import "../styles/OrderSucess.css";

const OrderSuccess = ({ onBackToHome }) => {
  return (
    <div className="order-success-container">
      <div className="order-success-card">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>
          Thank you for your order. The seller has been notified and will
          contact you shortly.
        </p>
        <button onClick={onBackToHome} className="back-home-btn">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
