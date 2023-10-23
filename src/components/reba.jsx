import React from "react";

import {
  BsGrid,
  BsFillJournalBookmarkFill,
  BsCalendar2Check,
  BsCalendar2CheckFill,
  BsFillCalendar2CheckFill,
  BsCalendar2EventFill,
  BsPencilFill,
} from "react-icons/bs";
import { GiCommercialAirplane,GiPerpendicularRings, GiWaterSplash, } from "react-icons/gi";
import { IoNotifications, IoNotificationsCircleOutline } from "react-icons/io5";
import { RiCompassDiscoverFill,  } from "react-icons/ri";
import { MdHistoryEdu,  } from "react-icons/md";
import {
  FaAngleRight,
  FaCalendarCheck,
  FaFileExcel,
  FaFilePdf,
  FaFilter,
  FaFilterCircleDollar,
  FaFilterCircleXmark,
  FaPrint,
  FaTrash,
  FaUsers,
} from "react-icons/fa6";
import { SiHomeadvisor } from 'react-icons/si'

import logoImg from "../assets/logo.png";

import "../style/dashboard.css";
import {
  BiFilter,
  BiFilterAlt,
  BiNotification,
  BiPen,
  BiPlusCircle,
  BiSolidNotification,
} from "react-icons/bi";
import { FaList, FaListAlt, FaPlus, FaSearch } from "react-icons/fa";

function reba() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-nav">
        <div className="container">
          <div className="row">
            <div className="logo-image">
              <img src={logoImg} alt="" />
            </div>
            <div className="dashboard-nav-title">
              <h3 className="nav-title">main menu</h3>
            </div>
            <div className="dashboard-navlink-wp">
              <div className="dashboard-navlink">
                <a href="/">
                  <BsGrid /> <span>dashboard</span> <FaAngleRight />
                </a>
              </div>
              <div className="dashboard-navlink">
                <a href="/">
                  <GiCommercialAirplane /> <span>tours</span> <FaAngleRight />
                </a>
              </div>
              <div className="dashboard-navlink">
                <a href="/">
                  <FaCalendarCheck /> <span>bookings</span> <FaAngleRight />
                </a>
              </div>
              <div className="dashboard-navlink">
                <a href="/">
                  <FaUsers /> <span>users</span> <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <section className="dashboard-main">
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
              <div className="dashboard-tour-main">
                <div className="dashboard-container container">
                  <div className="row">
                    <div className="dashboard-tour-table-header">
                      <div className="row">
                        <span className="table-header col-2">destination</span>
                        <span className="table-header col-3">duration</span>
                        <span className="table-header col-3">group size</span>
                        <span className="table-header col-2">price</span>
                        <span className="table-header col-2">actions</span>
                      </div>
                    </div>
                    <div className="dashboard-tour-table-content">
                      <div className="row">
                        <span className="destinationValue col-2">Italy</span>
                        <span className="destinationValue col-3">
                          7 days 8 hours
                        </span>
                        <span className="destinationValue col-3">
                          50+ people
                        </span>
                        <span className="destinationValue col-2">$ 750</span>
                        <span className="destinationValue col-2">
                          <button className="table-action-btn">
                            <BsPencilFill />
                          </button>
                          <button className="table-action-btn">
                            <FaTrash />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="dashboard-main">
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
                    <a className="btn add-user">
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
                      <div className="row">
                        <div className="left-side">
                          <div className="filter-icon" title="filter">
                            <BiFilter style={{ fontSize: "28px" }} />
                          </div>
                          <div className="input-box no-arrow">
                            <span className="icon">
                              <FaSearch />
                            </span>
                            <input
                              type="search"
                              name=""
                              placeholder="Search user ..."
                              className="form-input"
                            />
                          </div>
                        </div>
                        <div className="right-side">
                          <div className="topdf-icon" title="pdf">
                            <FaFilePdf />
                          </div>
                          <div className="toexcel-icon" title="excel">
                            <FaFileExcel />
                          </div>
                          <div className="print-icon" title="print">
                            <FaPrint />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user-main-content">
                      <div className="row">
                        <div className="user-list-header">
                          <div className="row">
                            <div className="user-check-box input-box col-1">
                              <input type="checkbox" className="form-input" />
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
                          <div className="user-detail">
                            <div className="row col-12">
                              <div className="user-check-box input-box col-1">
                                <input type="checkbox" className="form-input" />
                              </div>
                              <div className="user-fullname col-3">
                                <span className="userName">iman gadzhi</span>
                              </div>
                              <div className="user-email col-2">
                                <span className="userEmail">
                                  iman@gmail.com
                                </span>
                              </div>
                              <div className="user-phone col-2">
                                <span className="userPhone">250781222994</span>
                              </div>
                              <div className="user-location col-1">
                                <span className="userLocation">Rwanda</span>
                              </div>
                              <div className="user-status col-1">
                                <span className="userStatus">user</span>
                              </div>
                              <div className="user-action col-2">
                                <button className="table-action-btn">
                                  <BsPencilFill />
                                </button>
                                <button className="table-action-btn">
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="user-detail">
                            <div className="row col-12">
                              <div className="user-check-box input-box col-1">
                                <input type="checkbox" className="form-input" />
                              </div>
                              <div className="user-fullname col-3">
                                <span className="userName">vusi thembakutu</span>
                              </div>
                              <div className="user-email col-2">
                                <span className="userEmail">
                                  vusi@gmail.com
                                </span>
                              </div>
                              <div className="user-phone col-2">
                                <span className="userPhone">250781222994</span>
                              </div>
                              <div className="user-location col-1">
                                <span className="userLocation">kenya</span>
                              </div>
                              <div className="user-status col-1">
                                <span className="userStatus">user</span>
                              </div>
                              <div className="user-action col-2">
                                <button className="table-action-btn">
                                  <BsPencilFill />
                                </button>
                                <button className="table-action-btn">
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="dashboard-main">
        <div className="dashboard-home-sec">
          <div className="container">
            <div className="row">
              <div className="dashboard-home-header">
                <div className="dashboard-home-container">
                  <div className="row">
                    <div className="hello-user">
                      <h2>
                        hello <span className="userName">Vic</span>
                      </h2>
                      <p className="section-subtitle">welcome back!</p>
                    </div>
                    <div className="right-side">
                      <div className="search input-box">
                        <span className="icon">
                          <FaSearch />
                        </span>
                        <input
                          type="search"
                          placeholder="search"
                          className="form-input"
                        />
                      </div>
                      <div className="notification icon">
                        <IoNotifications />
                      </div>
                      <div className="add-tour-button">
                        <a className="btn add-tour-btn">
                          <BiPlusCircle /> <span>add tour</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-home-main">
                <div className="container">
                  <div className="row">
                    <div className="home-tour-box">
                      <h6>Project</h6>
                      <ul>
                        <li><a><SiHomeadvisor/> Adventural</a></li>
                        <li><a><GiPerpendicularRings/> Adventural</a></li>
                        <li><a><GiWaterSplash/> Seaside</a></li>
                        <li><a><RiCompassDiscoverFill/> Discovery</a></li>
                        <li><a><MdHistoryEdu/> Discovery</a></li>
                      </ul>
                    </div>
                    <div className="home-tour-count"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default reba;
