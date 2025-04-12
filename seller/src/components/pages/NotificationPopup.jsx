import React from "react";
import "../styles/Notification.css";

const NotificationPopup = ({ sellerName, items }) => {
  return (
    <div className="notification-popup">
      <h4>📢 New Seller Nearby: {sellerName}</h4>
      <p>Items Available: {items.join(", ")}</p>
    </div>
  );
};

export default NotificationPopup;
