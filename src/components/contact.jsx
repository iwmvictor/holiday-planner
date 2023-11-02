import React, { useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBook,
  FaAngleRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAt,
} from "react-icons/fa";

import contactBanner from "../assets/contact-banner.jpg";
import gaqBg from "../assets/get-a-questions-back.jpg";

function contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    fullName: "",
    service: "",
    phoneNumber: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${contactBanner})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const gaqBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#c29d59",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the API to submit the form data
    axios
      .post(
        "https://holiday-api-zj3a.onrender.com/api/v1/cont/contact",
        formData
      )
      .then((response) => {
        setIsFormSubmitted(true);
        // You can handle success here
        setFormData({
          message: "",
          fullName: "",
          email: "",
          phoneNumber: "",
          service: "",
        });
        Notiflix.Notify.info("Your Message Submitted Successfully!");
      })
      .catch((error) => {
        console.error("Error submitting the form: ", error);
        // You can handle errors here
      });
  };

  return (
    <main className="contact">
      <div className="contact-hero" style={backgroundStyle}>
        <div className="col-12">
          <div className="banner-content">
            <h1 className="h1-title">Contact us</h1>
          </div>
        </div>
      </div>
      <div className="main-contact-sec">
        <div className="container">
          <div className="row main-contact-row">
            <div className="col-8">
              <div className="left-side">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row contact-form-container">
                      <div className="contact-form-input col-6">
                        <span className="input-box">
                          <span className="icon">
                            <FaUser />
                          </span>
                          <input
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Full Name *"
                            className="form-input"
                          />
                        </span>
                      </div>
                      <div className="contact-form-input col-6">
                        <span className="input-box">
                          <span className="icon">
                            <FaEnvelope />
                          </span>
                          <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email *"
                            className="form-input"
                          />
                        </span>
                      </div>
                      <div className="contact-form-input col-6">
                        <span className="input-box">
                          <span className="icon">
                            <FaPhoneAlt />
                          </span>
                          <input
                            required
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Phone *"
                            className="form-input"
                          />
                        </span>
                      </div>
                      <div className="contact-form-input col-6">
                        <span className="input-box">
                          <span className="icon">
                            <FaBook />
                          </span>
                          <input
                            required
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Services *"
                            className="form-input"
                          />
                        </span>
                      </div>
                      <div className="contact-form-input col-12">
                        <span className="input-box">
                          <textarea
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message *"
                            cols={30}
                            rows={4}
                            className="form-input"
                          ></textarea>
                        </span>
                      </div>
                      <div className=" form-btn col-12 contact-form-input">
                        <span className="input-box button-wrap">
                          <button className="btn">
                            <span>submit</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="right-side">
                <div className="widget why-book-us">
                  <div className="line-title">
                    <h4 className="h4-title">Why Book With Us?</h4>
                  </div>
                  <ul className="book-with-list">
                    <li>
                      <FaAngleRight />
                      Best Price Guarantee
                    </li>
                    <li>
                      <FaAngleRight />
                      Customer care available 24/7
                    </li>
                    <li>
                      <FaAngleRight />
                      Free Travel Insureance
                    </li>
                    <li>
                      <FaAngleRight />
                      Hand-picked Tours & Activities
                    </li>
                  </ul>
                </div>
                <div className="widget gaq" style={gaqBgStyle}>
                  <div className="line-title">
                    <h4 className="h4-title">Got a Question?</h4>
                  </div>
                  <p>
                    Do not hesitage to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <ul className="gaq-list-item">
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <i>
                          <FaEnvelope />
                        </i>{" "}
                        holidayplanners@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <i>
                          <FaPhoneAlt />
                        </i>{" "}
                        +123 456 7890
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container-map-sec">
        <div className="container-map">
          <div className="row container-map-row">
            <div className="col-5">
              <div className="contact-box-wrap">
                <div className="contact-box">
                  <div className="line-title">
                    <h4 className="h4-title">Rwanda Office</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/">
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>{" "}
                        KN 104, Kigali - Rwanda
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>{" "}
                        +123 456 7890
                      </a>
                    </li>
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <span className="icon">
                          <FaAt />
                        </span>{" "}
                        holidayplanners@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contact-box">
                  <div className="line-title">
                    <h4 className="h4-title">usa office</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/">
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>{" "}
                        KN 104, Kigali - Rwanda
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>{" "}
                        +123 456 7890
                      </a>
                    </li>
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <span className="icon">
                          <FaAt />
                        </span>{" "}
                        holidayplannersusa@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contact-box contact-box3">
                  <div className="line-title">
                    <h4 className="h4-title">victoria office</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/">
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>{" "}
                        KN 104, Kigali - Rwanda
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>{" "}
                        +123 456 7890
                      </a>
                    </li>
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <span className="icon">
                          <FaAt />
                        </span>{" "}
                        holidayplannersvic@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="contact-map-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.5542673647913!2d29.642937489314438!3d-1.5092811053131292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc5b179124681b%3A0x1a740669367be13c!2sGOICO%20Plaza!5e0!3m2!1sen!2srw!4v1697278941115!5m2!1sen!2srw"
                  width="100"
                  height="100"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default contact;
