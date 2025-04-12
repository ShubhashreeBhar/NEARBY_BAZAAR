import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterSeller from "./pages/RegisterSeller";
import Dashboard from "./pages/Dashboard";
import UpdateLocation from "./pages/UpdateLocation";
import OrderForm from "./pages/OrderForm";
import OrderSuccess from "./pages/ordersucess";
import ViewSellers from "./pages/ViewSellers";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import ChooseRole from "./pages/ChooseRole";
import RegisterUser from "./pages/RegisterUser";
import UserLogin from "./pages/UserLogin";
import About from "./pages/About";
import OrderHistoryUser from "./pages/OrderHistoryUser";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<ChooseRole />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/seller" element={<RegisterSeller />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update-location" element={<UpdateLocation />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/ViewSellers" element={<ViewSellers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-history/user" element={<OrderHistoryUser />} />
      </Routes>
    </Router>
  );
};

export default App;
