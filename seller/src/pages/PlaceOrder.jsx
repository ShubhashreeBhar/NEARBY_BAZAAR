import React, { useState, useEffect } from "react";
import API from "../api/api";
import "../styles/PlaceOrder.css";

const PlaceOrder = () => {
   const [sellers, setSellers] = useState([]);
   const [selectedSeller, setSelectedSeller] = useState("");
   const [item, setItem] = useState("");
   const [quantity, setQuantity] = useState("");

   useEffect(() => {
      const fetchSellers = async () => {
         try {
            const res = await API.get("/sellers/all");
            console.log("Fetched sellers:", res.data);
            setSellers(res.data);
         }
         catch (error) {
            console.error("Error fetching sellers:", error);

         }
      };
      fetchSellers();
   }, []);

   const handleOrder = async (e) => {
      e.preventDefault();
      const userId = localStorage.getItem("userId");
      try {
         const res = await API.post("/orders", { user: userId, seller: selectedSeller, item, quantity, });
         alert("Order placed successfully!");
      } catch (error) { alert("Failed to place order"); }
   };

   return (<div className="place-order-container">
      <h2>🛒 Place an Order</h2>
      <form onSubmit={handleOrder}>
         <select value={selectedSeller} onChange={(e) => setSelectedSeller(e.target.value)} required > <option value="">Select Seller</option> {sellers.map((seller) => (<option key={seller._id} value={seller._id}> {seller.name} </option>))} </select> <input type="text" placeholder="Item" value={item} onChange={(e) => setItem(e.target.value)} required /> <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /> <button type="submit">Place Order</button> </form> </div>);
};

export default PlaceOrder;