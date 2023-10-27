import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Notiflix from 'notiflix';


import signupImg from "../assets/highlight-video.mp4";
import highlightVid from "../assets/highlight-video.mp4";

function Signup() {
  const signupBgStyle = {
    backgroundImage: `url(${signupImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "email" && value.includes("@")) {
      // Notiflix.Notify.info("You've entered email address'.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      Notiflix.Notify.warning("Please fill out all fields.");
      return;
    }

    axios
      .post(
        "https://holiday-api-zj3a.onrender.com/api/v1/auth/signup",
        formData
      )
      .then((response) => {
        if (response.status === 201) {
          Notiflix.Notify.success("Account created successfully. You can now log in.");
          // Set the user role in a cookie
          Cookies.set("userRole", formData.role);
          navigate("/login");
        } else {
          Notiflix.Notify.failure("Account creation failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        Notiflix.Notify.failure("Account creation failed. Please try again.");
      });
  };

  return (
    <div className="signup-container">
      <div className="row">
        <div className="left-side col-5">
          <div className="signup-title">
            <h2 className="signup-htitle">Sign Up</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              expedita nam amet veniam labori
            </p>
          </div>
          <div className="signup-form">
            <div className="col-12">
              <label className="label-input">Email Address</label>
              <span className="input-box no-arrow">
                <span className="icon">
                  <i>
                    <FaUserAlt />
                  </i>
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </span>
            </div>
            <div className="col-12">
              <label className="label-input">Full Name</label>
              <span className="input-box no-arrow">
                <span className="icon">
                  <i>
                    <FaUserAlt />
                  </i>
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </span>
            </div>
            <div className="col-12">
              <label className="label-input">Password</label>
              <span className="input-box no-arrow">
                <span className="icon">
                  <i>
                    <FaUserAlt />
                  </i>
                </span>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </span>
            </div>
            <div className="col-12">
              <label className="label-input">Phone Number</label>
              <span className="input-box no-arrow">
                <span className="icon">
                  <i>
                    <FaUserAlt />
                  </i>
                </span>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="form-input"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </span>
            </div>
            <div className="col-12">
              <label className="label-input">Location</label>
              <span className="input-box no-arrow">
                <span className="icon">
                  <i>
                    <FaUserAlt />
                  </i>
                </span>
                <input
                  type="text"
                  placeholder="Location"
                  className="form-input"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </span>
            </div>
            <div className="col-12">
              <button className="signup-button btn" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
            <p className="signup-bottom-text">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
        <div className="right-side col-7">
          <div className="container">
            <div className="signup-side-content" style={signupBgStyle}>
              <div className="highlight-bg-video">
                <video autoPlay muted loop>
                  <source src={highlightVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="signup-cta-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, corrupti exercitationem? Magni, doloribus.
                  Consectetur doloribus at laborum veniam fugiat fugit nulla,
                  excepturi, ut illo ad iusto corrupti ullam deleniti amet?
                </p>
                <h2>
                  You're new here? <span>create an account</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
