import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaTrash } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";

function DashboardBooking() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingLength, setBookingLength] = useState(0);

  useEffect(() => {
    // Fetch all bookings
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/booking/all")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
        setBookingLength(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });

    // Fetch all users
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/auth/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    // Fetch all tours
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/tour/all")
      .then((response) => {
        setTours(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      });
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
    return <div>Error: {error.message} </div>;
  }

  return (
    <section className="dashboard-main">
      <div className="dashboard-user-sec">
        <div className="container">
          <div className="tour-booking">
            <div className="row datat">
              <div className="booking-header">
                <div className="row">
                  <div className="booking-header-title">
                    <span className="booking-title">tour booking</span>
                    <span className="booking-subtitle">
                      showing available tour bookings
                    </span>
                  </div>
                  <div className="total-bookings">
                    <span className="total-booking">
                      total bookings <b>{bookingLength}</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="booking-body">
                <div className="row">
                  <div className="bookings-header">
                    <div className="row">
                      <span style={{ flexBasis: "5%" }}>#id</span>
                      <span style={{ flexBasis: "20%" }}>tour name</span>
                      <span style={{ flexBasis: "20%" }}>traveller</span>
                      <span style={{ flexBasis: "12%" }}>Group size</span>
                      <span style={{ flexBasis: "12%" }}>pay method</span>
                      <span style={{ flexBasis: "10%" }}>status</span>
                      <span style={{ flexBasis: "20%" }}>action</span>
                    </div>
                  </div>
                  {/* Your existing JSX for booking header here */}
                  <div className="bookings-content">
                    <div className="row">
                      {bookings.map((booking, index) => (
                        <div key={index} className="booking-row row">
                          <span style={{ flexBasis: "5%" }}>{index + 1}</span>
                          <span style={{ flexBasis: "20%" }}>
                            {tours.find((tour) => tour._id === booking.tourID)
                              ?.destination || "N/A"}
                          </span>
                          <span style={{ flexBasis: "20%" }}>
                            {/* {users.find((user) => user._id === booking.UserID)
                              ?.fullName || "N/A"} */}
                            {booking.email || "N/A"}
                          </span>
                          <span style={{ flexBasis: "12%" }}>
                            {booking.NumberOfTicket || "N/A"}
                          </span>
                          <span style={{ flexBasis: "12%" }}>
                            {booking.paymentMethod || "N/A"}
                          </span>
                          <span style={{ flexBasis: "10%" }}>
                            {booking.Status || "N/A"}
                          </span>
                          <span
                            className="booking-btn"
                            style={{ flexBasis: "20%" }}
                          >
                            <button>
                              <FaTrash />
                            </button>
                            <button>
                              <BiSolidEditAlt />
                            </button>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardBooking;
