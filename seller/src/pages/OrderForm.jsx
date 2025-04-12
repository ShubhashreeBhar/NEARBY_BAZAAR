import React, { useState } from "react";
import "../styles/OrderForm.css";

const OrderForm = ({ seller, onOrderPlaced }) => {
  const [customerName, setCustomerName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      sellerId: seller.id,
      customerName,
      contact,
      item: selectedItem,
      quantity,
      note,
    };
    console.log("Order Placed:", order);
    onOrderPlaced(order); // You can pass this to backend later
  };

  return (
    <div className="order-form-container">
      <h3>Place an Order with {seller.name}</h3>
      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          required
        >
          <option value="">Select Item</option>
          {seller.items.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <textarea
          placeholder="Any special note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit" className="submit-order-btn">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
