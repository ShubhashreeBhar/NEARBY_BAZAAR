import React, { useState } from "react";
import "../styles/Registeruser.css";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", { name, phone, password });
      navigate("/login/user");
    } catch (err) {
      setMessage("❌ Registration failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="register-container-user">
      <div className="register-box-user">
        <h2>👤 User Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
        {message && <p className="error-msg">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterUser;
