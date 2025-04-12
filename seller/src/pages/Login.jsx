import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "../styles/Login.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/sellers/login", { phone, password });
      if (res.data.message === "Login successful") {
        localStorage.setItem("seller", JSON.stringify(res.data.seller));
        navigate("/"); // Redirect to homepage
      } else {
        setMessage("❌ Login failed. Please check your credentials.");
      }
    } catch (error) {
      setMessage("❌ Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🔐 Seller Login</h2>
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
        {message && <p className="error-msg">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
