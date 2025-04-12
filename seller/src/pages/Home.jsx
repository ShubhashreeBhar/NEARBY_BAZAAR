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
        <div className="logo">Nearby Bazaar</div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          {!user ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link primary-btn">Sign Up</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="nav-link">Logout</button>
          )}
        </div>
      </nav>

      {/* Description Section */}
      <section className="description-section">

      </section>


      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Nearby Bazaar</h1>
          <p>Empowering local sellers to reach customers nearby — easily, quickly, and smartly.</p>
          <p1>
            🚀 <strong>Nearby Bazaar</strong> is a community-driven platform designed to bridge the gap between local sellers and nearby customers. Whether you're a small business owner or a neighborhood shopper, this platform empowers you to connect, communicate, and trade efficiently.
          </p1><br /> <br />
          <p1>
            🛒 As a user, you can effortlessly discover local sellers based on categories like groceries, snacks, or essentials — and place orders instantly through a simple and intuitive interface. Our goal is to bring convenience to your fingertips while supporting local entrepreneurship.
          </p1><br /><br />
          <p1>
            🏪 As a seller, you gain access to a digital storefront that allows you to update your product list, manage orders, and reach nearby customers who are looking for exactly what you offer. No complex setup — just sign up, list your items, and start selling!
          </p1><br /><br />
          <p1>
            🌍 Join the <strong>Nearby Bazaar</strong> movement today and be part of a smarter, hyperlocal commerce ecosystem — one that values accessibility, speed, and community spirit.
          </p1><br /><br />
          <div className="hero-buttons">
            <Link to="/dashboard" className="btn primary-btn">Seller Dashboard</Link>
            <Link to="/ViewSellers" className="btn secondary-btn">View Sellers</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;