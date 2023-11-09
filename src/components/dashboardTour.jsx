import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Notiflix from "notiflix";

import { BiPlusCircle, BiCurrentLocation } from "react-icons/bi";
import { FaTrash, FaCalendarAlt, FaUpload } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { GiTimeBomb, GiBackwardTime } from "react-icons/gi";
import { AiTwotoneEdit } from "react-icons/ai";
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

function dashboardTour() {
  const [formData, setFormData] = useState({
    destination: "",
    backdropImage: null,
    title: "",
    Description: "",
    Duration: "",
    Group_size: "",
    Price: "",
    Discount: "",
    Tour_type: "",
    Departure: "",
    Seats: "",
    fromMonth: "",
    toMonth: "",
    departureTime: "",
    ReturnTime: "",
    Gallery: null,
  });

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userForEdit, setUserForEdit] = useState(null);
  const [tourToEdit, setTourToEdit] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [addTourModel, setAddTourModel] = useState(false);

  const openModal = (tour) => {
    setTourToEdit(tour);
    setFormData({
      destination: tour.destination || "",
      backdropImage: null, // Set to null, as it's not clear from your code
      title: tour.title || "",
      Description: tour.Description || "",
      Duration: tour.Duration || "",
      Group_size: tour.Group_size || "",
      Price: tour.Price || "",
      Discount: tour.Discount || "",
      Tour_type: tour.Tour_type || "",
      Departure: tour.Departure || "",
      Seats: tour.Seats || "",
      fromMonth: tour.fromMonth || "",
      toMonth: tour.toMonth || "",
      departureTime: tour.departureTime || "",
      ReturnTime: tour.ReturnTime || "",
      Gallery: null,
    });

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openTourModal = () => {
    setAddTourModel(true);
  };

  const closeTourModel = () => {
    setAddTourModel(false);
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);
  const handleConfirmDelete = async (tour) => {
    try {
      Notiflix.Confirm.show(
        "DELETE TOUR",
        "Do you really wanna delete this tour?",
        "YES",
        "NO",
        async () => {
          const res = await axios.delete(
            `https://holiday-api-zj3a.onrender.com/api/v1/tour/delete?fieldName=_id&value=${tour._id}`
          );
          window.location.reload();
        },
        () => {
          Notiflix.Notify.info("You've canceled delete operation..");
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (tours) => {
    setTourToDelete(tours);
    handleConfirmDelete();
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
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

    // async function to fetch data
    fetchData();
  }, []);

  // Handle form input changes and update the formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleAddTour = async (event) => {
    event.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === null) {
        Notiflix.Notify.warning(`Please fill the ${key} field.`);
        return; // Exit the function if any field is empty
      }
    }

    // Create the data object to send to the API
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      // Send a POST request to your API
      await axios.post(
        "https://holiday-api-zj3a.onrender.com/api/v1/tour/addNew",
        data
      );

      // Close the modal after successfully creating the tour
      closeTourModel();

      // You may also want to refresh the tour data to show the newly created tour.
    } catch (error) {
      console.error("Error creating tour:", error);
      // Handle the error as needed (e.g., display an error message).
    }
    window.location.reload();
  };

  const handleEditTour = async (event) => {
    event.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === null) {
        Notiflix.Notify.warning(`Please fill the ${key} field.`);
        return; // Exit the function if any field is empty
      }
    }

    // Create the data object to send to the API
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      // Send a POST request to your API
      const response = await axios.put(
        `https://holiday-api-zj3a.onrender.com/api/v1/tour/updateEntireElement`,
        data
      );
      console.log("API Response:", response);

      // Close the modal after successfully creating the tour
      closeTourModel();
      setTourToEdit(null);

      // You may also want to refresh the tour data to show the newly created tour.
    } catch (error) {
      console.error("Error editing tour:", error);
      // Handle the error as needed (e.g., display an error message).
    }
    // window.location.reload();
  };

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
      <div className="dashboard-tour-sec">
        <div className="container">
          <div className="row">
            <div className="dashboard-tour-main">
              <div className="dashboard-tour-header">
                <div className="section-title">
                  <h2>tours</h2>
                </div>
                <div className="dashboard-tour-button">
                  <a className="btn add-tour-btn" onClick={openTourModal}>
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
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEditTour(e);
                      }}
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
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
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
                            name="backdropImage"
                            onChange={handleFileChange}
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
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
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
                            name="Description"
                            value={formData.Description}
                            onChange={handleInputChange}
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
                            name="Duration"
                            value={formData.Duration}
                            onChange={handleInputChange}
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
                            name="Group_size"
                            value={formData.Group_size}
                            onChange={handleInputChange}
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
                            name="Price"
                            value={formData.Price}
                            onChange={handleInputChange}
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
                            name="Discount"
                            value={formData.Discount}
                            onChange={handleInputChange}
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
                            name="Tour_type"
                            value={formData.Tour_type}
                            onChange={handleInputChange}
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
                            name="Departure"
                            value={formData.Departure}
                            onChange={handleInputChange}
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
                            name="Seats"
                            value={formData.Seats}
                            onChange={handleInputChange}
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
                            name="fromMonth"
                            value={formData.fromMonth}
                            onChange={handleInputChange}
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
                            name="toMonth"
                            value={formData.toMonth}
                            onChange={handleInputChange}
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
                            name="departureTime"
                            value={formData.departureTime}
                            onChange={handleInputChange}
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
                            name="ReturnTime"
                            value={formData.ReturnTime}
                            onChange={handleInputChange}
                          />
                        </span>
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FcGallery />
                          </span>
                          <input
                            type="file"
                            placeholder="Gallery"
                            className="form-input"
                            accept="image/*"
                            multiple
                            name="Gallery"
                            onChange={handleFileChange}
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <div className=" edit-tour-btn">
                          <button type="submit" className="btn confirm-btn">
                            confirm
                          </button>
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
            {addTourModel && (
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
                    <h2>create tour</h2>
                    <form
                      className="edit-tour-form"
                      style={{ maxHeight: "180vh" }}
                      onSubmit={handleAddTour}
                    >
                      <div className="col-12">
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <BiCurrentLocation />
                          </span>
                          <input
                            type="text"
                            name="destination"
                            placeholder="Destination"
                            className="form-input"
                            value={formData.destination}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                destination: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FaUpload />
                          </span>
                          <input
                            type="file"
                            name="backdropImage"
                            placeholder="Upload Image"
                            className="form-input"
                            accept="image/*"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                backdropImage: e.target.files[0],
                              })
                            }
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
                            name="title"
                            placeholder="Title"
                            className="form-input"
                            value={formData.title}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                title: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdOutlineDescription />
                          </span>
                          <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="form-input"
                            value={formData.Description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Description: e.target.value,
                              })
                            }
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
                            name="duration"
                            placeholder="Duration"
                            className="form-input"
                            value={formData.Duration}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Duration: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdGroups />
                          </span>
                          <input
                            type="text"
                            name="Group_size"
                            placeholder="Group Size"
                            className="form-input"
                            value={formData.Group_size}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Group_size: e.target.value,
                              })
                            }
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
                            name="Price"
                            placeholder="Price[$]"
                            className="form-input"
                            value={formData.Price}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Price: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <TbDiscountCheckFilled />
                          </span>
                          <input
                            type="text"
                            name="Discount"
                            placeholder="Discount: Percentage"
                            className="form-input"
                            value={formData.Discount}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Discount: e.target.value,
                              })
                            }
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
                            name="tourType"
                            placeholder="Tour Type"
                            className="form-input"
                            value={formData.Tour_type}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Tour_type: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdDepartureBoard />
                          </span>
                          <input
                            type="text"
                            name="departure"
                            placeholder="Departure"
                            className="form-input"
                            value={formData.Departure}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Departure: e.target.value,
                              })
                            }
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
                            name="seats"
                            placeholder="Seats"
                            className="form-input"
                            value={formData.Seats}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Seats: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FaCalendarAlt />
                          </span>
                          <input
                            type="text"
                            name="fromMonth"
                            placeholder="From Month"
                            className="form-input"
                            value={formData.fromMonth}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fromMonth: e.target.value,
                              })
                            }
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
                            name="toMonth"
                            placeholder="To Month"
                            className="form-input"
                            value={formData.toMonth}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                toMonth: e.target.value,
                              })
                            }
                          />
                        </span>

                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <MdOutlineDepartureBoard />
                          </span>
                          <input
                            type="text"
                            name="departureTime"
                            placeholder="Departure Time"
                            className="form-input"
                            value={formData.departureTime}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                departureTime: e.target.value,
                              })
                            }
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
                            name="returnTime"
                            placeholder="Return Time"
                            className="form-input"
                            value={formData.ReturnTime}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                ReturnTime: e.target.value,
                              })
                            }
                          />
                        </span>
                        <span className="input-box no-arrow col-6">
                          <span className="icon">
                            <FcGallery />
                          </span>
                          <input
                            type="file"
                            name="gallery"
                            placeholder="Gallery"
                            className="form-input"
                            accept="image/*"
                            multiple // Allow multiple images
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Gallery: e.target.files[0],
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="col-12">
                        <div className="edit-tour-btn">
                          <button type="submit" className="btn confirm-btn">
                            confirm
                          </button>
                          <button
                            className="btn cancel-btn"
                            onClick={closeTourModel}
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
                      <span className="table-header duration-header col-2">
                        duration
                      </span>
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
                        <span className="durationValue col-2">
                          {tour.Duration}
                        </span>
                        <span className="destinationValue col-2">
                          {tour.Group_size}
                        </span>
                        <span className="destinationValue col-1">
                          $ {tour.Price}
                        </span>
                        <span className="destinationValue col-2">
                          <button
                            className="table-action-btn"
                            onClick={() => openModal(tour)}
                          >
                            <AiTwotoneEdit />
                          </button>
                          <button
                            className="table-action-btn"
                            onClick={() => handleConfirmDelete(tour)}
                          >
                            <FaTrash />
                          </button>
                          {showDeleteConfirm && (
                            <div className="popup">
                              <p>
                                Are you sure you want to delete{" "}
                                {tourToDelete._id}?
                              </p>
                              <button onClick={handleDeleteClick}>Ok</button>
                              <button onClick={handleCancelDelete}>
                                Cancel
                              </button>
                            </div>
                          )}
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
