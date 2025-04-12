import React, { useState } from "react";
import "../styles/Registerseller.css";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const RegisterSeller = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    location: "",
    category: "",
    items: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedItems = formData.items.split(",").map(item => item.trim());
      await API.post("/sellers/register", { ...formData, items: formattedItems });
      navigate("/login");
    } catch (error) {
      alert("❌ Error registering seller: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="register-container-seller">
      <div className="register-box-seller">
        <h2>🛒 Register as a Seller</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <input type="text" name="category" placeholder="Category (e.g. Fruits)" value={formData.category} onChange={handleChange} required />
          <input type="text" name="items" placeholder="Items (comma-separated)" value={formData.items} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterSeller;
