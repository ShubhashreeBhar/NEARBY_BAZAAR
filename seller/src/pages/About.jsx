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
                        🛒 <strong>Nearby Bazaar</strong> is your local shopping companion that bridges the gap between cycle van sellers and neighborhood customers in real-time.
                    </p>
                    <p>
                        🚲 Sellers can easily register on the platform, add their daily items like fresh fruits, vegetables, snacks, and household goods, and share their current location on the go.
                    </p>
                    <p>
                        📱 Customers can browse nearby sellers, explore product lists, place quick orders, and receive instant notifications when a favorite seller is nearby.
                    </p>
                    <p>
                        💬 Real-time updates, simple communication, and location tracking help both sellers and buyers save time and effort.
                    </p>
                    <p>
                        🤝 This platform empowers small businesses, promotes local trade, and encourages a sustainable shopping culture by supporting your neighborhood vendors.
                    </p>
                    <p>
                        🌍 Whether you're looking for fresh produce or snacks on the move — Nearby Bazaar keeps your local market just a tap away.
                    </p>
                    <p>
                        ✅ Shop smart, support local, and enjoy the convenience of Nearby Bazaar!
                    </p>
                </div>

            </div>
        </div >
    );
};

export default About;
