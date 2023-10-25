import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Notiflix from "notiflix";

import {
  FaUserAlt,
  FaLock,
  FaGooglePlusSquare,
  FaFacebookF,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginBgImage from "../assets/highlight-image.jpg";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: Cookies.get("rememberMe") === "true",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleLogin = () => {
    if (formData.rememberMe) {
      Cookies.set("rememberMe", formData.rememberMe, { expires: 365 });
    } else {
      Cookies.remove("rememberMe");
    }

    axios
      .post("https://holiday-api-zj3a.onrender.com/api/v1/auth/login", formData)
      .then((response) => {
        if (response.status === 200) {
          // Retrieve the user role from the cookie
          const userRole = Cookies.get("userRole");
          Notiflix.Notify.success("LOGIN SUCCESSFULLY");
          navigate("/dashboard");
        } else {
          Notiflix.Notify.failure(
            "Invalid email or password. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        Notiflix.Notify.failure("Invalid email or password. Please try again.");
      });
  };

  return (
    <main className="login-page">
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-4 login-left">
              <div className="col-12">
                <div className="login-title">
                  <h2 className="h3-title">Login</h2>
                  <p>
                    Doesn't yet have an account?{" "}
                    <Link to="/signup">Create an account</Link>
                  </p>
                </div>
                <div className="col-12">
                  <label className="label-input">Email Address</label>
                  <span className="input-box no-arrow">
                    <span className="icon">
                      <i>
                        <FaUserAlt />
                      </i>
                    </span>
                    <input
                      type="text"
                      placeholder="you@example.com"
                      className="form-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="col-12" style={{ marginBottom: "5px" }}>
                  <label className="label-input">Password</label>
                  <span className="input-box no-arrow">
                    <span className="icon">
                      <i>
                        <FaLock />
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
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label className="check-box-label">Remember Me</label>
                  </div>
                </div>
                <div className="col-12 login-btn">
                  <button className="btn" onClick={handleLogin}>
                    Login
                  </button>
                </div>
                <div
                  className="col-12 login-line"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "10px 0",
                  }}
                >
                  <div className="col-2">
                    <hr />
                  </div>
                  <div className="col-8">
                    <p>or login with</p>
                  </div>
                  <div className="col-2">
                    <hr />
                  </div>
                </div>
                <div
                  className="col-12 login-buttons"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div className="col-5">
                    <button className="google-login">
                      <span className="icon">
                        <FaGooglePlusSquare />
                      </span>
                      Google
                    </button>
                  </div>
                  <div className="col-5">
                    <button className="fb-login">
                      <span className="icon">
                        <FaFacebookF />
                      </span>
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-8 login-right"
              style={{
                backgroundImage: `url(${loginBgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="login-right-content">
                <h2 className="h2-title">Welcome to our Login Page</h2>
                <p>
                  Log in to your account to access all the amazing features and
                  services we offer. If you don't have an account yet, you can{" "}
                  <Link to="/signup">create one here</Link>.
                </p>
                <Link to="/dashboard">
                  <h3>Return to home</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
