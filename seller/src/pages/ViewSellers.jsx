import React, { useEffect, useState } from "react";
import "../styles/ViewSellers.css";
import API from "../api/api";
import SellerCard from "../components/pages/SellerCard"; // Adjust if path differs

const ViewSellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await API.get("/sellers");
        setSellers(response.data);
      } catch (error) {
        console.error("❌ Error fetching sellers:", error.message);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div className="view-sellers-container">
      <h2>📍 Nearby Sellers</h2>
      <div className="sellers-list">
        {sellers.length > 0 ? (
          sellers.map((seller, index) => (
            <SellerCard
              key={seller._id || index}
              name={seller.name}
              phone={seller.phone}
              location={seller.location}
              category={seller.category}
              items={seller.items}
            />
          ))
        ) : (
          <p>No sellers available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ViewSellers;
