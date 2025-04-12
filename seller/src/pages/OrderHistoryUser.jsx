import React, { useEffect, useState } from "react";
import API from "../api/api";

const OrderHistoryUser = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = localStorage.getItem("userId");
      const res = await API.get(`/orders/user/${userId}`);
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>📦 Your Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="order-card">
          <p>Seller: {order.seller?.name}</p>
          <p>Items: {order.items.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryUser;
