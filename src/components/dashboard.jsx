import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import {
  BsGrid,
  BsChevronDown,
  BsWechat,
  BsArrowRightShort,
  BsDash,
  BsFillChatDotsFill,
} from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RxBorderDashed } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { CiLocationOn, CiPlane } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { BiTimer, BiCreditCard } from "react-icons/bi";
import {
  FaRegCalendarAlt,
  FaUmbrellaBeach,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import {
  MdOutlineLightMode,
  MdSettings,
  MdOutlineMarkUnreadChatAlt,
} from "react-icons/md";

import userImg from "../assets/avatar.png";
import dbBg from "../assets/dashboard-div-bg.png";
import switzerland from "../assets/dashboard-div-switzerland.png";
import zermat from "../assets/dashboard-div-zermat.png";
import friend1 from "../assets/friend1.jpeg";
import friend2 from "../assets/friend2.jpg";

import "../style/dashboard.css";

function dashboard() {
  // Define chart data
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Expected Income",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 59, 80, 81],
      },
      {
        label: "Unexpected Income",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [32, 45, 25, 18, 36, 45, 32, 23],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const canvas = document.getElementById("yourCanvasElement");

    if (canvas) {
      const chartInstance = new Chart(canvas, {
        type: "bar",
        data: data,
        options: options,
      });

      return () => {
        // Destroy the chart instance when the component unmounts
        chartInstance.destroy();
      };
    }
  }, []);

  return (
    <main className="dashboard">
      <div className="dashboard-navbar" style={{ position: "fixed" }}>
        <div className="container">
          <div className="row vrow">
            <div className="user-data">
              <div className="row hrow">
                <div className="user-image">
                  <img src={userImg} alt="" />
                </div>
                <div className="user-id">
                  <h3 className="h3-title">Hossein</h3>
                  <span className="user-title">Traveller</span>
                </div>
              </div>
            </div>
            <div className="nav-main-link">
              <div className="nav-link">
                <a href="/dashboard">
                  <BsGrid /> <span>Dashboard</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/place">
                  <CiLocationOn /> <span>Places</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/tour">
                  <GiCommercialAirplane /> <span>Tours</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/tour-detail">
                  <RiCalendarTodoFill /> <span>Upcoming</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/camps">
                  <FaUmbrellaBeach /> <span>Camps</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/calendar">
                  <FaRegCalendarAlt /> <span>Calendar</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/chat">
                  <BsWechat /> <span>Chat</span>
                </a>
              </div>
            </div>
            <div className="down-nav-links">
              <span className="nav-title">Popular Places</span>
              <div className="nav-place-link">
                <a href="/">
                  <span className="yellow">
                    <GoDotFill />
                  </span>
                  <span className="low-op">Oslo</span> / Norway
                </a>
              </div>
              <div className="nav-place-link">
                <a href="/">
                  <span className="dark">
                    <GoDotFill />
                  </span>
                  <span className="low-op">Maui</span> / Hawaii
                </a>
              </div>
              <div className="nav-place-link">
                <a href="/">
                  <BsChevronDown />{" "}
                  <span className="show-more"> Show more</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="logout">
            <a href="/">
              <span className="icon">
                <HiOutlineLogout />
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="main-content" style={{ marginLeft: "220px" }}>
        <div className="container">
          <div className="header-nav">
            <div className="row">
              <div className="user-greeting">
                <h3 className="h3-title">
                  Hello, <span className="username">Hossein</span>
                </h3>
              </div>
              <div className="row right-header-nav">
                <div className="setting">
                  <span className="settings">
                    <MdSettings />
                  </span>
                </div>
                <div className="theme">
                  <span className="light-them">
                    <MdOutlineLightMode />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-content">
            <div className="row">
              <div className="middle-content">
                <div className="row">
                  <div className="booking-content">
                    <img src={dbBg} />
                    <div className="booking-content-data">
                      <div className="upper-content-data">
                        <div className="row">
                          <div className="text1">
                            <h5 className="h5-title">Total Bookings</h5>
                            896
                          </div>
                          <div className="side-icon">
                            <FaUmbrellaBeach />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="lower-content-data">
                        <a href="/">
                          see more <BsArrowRightShort />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="expense-content">
                    <img src={dbBg} />
                    <div className="expense-content-data">
                      <div className="upper-content-data">
                        <div className="row">
                          <div className="text1">
                            <h5 className="h5-title">Total Expenses</h5>
                            896
                          </div>
                          <div className="side-icon">
                            <FaUmbrellaBeach />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="lower-content-data">
                        <a href="/">
                          see more <BsArrowRightShort />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="payment-history">
                    <div className="container">
                      <div className="chart-container">
                        <Bar data={data} options={options} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="upcoming">
                    <div className="upcoming-header">
                      <h5 className="h5-title">Upcoming Trips</h5>
                      <a href="/" className="see-more">
                        see more <BsArrowRightShort />
                      </a>
                    </div>
                    <div className="upcoming-box-wp">
                      <div className="row">
                        <div className="upcoming-box">
                          <img src={switzerland} />
                          <div className="up-text vrow">
                            <h6 className="h6-title">
                              Zermatt{" "}
                              <span className="low-op"> /Switzerland </span>
                            </h6>
                            <div className="row">
                              <span className="icon">
                                <img src={userImg} />
                                <FaStar style={{ margin: "0 5px" }} /> 4.9
                              </span>
                              <div className="next-arrow">
                                <BsArrowRightShort />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="upcoming-box">
                          <img src={zermat} />
                          <div className="up-text vrow">
                            <h6 className="h6-title">
                              Zermatt{" "}
                              <span className="low-op"> /Switzerland </span>
                            </h6>
                            <div className="row">
                              <span className="icon">
                                <img src={userImg} />
                                <FaStar style={{ margin: "0 5px" }} /> 4.9
                              </span>
                              <div className="next-arrow">
                                <BsArrowRightShort />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-content">
                <div className="side-content-row">
                  <div className="friend">
                    <div className="container">
                      <div className="sec-title">
                        <h4 className="h4-title">My Friends</h4>
                      </div>
                      <div className="friend-list">
                        <div className="friend-box">
                          <a href="/dashboard">
                            <div className="row">
                              <div className="friend-img">
                                <img src={friend1} />
                              </div>
                              <div className="friend-id">
                                <h6 className="h6-title">Alireza Bayat</h6>
                                <p>France</p>
                              </div>
                              <div className="chat-icon">
                                <MdOutlineMarkUnreadChatAlt />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="friend-box">
                          <a href="/dashboard">
                            <div className="row">
                              <div className="friend-img">
                                <img src={friend1} />
                              </div>
                              <div className="friend-id">
                                <h6 className="h6-title">Alireza Bayat</h6>
                                <p>France</p>
                              </div>
                              <div className="chat-icon">
                                <MdOutlineMarkUnreadChatAlt />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="friend-box">
                          <a href="/dashboard">
                            <div className="row">
                              <div className="friend-img">
                                <img src={friend2} />
                              </div>
                              <div className="friend-id">
                                <h6 className="h6-title">Ameria</h6>
                                <p>France</p>
                              </div>
                              <div className="chat-icon">
                                <MdOutlineMarkUnreadChatAlt />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="dashboard-cta-sec"
                    style={{ background: "#676767", marginTop: "15px" }}
                  >
                    <div className="container">
                      <div className="row time-rem" style={{ opacity: ".8" }}>
                        <p>
                          <BiTimer /> <span>Remaining time to buy:</span>
                        </p>
                        <span className="dash-btn">16:16</span>
                      </div>
                      <div className="row ship-country">
                        <div>
                          <h4 className="h4-title">PAR</h4>
                          <p>France</p>
                        </div>
                        <div className="icons">
                          <p>
                            <RxBorderDashed /> <CiPlane /> <RxBorderDashed />
                          </p>
                        </div>
                        <div>
                          <h4 className="h4-title">LDN</h4>
                          <p>England</p>
                        </div>
                      </div>
                      <div className="row user-card">
                        <h5 className="h5-title">
                          <FaUsers style={{ fontSize: "23px" }} />{" "}
                          <span>2 Seats</span>
                        </h5>
                        <span className="dash-btn">
                          <BiCreditCard
                            style={{
                              fontSize: "23px",
                              fontWeight: "100px",
                              marginRight: "5px",
                            }}
                          />{" "}
                          <span>$400</span>
                        </span>
                      </div>
                      <div className="btn dashboardbtn">go to cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default dashboard;
