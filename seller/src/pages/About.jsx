import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <h2 className="about-title">About Nearby Bazar</h2>
                <img
                    src="/images/seller.png"
                    alt="Local seller"
                    className="about-img"
                    loading="lazy"
                />

                <div className="about-content">
                    <p>
                        🛒 <strong>Nearby Bazar</strong> helps cycle van sellers connect with local customers in real-time.
                    </p>
                    <p>
                        Sellers can register, list products (fruits, vegetables, snacks), and update live locations 📍.
                    </p>
                    <p>
                        Customers can view sellers, place orders 🧾, and get alerts when favorite sellers are nearby 💖.
                    </p>
                    <p>
                        Supporting local sellers has never been easier — shop smart, shop local!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
