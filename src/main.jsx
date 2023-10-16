import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout";
import DashboardLayout from "./components/dashboardLayout";
import Home from "./components/home";
import Contact from "./components/contact";
import Login from "./components/login";
import Signup from "./components/signup";
import TourDetail from "./components/tourDetail";
import Tour from "./components/tour";
import Dashboard from "./components/dashboard";

import "./style/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tour-detail" element={<TourDetail />} />
          <Route path="/tour" element={<Tour />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
