import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const seller = {
    name: "Raju Bhai",
    phone: "9876543210",
    category: "Fruits",
    location: "Near Lake Market",
    items: ["Apples", "Bananas", "Mangoes"],
  };

  const receivedOrders = [
    { customerName: "Anjali", address: "Park Street", items: ["Apples", "Mangoes"] },
    { customerName: "Ritesh", address: "Lake View Road", items: ["Bananas"] },
    { customerName: "Neha", address: "Gariahat", items: ["Mangoes", "Bananas"] },
    { customerName: "Vikram", address: "Behala", items: ["Apples"] },
  ];

  const ownOrders = [
    { sellerName: "Dinesh Vegetables", location: "Ballygunge", items: ["Tomatoes", "Carrots"], status: "Delivered" },
    { sellerName: "Suman Snacks", location: "Kalighat", items: ["Samosa", "Kachori"], status: "Pending" },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, {seller.name} 👋</h2>

      <div className="dashboard-sections">
        <div className="info-box">
          <h3>🧾 Seller Details</h3>
          <p><strong>📞 Phone:</strong> {seller.phone}</p>
          <p><strong>📦 Category:</strong> {seller.category}</p>
          <p><strong>📍 Location:</strong> {seller.location}</p>
          <p><strong>🛒 Items for Sale:</strong></p>
          <ul>
            {seller.items.map((item, i) => (
              <li key={i}>🍎 {item}</li>
            ))}
          </ul>
        </div>

        <div className="orders-box">
          <h3>📬 Received Orders</h3>
          {receivedOrders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            receivedOrders.map((order, i) => (
              <div key={i} className="order-card">
                <p><strong>👤 Customer:</strong> {order.customerName}</p>
                <p><strong>📫 Address:</strong> {order.address}</p>
                <p><strong>🧺 Items:</strong> {order.items.join(", ")}</p>
              </div>
            ))
          )}
        </div>

        <div className="orders-box own-orders">
          <h3>🛍️ Your Orders from Other Sellers</h3>
          {ownOrders.length === 0 ? (
            <p>No outgoing orders.</p>
          ) : (
            ownOrders.map((order, i) => (
              <div key={i} className="order-card">
                <p><strong>🏪 Seller:</strong> {order.sellerName}</p>
                <p><strong>📍 Location:</strong> {order.location}</p>
                <p><strong>🧺 Items:</strong> {order.items.join(", ")}</p>
                <p><strong>🚚 Status:</strong> {order.status}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
