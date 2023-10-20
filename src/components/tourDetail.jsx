import React from "react";

import tourDetailBanner from "../assets/tour-detail-banner.jpg";
import gaqBg from "../assets/get-a-questions-back.jpg";

import {
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
  FaUser,
  FaAngleRight,
  FaUserTag,
} from "react-icons/fa";

function tourDetail() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tourDetailBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  const gaqBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#c29d59",
  };

  return (
    <main className="tourDetail">
      <div className="detail-hero" style={backgroundStyle}>
        <div className="col-12">
          <div className="banner-content">
            <h1 className="h1-title">Italy</h1>
          </div>
        </div>
      </div>
      <div className="main-tour-detail-sec">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="left-side">.</div>
            </div>

            <div className="col-4">
              <div className="right-side">
                <div className="widget">
                  <div className="line-title">
                    <h4 className="h4-title">Book This Tour</h4>
                  </div>
                  <div className="find-tour-form">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <span className="input-box">
                            <span className="icon">
                              <i>
                                <FaUser />
                              </i>
                            </span>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="Full Name"
                              required
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <span className="icon">
                              <i>
                                <FaEnvelope />
                              </i>
                            </span>
                            <input
                              type="email"
                              placeholder="Email"
                              className="form-input"
                              required
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <span className="icon">
                              <i>
                                <FaEnvelope />
                              </i>
                            </span>
                            <input
                              type="email"
                              placeholder="Confirm Email"
                              className="form-input"
                              required
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <span className="icon">
                              <i>
                                <FaPhone />
                              </i>
                            </span>
                            <input
                              type="text"
                              placeholder="Phone*"
                              className="form-input"
                              required
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <span className="icon">
                              <i>
                                <FaCalendarAlt />
                              </i>
                            </span>
                            <input
                              type="date"
                              className="form-input"
                              required
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <span className="icon">
                              <i>
                                <FaUserTag />
                              </i>
                            </span>
                            <input
                              type="number"
                              className="form-input"
                              placeholder="Number Of Tickets"
                              required
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <textarea
                              cols="30"
                              rows="10"
                              className="form-input"
                              placeholder="Message"
                            ></textarea>
                          </span>
                        </div>
                        <div className="col-12">
                          <div className="checkbox-item">
                            <input
                              type="checkbox"
                              id="check-availability"
                              name="check-availability"
                              value="check-availability"
                            />
                            <label
                              htmlFor="check-availability"
                              className="check-box-label"
                            >
                              {" "}
                              Check Availability
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn find-now-btn">
                            <span>Book Now</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="widget why-book-us"
                  style={{ background: "#f6f6f6" }}
                >
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
    </main>
  );
}

export default tourDetail;
