import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    if (role === "user") navigate("/register/user");
    else navigate("/register/seller");
  };

  return (
    <div className="chooserole-container">
      <div className="chooserole-box">
        <h2>📝 Register as</h2>
        <div className="role-buttons">
          <button onClick={() => handleSelect("user")}>User</button>
          <button onClick={() => handleSelect("seller")}>Seller</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
