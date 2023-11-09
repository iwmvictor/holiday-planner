import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";

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
import { BiTimer, BiCreditCard, BiSlider } from "react-icons/bi";
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

import userImg from "../assets/admin/logo-icon.svg";
import dbBg from "../assets/dashboard-div-bg.png";
import switzerland from "../assets/dashboard-div-switzerland.png";
import zermat from "../assets/dashboard-div-zermat.png";
import friend1 from "../assets/friend1.jpeg";
import friend2 from "../assets/friend2.jpg";

import "../style/dashboard.css";

function dashboard() {
  // //allowing only logged in user to access dashboard
  // if(!localStorage.getItem("login")){
  //   alert("Please log into your account first!!")
  //   window.location.href="/login"
  // } else{
  //   window.location.href="/dashboard"
  // }

  const [numUsers, setNumUsers] = useState(0);

  // Fetch the number of users from the API
  useEffect(() => {
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/auth/users")
      .then((response) => {
        // Update the state with the number of users from the API response
        setNumUsers(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching number of users: ", error);
      });
  }, []);

  const [numberOfTours, setNumberOfTours] = useState(null);

  // Function to fetch the number of tours from the API
  const fetchNumberOfTours = async () => {
    try {
      const response = await axios.get(
        "https://holiday-api-zj3a.onrender.com/api/v1/tour/all"
      );
      // Extract the number of tours from the response data
      const totalTours = response.data.length;
      setNumberOfTours(totalTours);
    } catch (error) {
      console.error("Error fetching number of tours: ", error);
    }
  };

  useEffect(() => {
    // Fetch the number of tours when the component mounts
    fetchNumberOfTours();
  }, []);

  // Define chart data
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Total expected tours",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [88, 66, 33, 55, 99],
      },
      {
        label: "Tours done(occured)",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [32, 45, 25, 18, 36],
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

  const initialTime = { hours: 16, minutes: 16, seconds: 30 };
  const [time, setTime] = useState(initialTime);

  const formatTime = (time) => {
    const hoursStr = String(time.hours).padStart(2, "0");
    const minutesStr = String(time.minutes).padStart(2, "0");
    const secondsStr = String(time.seconds).padStart(2, "0");
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);
        // Timer has reached zero
      } else {
        const newTime = { ...time };

        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
            newTime.seconds = 59;
          } else {
            newTime.hours -= 1;
            newTime.minutes = 59;
            newTime.seconds = 59;
          }
        }

        setTime(newTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <main className="dashboard">
      <div className="main-content" style={{ marginLeft: "250px" }}>
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
                  <span className="settings" style={{ color: "#924aef" }}>
                    <BiSlider />
                  </span>
                </div>
                <div className="theme" style={{ color: "#a5a5a5" }}>
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
                            <h5 className="h5-title">Number of Users</h5>
                            <span className="booking-value">{numUsers || 'Loading ..'}</span>
                          </div>
                          <div className="side-icon">
                            <FaUmbrellaBeach style={{ color: "#a5a5a5" }} />
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
                            <h5 className="h5-title">Total Tours</h5>
                            <span className="expense-value">{numberOfTours || 'Loading ..'}</span>
                          </div>
                          <div className="side-icon">
                            <FaUmbrellaBeach style={{ color: "#a5a5a5" }} />
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
                        <h4 className="h4-title">Tours Available</h4>
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
                                <h6 className="h6-title">Ameria Brown</h6>
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
                        <span className="dash-btn">{formatTime(time)}</span>
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
