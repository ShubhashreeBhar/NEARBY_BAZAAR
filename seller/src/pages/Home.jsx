import React, { useEffect, useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
 import "../styles/home.css";

const Home = () => {

  const [user, setUser] = useState(null); 
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const seller = localStorage.getItem("seller");
    setUser(!!user || !!seller);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("seller");
    setUser(false);
    navigate("/");
  };
  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Nearby Bazar</div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          {!user ? (
             <> <Link to="/login" className="nav-link">
              Login
              </Link> 
              <Link to="/register" className="nav-link primary-btn">
              Sign Up
              </Link>
           </> ) : ( <button onClick={handleLogout} className="nav-link">
            Logout
            </button> )} 
            </div> 
            </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Nearby Bazar</h1>
          <p>Empowering local sellers to reach customers nearby — easily, quickly, and smartly.</p>
          <div className="hero-buttons">
            <Link to="/dashboard" className="btn primary-btn">Seller Dashboard</Link>
            <Link to="/ViewSellers" className="btn secondary-btn">View Sellers</Link>
            <Link to="/place-order" className="btn primary-btn">Place Order</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;