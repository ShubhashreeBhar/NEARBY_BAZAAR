import React, { useState } from "react";
import API from "../api/api";
import "../styles/UpdateLocation.css";

const UpdateLocation = () => {
  const [sellerId, setSellerId] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleLocationUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/sellers/${sellerId}/location`, { location });
      setMessage("✅ Location updated!");
    } catch (error) {
      setMessage("❌ Failed to update location.");
    }
  };

  return (
    <div className="register-container">
      <h2>📍 Update Location</h2>
      <form onSubmit={handleLocationUpdate}>
        <input
          type="text"
          placeholder="Seller ID"
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateLocation;
