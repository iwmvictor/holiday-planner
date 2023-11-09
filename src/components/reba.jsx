import React, { useState, useEffect } from "react";
import axios from "axios";
import Notiflix from "notiflix";

import { BiPlusCircle, BiFilter } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import {
  FaSearch,
  FaFilePdf,
  FaFileExcel,
  FaPrint,
  FaTrash,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaUserShield,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

import loaderImg from "../assets/ajax-loader.gif";

function dashboardUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [userForEdit, setUserForEdit] = useState(null);

  const openModal = (user) => {
    Notiflix.Notify.info("Edit user form");
    setModalOpen(true);
    setUserForEdit(user); //pre-fill user data in input fields
  };

  const closeModal = () => {
    Notiflix.Notify.info("Edit user canceled");
    setModalOpen(false);
  };

  const openAddUserModal = () => {
    Notiflix.Notify.info("Add new user");
    setAddUserModal(true);
  };

  const closeAddUserModal = () => {
    Notiflix.Notify.info("Add user form closed");
    setAddUserModal(false);
  };

  useEffect(() => {
    // Fetch the list of registered users from the API
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/auth/users")
      .then((response) => {
        setUsers(response.data); // Assuming the data is an array of users
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleDeleteUser = (user) => {
    Notiflix.Confirm.show(
      "Confirm Delete",
      `Are you sure you want to delete ${user.fullNames}?`,
      "Yes",
      "No",
      function () {
        // User clicked "Yes," so proceed with deletion
        axios
          .delete(
            `https://holiday-api-zj3a.onrender.com/api/v1/auth/users/delete/${user.email}`
          )
          .then(() => {
            const updatedUsers = users.filter((u) => u._id !== user._id);
            setUsers(updatedUsers);
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      },
      function () {
        // User clicked "No," so do nothing
        // console.log("Deletion canceled");
        Notiflix.Notify.info("Deletion canceled");
      }
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage ;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
    <section className="dashboard-main">
      <div className="dashboard-user-sec">
        <div className="container">
          <div className="row">
            <div className="dashboard-user-header">
              <div className="row">
                <div className="section-title">
                  <h2>user list</h2>
                  <p className="section-subtitle">manage the system users</p>
                </div>
                <div className="dashboard-button">
                  <a className="btn add-user" onClick={openAddUserModal}>
                    <BiPlusCircle style={{ fontSize: "21px" }} />{" "}
                    <span>add user</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="dashboard-user-main">
              <div className="user-container">
                <div className="row">
                  <div className="user-main-header">
                    <div className="pagination-wp col-12">
                      <ul className="pagination col-12">
                        <li className="page-item prev-btn">
                          <a onClick={prePage} className="page-link-btn">
                            Prev
                          </a>
                        </li>
                        {numbers.map((n, i) => (
                          <li
                            className={`page-item numberedPage ${
                              currentPage === n ? "active" : ""
                            }`}
                            key={i}
                          >
                            <a onClick={changeCPage} className="page-item">
                              {n}
                            </a>
                          </li>
                        ))}

                        <li className="page-item next-btn">
                          <a onClick={nextPage} className="page-link-btn">
                            Next
                          </a>
                        </li>
                      </ul>
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
                        }}
                      >
                        <div className="edit-user">
                          <div className="dashboard-edit-user">
                            <form className="edit-user-form">
                              <h3>
                                Edit @<span className="username">iwm</span>
                              </h3>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaUserAlt />
                                </span>
                                <input
                                  type="text"
                                  placeholder="fullname"
                                  className="form-input"
                                  value={
                                    userForEdit ? userForEdit.fullNames : ""
                                  }
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      fullNames: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaEnvelope />
                                </span>
                                <input
                                  type="email"
                                  placeholder=" email address"
                                  className="form-input"
                                  value={userForEdit ? userForEdit.email : ""}
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      email: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaPhoneAlt />
                                </span>
                                <input
                                  type="text"
                                  placeholder=" phone number"
                                  className="form-input"
                                  value={
                                    userForEdit ? userForEdit.phoneNumber : ""
                                  }
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      phoneNumber: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <IoLocation />
                                </span>
                                <input
                                  type="text"
                                  placeholder=" location"
                                  className="form-input"
                                  value={
                                    userForEdit ? userForEdit.location : ""
                                  }
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      location: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaUserShield />
                                </span>
                                <input
                                  type="text"
                                  placeholder="Role[status]"
                                  className="form-input"
                                  value={userForEdit ? userForEdit.role : ""}
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      role: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="edit-form-button">
                                <button
                                  className="cancel-edit-btn btn"
                                  onClick={closeModal}
                                >
                                  cancel
                                </button>
                                <button className="confirm-edit-btn btn">
                                  confirm
                                </button>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {addUserModal && (
                    <div className="model-overlay">
                      <div
                        className="modal"
                        style={{
                          position: "fixed",
                          width: "100%",
                          top: "0",
                          left: "0",
                          background: "#2b2b2b80",
                        }}
                      >
                        <div className="edit-user">
                          <div className="dashboard-edit-user">
                            <form className="edit-user-form">
                              <h3 style={{ textTransform: "uppercase" }}>
                                register new user
                              </h3>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaUserAlt />
                                </span>
                                <input
                                  type="text"
                                  placeholder="fullname"
                                  className="form-input"
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      fullNames: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaEnvelope />
                                </span>
                                <input
                                  type="email"
                                  placeholder=" email address"
                                  className="form-input"
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      email: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaPhoneAlt />
                                </span>
                                <input
                                  type="text"
                                  placeholder=" phone number"
                                  className="form-input"
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      phoneNumber: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <IoLocation />
                                </span>
                                <input
                                  type="text"
                                  placeholder=" location"
                                  className="form-input"
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      location: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="input-box no-arrow">
                                <span className="icon">
                                  <FaUserShield />
                                </span>
                                <input
                                  type="text"
                                  placeholder="Role[status]"
                                  className="form-input"
                                  onChange={(e) => {
                                    // Update the userForEdit state when the input changes
                                    setUserForEdit({
                                      ...userForEdit,
                                      role: e.target.value,
                                    });
                                  }}
                                />
                              </span>
                              <span className="edit-form-button">
                                <button
                                  className="cancel-edit-btn btn"
                                  onClick={closeAddUserModal}
                                >
                                  cancel
                                </button>
                                <button className="confirm-edit-btn btn">
                                  confirm
                                </button>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="user-main-content">
                    <div className="row">
                      <div className="user-list-header">
                        <div className="row">
                          <div className="user-check-box col-1">
                            <h4>ID</h4>
                          </div>
                          <div className="user-fullname-header col-3">
                            <h4>Full name</h4>
                          </div>
                          <div className="user-email-header col-2">
                            <h4>Email</h4>
                          </div>
                          <div className="user-phone-header col-2">
                            <h4>Phone Number</h4>
                          </div>
                          <div className="user-location-header col-1">
                            <h4>Location</h4>
                          </div>
                          <div className="user-role-header col-1">
                            <h4>Status</h4>
                          </div>
                          <div className="user-action-header col-2">
                            <h4>Actions</h4>
                          </div>
                        </div>
                      </div>
                      <div className="user-list">
                        {records.map((user, index) => (
                          <div className="user-detail" key={user._id}>
                            <div className="row col-12">
                              <div className="user-check-box col-1">
                                {lastIndex+index-recordsPerPage+1}
                              </div>
                              <div className="user-fullname col-2">
                                <span className="userName">
                                  {user.fullNames}
                                </span>
                              </div>
                              <div className="user-email col-3">
                                <span className="userEmail">{user.email}</span>
                              </div>
                              <div className="user-phone col-2">
                                <span className="userPhone">
                                  {user.phoneNumber}
                                </span>
                              </div>
                              <div className="user-location col-1">
                                <span className="userLocation">
                                  {user.location}
                                </span>
                              </div>
                              <div className="user-status col-1">
                                <span className="userStatus">{user.role}</span>
                              </div>
                              <div className="user-action col-2">
                                <button
                                  className="table-action-btn"
                                  onClick={() => openModal(user)}
                                >
                                  <AiTwotoneEdit />
                                </button>

                                <button
                                  className="table-action-btn"
                                  onClick={() => handleDeleteUser(user)}
                                >
                                  <FaTrash />
                                </button>
                              </div>
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
        </div>
      </div>
    </section>
  );

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
}

export default dashboardUser;
