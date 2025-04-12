import React from "react";
import "../../styles/SellerCard.css"; // 👈 Make sure this file exists or adjust the path

const SellerCard = ({ name, phone, location, category, items }) => {
  return (
    <div className="seller-card">
      <h3>{name} 🚲</h3>
      <p><strong>📞 Phone:</strong> {phone}</p>
      <p><strong>📍 Location:</strong> {location}</p>
      <p><strong>🏷️ Category:</strong> {category}</p>
      <p><strong>🛒 Items:</strong> {items.join(", ")}</p>
    </div>
  );
};

export default SellerCard;
