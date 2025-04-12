import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "../styles/userlogin.css";

const UserLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", { phone, password });
      if (res.data.message === "Login successful") {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("userId", res.data.user._id);
        navigate("/"); // Redirect on success
      }
    } catch (error) {
      setMessage("❌ Login failed. Check your credentials.");
    }
  };

  return (
    <div className="register-container">
      <h2>👤 User Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserLogin;
