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
import DashboardNav from "./components/dashboardNav";
import AdminTourMgt from "./components/dashboardTour";
import AdminPlaces from "./components/dashboardPlace";
import AdminChat from "./components/dashboardChat";
import RebaTour from "./components/displaytours";

import "./style/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour-detail" element={<TourDetail />} />
          <Route path="/tour" element={<Tour />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tour" element={<AdminTourMgt />} />
          <Route path="places" element={<AdminPlaces />} />
          <Route path="chat" element={<AdminChat />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/reba" element={<RebaTour />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);