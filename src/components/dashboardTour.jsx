import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { BiPlusCircle, BiCurrentLocation } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { FaTrash, FaCalendarAlt, FaUpload } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { GiTimeBomb, GiBackwardTime } from "react-icons/gi";
import { ImPriceTag } from "react-icons/im";
import {
  MdTitle,
  MdOutlineDescription,
  MdGroups,
  MdPriceChange,
  MdTour,
  MdDepartureBoard,
  MdAirlineSeatReclineExtra,
  MdOutlineDepartureBoard,
  MdOutlinePriceChange,
} from "react-icons/md";
import { TbDiscountCheckFilled } from "react-icons/tb";

import abtImg from "../assets/about-banner.jpg";

function dashboardTour() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userForEdit, setUserForEdit] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://holiday-api-zj3a.onrender.com/api/v1/tour/all"
        );
        setTours(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    //async function to fetch data
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  return (
    <section className="dashboard-main">
      <div className="dashboard-tour-sec">
        <div className="container">
          <div className="row">
            <div className="dashboard-tour-main">
              <div className="dashboard-tour-header">
                <div className="section-title">
                  <h2>tours</h2>
                </div>
                <div className="dashboard-tour-button">
                  <a className="btn add-tour-btn">
                    <BiPlusCircle style={{ fontSize: "21px" }} />{" "}
                    <span>add tour</span>
                  </a>
                </div>
              </div>
            </div>

            {isModalOpen && (
              <div className="model-overlay">
                <div
                  className="modal"
                  style={{
                    position: "fixed",
                    width: "100%",
                    top: "0",
                    left: "0",
                    background: "#2b2b2b80",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "auto",
                  }}
                >
                  <div className="edit-tour">
                    <h2>
                      edit tour #<span>trip-name</span>
                    </h2>
                    <form
                      className="edit-tour-form"
                      style={{ maxHeight: "180vh" }}
                    >
                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <BiCurrentLocation />
                          </span>
                          <input
                            type="text"
                            placeholder="Destination"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FaUpload />
                          </span>
                          <input
                            type="file"
                            placeholder="upload Image"
                            className="form-input"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                            }}
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdTitle />
                          </span>
                          <input
                            type="text"
                            placeholder="Title"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdOutlineDescription />
                          </span>
                          <input
                            type="text"
                            placeholder="Description"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <GiTimeBomb />
                          </span>
                          <input
                            type="text"
                            placeholder="Duration"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdGroups />
                          </span>
                          <input
                            type="text"
                            placeholder="Group Size"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdPriceChange />
                          </span>
                          <input
                            type="text"
                            placeholder="Price"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <TbDiscountCheckFilled />
                          </span>
                          <input
                            type="text"
                            placeholder="Discount: Percentage"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdTour />
                          </span>
                          <input
                            type="text"
                            placeholder="Tour Type"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdDepartureBoard />
                          </span>
                          <input
                            type="text"
                            placeholder="Departure"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdAirlineSeatReclineExtra />
                          </span>
                          <input
                            type="text"
                            placeholder="Seats"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FaCalendarAlt />
                          </span>
                          <input
                            type="text"
                            placeholder="From Month"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FaCalendarAlt />
                          </span>
                          <input
                            type="text"
                            placeholder="To Month"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdOutlineDepartureBoard />
                          </span>
                          <input
                            type="text"
                            placeholder="Departure Time"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <GiBackwardTime />
                          </span>
                          <input
                            type="text"
                            placeholder="Return Time"
                            className="form-input"
                          />
                        </span>
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FcGallery />
                          </span>
                          <input
                            type="text"
                            placeholder="Gallery"
                            className="form-input"
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdOutlinePriceChange />
                          </span>
                          <input
                            type="text"
                            placeholder="Price Included"
                            className="form-input"
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <ImPriceTag />
                          </span>
                          <input
                            type="text"
                            placeholder="Price Not Included"
                            className="form-input"
                          />
                        </span>
                      </div>
                      <div className="col-12">
                        <div className=" edit-tour-btn">
                          <button className="btn confirm-btn">confirm</button>
                          <button
                            className="btn cancel-btn"
                            onClick={closeModal}
                          >
                            cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className="dashboard-tour-main">
              <div className="dashboard-container container">
                <div className="row">
                  <div className="dashboard-tour-table-header">
                    <div className="row">
                      <span className="table-header col-3">
                        destination image
                      </span>
                      <span className="table-header col-2">destination</span>
                      <span className="table-header col-2">duration</span>
                      <span className="table-header col-2">group size</span>
                      <span className="table-header col-1">price</span>
                      <span className="table-header col-2">actions</span>
                    </div>
                  </div>
                  <div className="dashboard-tour-table-content">
                    {tours.map((tour) => (
                      <div className="row" key={tour._id}>
                        <span className="destinationValue col-3">
                          <img
                            src={tour.backdropImage}
                            style={{
                              height: "30px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </span>
                        <span className="destinationValue col-2">
                          {tour.title}
                        </span>
                        <span className="destinationValue col-2">
                          {tour.Duration}
                        </span>
                        <span className="destinationValue col-2">
                          {tour.Group_size} people
                        </span>
                        <span className="destinationValue col-1">
                          ${tour.Price}
                        </span>
                        <span className="destinationValue col-2">
                          <button
                            className="table-action-btn"
                            onClick={openModal}
                          >
                            <BsPencilFill />
                          </button>
                          <button className="table-action-btn">
                            <FaTrash />
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
    </section>
  );
}

export default dashboardTour;
