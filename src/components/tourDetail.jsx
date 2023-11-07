import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Notiflix from "notiflix";

import {
  FaBookOpen,
  FaCalendarAlt,
  FaCameraRetro,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaSun,
  FaUser,
  FaUserFriends,
  FaUserPlus,
  FaUserTag,
  FaUsers,
  FaAngleRight,
} from "react-icons/fa";

import highlightVid from "../assets/highlight-video.mp4";
import gaqBg from "../assets/get-a-questions-back.jpg";

function TourDetail() {
  const gaqBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#c29d59",
  };

  const { tourId } = useParams();
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://holiday-api-zj3a.onrender.com/api/v1/tour/getByField?fieldName=_id&value=${tourId}`
      )
      .then((response) => {
        setTourData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tour data:", error);
      });
  }, [tourId]);

  // Conditional rendering to display data when it's available
  if (tourData.length === 0) {
    return <div>Loading...</div>;
  }

  const firstTour = tourData[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Collect booking data from form
    const fullName = e.target.elements.fullName.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const paymentMethod = e.target.elements.paymentMethod.value;
    const NumberOfTicket = e.target.elements.NumberOfTicket.value;
    const message = e.target.elements.message.value;

    // Get the current date
    const date = new Date();

    // Define booking data
    const bookingData = {
      tourID: tourId,
      isPayed: true, // You can customize this based on your logic
      paymentMethod, // You can customize this based on your logic
      fullName,
      email,
      phone,
      date, // Use the current date
      NumberOfTicket,
      message,
    };

    // Make a POST request to the booking API
    axios
      .post(
        "https://holiday-api-zj3a.onrender.com/api/v1/booking/book",
        bookingData
      )
      .then((response) => {
        // Handle success, e.g., show a success message

        // Clear input fields
        e.target.elements.fullName.value = "";
        e.target.elements.email.value = "";
        e.target.elements.phone.value = "";
        e.target.elements.paymentMethod.value = "";
        e.target.elements.NumberOfTicket.value = "";
        e.target.elements.message.value = "";

        Notiflix.Notify.info("Booking Successfully");
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error booking tour:", error);
      });
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${firstTour.backdropImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <main className="tour-detail">
      <div className="tour-hero" style={backgroundStyle}>
        <div className="col-12">
          <div className="banner-content">
            <h1 className="h1-title">{firstTour.title}</h1>
          </div>
        </div>
      </div>
      <div className="main-tour-detail pb-70">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="left-side">
                <div className="tour-detail-tabbing">
                  <ul className="nav nav-tabs wow" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link active"
                        id="information-tab"
                      >
                        <i>
                          <FaInfoCircle />
                        </i>
                        Information
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="tour-plan-tab"
                      >
                        <i>
                          <FaBookOpen />
                        </i>
                        Tour Plan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="location-tab"
                      >
                        <i>
                          <FaMapMarkerAlt />
                        </i>
                        Location
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="gallery-tab"
                      >
                        <i>
                          <FaCameraRetro />
                        </i>
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="review-tab"
                      >
                        <i>
                          <FaUsers />
                        </i>
                        Review
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane show active"
                      id="information"
                      role="tabpanel"
                    >
                      <div className="tab-box information-tab-box">
                        <span className="discount-label">
                          {firstTour.Discount} Off
                        </span>
                        <div className="row">
                          <div className="col-9">
                            <div className="tour-title">
                              <h2 className="h2-title">
                                A wonderful serenity has taken possession of my
                                entire soul
                              </h2>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="tur-price-wp">
                              <div className="tour-price">
                                <h3 className="h3-title">{firstTour.Price}</h3>
                                <p>Per Person</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tour-short-info-box">
                          <ul>
                            <li>
                              <i>
                                <FaClock />
                              </i>
                              <span className="text">{firstTour.Duration}</span>
                            </li>
                            <li>
                              <i>
                                <FaUserFriends />
                              </i>
                              <span className="text">
                                {firstTour.Group_size} People
                              </span>
                            </li>
                            <li>
                              <i>
                                <FaUserPlus />
                              </i>
                              <span className="text">{firstTour.Seats}</span>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaMapMarkerAlt />
                                </i>
                                <span className="text">
                                  {firstTour.destination}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaSun />
                                </i>
                                <span className="text">
                                  {firstTour.Tour_type}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="tour-description">
                          <p>
                            {" "}
                            I should be incapable of drawing a single stroke at
                            the present moment; and yet I feel that I never was
                            a greater artist than now. When, while the lovely
                            valley teems with vapour around me, and the meridian
                            sun strikes the upper surface of the impenetrable
                            foliage of my trees, and but a few stray gleams.
                          </p>
                          <p>
                            {" "}
                            I should be incapable of drawing a single stroke at
                            the present moment; and yet I feel that I never was
                            a greater artist than now. When, while the lovely
                            valley teems with vapour around me, and the meridian
                            sun strikes the upper surface of the impenetrable
                            foliage of my trees, and but a few stray gleams
                            steal into the inner sanctuary, I throw myself down
                            among the tall grass by the trickling stream; and,
                            as I lie close to the earth, a thousand unknown
                            plants are noticed by me: when I hear the buzz of
                            the little world among the stalks, and grow familiar
                            with the countless indescribable forms of the
                            insects and flies, then I feel the presence of the
                            Almighty, who formed us in his own image, and the
                            breath
                          </p>
                        </div>
                        <div className="tour-video mt-40">
                          <video loop muted autoPlay controls>
                            <source src={highlightVid} type="video/mp4" />
                            <a
                              href="/"
                              className="play-btn"
                              title="Play Video"
                            ></a>
                          </video>
                        </div>
                        <div className="tour-timetable-schedule mt-40 mb-40">
                          <ul>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Destination</h4>
                              </div>
                              <div className="tts-description">
                                <a href="#">{firstTour.destination}</a>
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Departure</h4>
                              </div>
                              <div className="tts-description">
                                {firstTour.Departure}
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Departure Time</h4>
                              </div>
                              <div className="tts-description">
                                {firstTour.departureTime || "8:00 AM - 9:30 AM"}
                                .
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Return Time Time</h4>
                              </div>
                              <div className="tts-description">
                                {firstTour.ReturnTime ||
                                  "Approximately 10h30 PM"}
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Dress Code</h4>
                              </div>
                              <div className="tts-description">
                                Comfortable clothing and light jacket.
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Price included</h4>
                              </div>
                              <div className="tts-description">
                                <ul className="included">
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    5 Star Accomodation
                                  </li>
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    Air foses
                                  </li>
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    3 Nights Hotel Accomodation
                                  </li>
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    All transportation in destination location
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Price Not Included</h4>
                              </div>
                              <div className="tts-description">
                                <ul className="not-included">
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    Guide Service Fee
                                  </li>
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    Any Private Expenses
                                  </li>
                                  <li>
                                    <i>
                                      <FaCheck />
                                    </i>{" "}
                                    Room Service Fees
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="row no-gutters tour-gallery-slider">
                          {firstTour.Gallery &&
                            firstTour.Gallery.map((image, index) => (
                              <div key={index} className="col-4 p-0">
                                <div className="tour-gallery-slide-image back-image">
                                  <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="right-side">
                <div className="widget wow">
                  <div className="line-title">
                    <h4 className="h4-title">Book This Tour</h4>
                  </div>
                  <div className="find-tour-form">
                    <form onSubmit={handleBookingSubmit}>
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
                              name="fullName"
                              placeholder="Full Name"
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
                              name="email"
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
                                <FaPhone />
                              </i>
                            </span>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone"
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
                            <input
                              type="text"
                              name="paymentMethod"
                              placeholder="Payment Method"
                              className="form-input"
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
                              type="text"
                              name="NumberOfTicket"
                              placeholder="Number of Tickets"
                              className="form-input"
                            />
                          </span>
                        </div>
                        <div className="col-12">
                          <span className="input-box">
                            <textarea
                              placeholder="Message"
                              name="message"
                              cols="30"
                              rows="10"
                              className="form-input"
                            ></textarea>
                          </span>
                        </div>
                        <div className="col-12">
                          <div className="checkbox-item">
                            <input
                              type="checkbox"
                              name="check-availability"
                              id="check-availability"
                            />
                            <label
                              htmlFor="check-availability"
                              className="check-box-label"
                            >
                              Check Availability
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn find-now-btn">
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

export default TourDetail;
