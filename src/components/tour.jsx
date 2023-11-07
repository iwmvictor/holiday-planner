import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

import {
  FaAngleRight,
  FaCalendarAlt,
  FaCaretDown,
  FaClock,
  FaMapMarkerAlt,
  FaSearch,
  FaUserFriends,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import tourBanner from "../assets/tour-banner.jpg";
import tourBoxImg1 from "../assets/tour-box-image1.jpg";
import tourBoxImg2 from "../assets/tour-box-image2.jpg";
import tourBoxImg3 from "../assets/tour-box-image4.jpg";
import gaqBg from "../assets/get-a-questions-back.jpg";
import loaderImg from "../assets/ajax-loader.gif";

function tour() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tourBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const gaqBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#c29d59",
  };

  const [tourz, setTourz] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://holiday-api-zj3a.onrender.com/api/v1/tour/all"
        );
        setTourz(response.data); // Assuming the data is an array of tours
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Call the async function to fetch data
    fetchData();
  }, []);

  if (loading) {
    return (
      <div class="loader-wrapper">
        <div class="loader">
          <div class="circle outer">
            <div class="circle middle">
              <div class="circle inner">
                <div class="circle inniest"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <main className="tour">
        <div className="tour-hero" style={backgroundStyle}>
          <div className="col-12">
            <div className="banner-content">
              <h1 className="h1-title">Tour List</h1>
            </div>
          </div>
        </div>
        <div className="main-tour-list-sec">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="left-side">
                  <div className="tour-filter">
                    <form>
                      <div className="row no-gutter">
                        <div className="col-4">
                          <label className="form-input filter-label">
                            {" "}
                            Sort by :
                          </label>
                        </div>
                        <div className="col-4">
                          <span className="input-box release-wrap">
                            <select className="form-input">
                              <option selected>Release Date</option>
                              <option>Tour Date</option>
                              <option>Title</option>
                              <option>Price</option>
                              <option>Popularity</option>
                              <option>Rating</option>
                              <option>Duration</option>
                            </select>
                            <span className="arrow">
                              <i>
                                <FaCaretDown />
                              </i>
                            </span>
                          </span>
                        </div>
                        <div className="col-4">
                          <span className="input-box order-wrap">
                            <select className="form-input">
                              <option>Ascending</option>
                              <option selected>Descending</option>
                            </select>
                            <span className="arrow">
                              <i>
                                <FaCaretDown />
                              </i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tour-filter-result">
                    <div className="row">
                      {tourz.map((tour) => (
                        <div key={tour._id} className="col-6">
                          <div className="tour-box">
                            <div
                              className="tour-box-image"
                              style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tour.backdropImage})`, backgroundPosition: 'center', backgroundSize: 'cover',
                              }}
                            >
                              <span className="discount-label">
                                {tour.Discount} Off
                              </span>
                            </div>
                            <div className="tour-box-content">
                              <div className="tour-box-label">
                                <div className="tour-box-label-inner">
                                  <h4 className="h4-title">
                                    {" "}
                                    {tour.destination}
                                  </h4>
                                </div>
                              </div>
                              <div className="tour-box-title">
                                <h4 className="h4-title">
                                  {tour.title ||
                                    " Holidays Planners is a World Leading Online Tour Booking Platform. "}
                                </h4>
                              </div>
                              <div className="tour-box-description">
                                <p>
                                  {tour.Description ||
                                    " Illum consequatur nostrum illo sunt ipsum amet inventore ut, mollitia cumqueIllum, consequatur nostrum illo sunt ipsum amet inventore ut, mollitia cumque pariatur quos reiciendis exercitationem temporibus quo ratione iure!"}
                                </p>
                              </div>
                              <div className="tour-info-box">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="tour-info">
                                      <div className="tour-info-icon">
                                        <i>
                                          <FaClock />
                                        </i>
                                      </div>
                                      <div className="tour-info-content">
                                        <h5 className="h6-title">Duration</h5>
                                        <p> {tour.Duration}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="tour-info">
                                      <div className="tour-info-icon">
                                        <i>
                                          <FaUserFriends />
                                        </i>
                                      </div>
                                      <div className="tour-info-content">
                                        <h5 className="h6-title">Group Size</h5>
                                        <p>{tour.Group_size}+ People</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tour-box-bottom">
                                <div className="tour-price">
                                  <h3 className="h3-title">$ {tour.Price} </h3>
                                </div>
                                <Link to={`/tour/${tour._id}`}>
                                  <div className="book-now-button">
                                    <span className="btn">Book Now</span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul className="pagination">
                          <li className="page-item active">
                            <a href="/" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="/" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="/" className="page-link" aria-label="Next">
                              <i>
                                <FaAngleRight />
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="right-side">
                  <div className="widget">
                    <div className="line-title">
                      <h4 className="h4-title">Find Your Tour</h4>
                    </div>
                    <div className="find-tour-form">
                      <form>
                        <div className="row">
                          <div className="col-12">
                            <span className="input-box">
                              <span className="icon">
                                <i>
                                  <FaSearch />
                                </i>
                              </span>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Search Tour"
                              />
                            </span>
                          </div>
                          <div className="col-12">
                            <span className="input-box">
                              <span className="icon">
                                <i>
                                  <FaMapMarkerAlt />
                                </i>
                              </span>
                              <input
                                type="text"
                                placeholder="Where To?"
                                className="form-input"
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
                              <select className="form-input">
                                <option selected value="month">
                                  Month
                                </option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                              <span className="arrow">
                                <i>
                                  <FaCaretDown />
                                </i>
                              </span>
                            </span>
                          </div>
                          <div className="col-12">
                            <label className="label-input">Duration</label>
                            <span className="input-box no-icon">
                              <select className="form-input">
                                <option selected value="any">
                                  Any
                                </option>
                                <option>1 Day Tour</option>
                                <option>2 - 4 Days</option>
                                <option>5 - 7 Days</option>
                                <option>7+ Days</option>
                              </select>
                              <span className="arrow">
                                <i>
                                  <FaCaretDown />
                                </i>
                              </span>
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="label-input">Min Price</label>
                            <span className="input-box no-arrow no-icon">
                              <input
                                type="number"
                                placeholder="1"
                                className="form-input"
                              />
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="label-input">Max Price</label>
                            <span className="input-box no-icon no-arrow">
                              <input
                                type="number"
                                className="form-input"
                                placeholder="100"
                              />
                            </span>
                          </div>
                          <div className="col-12">
                            <div className="checkbox-list">
                              <div className="checkbox-item">
                                <input
                                  type="checkbox"
                                  name="cultural"
                                  id="cultural"
                                  value="cultural"
                                />
                                <label className="check-box-label">
                                  Cultural
                                </label>
                              </div>
                              <div className="checkbox-item">
                                <input
                                  type="checkbox"
                                  name="adventure"
                                  id="adventure"
                                  value="adventure"
                                />
                                <label className="check-box-label">
                                  Adventure
                                </label>
                              </div>
                              <div className="checkbox-item">
                                <input
                                  type="checkbox"
                                  name="historical"
                                  id="historical"
                                  value="historical"
                                />
                                <label className="check-box-label">
                                  Historical
                                </label>
                              </div>
                              <div className="checkbox-item">
                                <input
                                  type="checkbox"
                                  name="seaside"
                                  id="seaside"
                                  value="seaside"
                                />
                                <label className="check-box-label">
                                  Seaside
                                </label>
                              </div>
                              <div className="checkbox-item">
                                <input
                                  type="checkbox"
                                  name="discovery"
                                  id="discovery"
                                  value="discovery"
                                />
                                <label className="check-box-label">
                                  Discovery
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn find-now-btn">
                              <span>Find Now</span>
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
                      Do not hesitage to give us a call. We are an expert team
                      and we are happy to talk to you.
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
      <Outlet />
    </>
  );
}

export default tour;
