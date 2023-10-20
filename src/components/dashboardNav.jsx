import React from "react";
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

import userImg from "../assets/admin/logo-icon.svg";
import "../style/dashboard.css";

function dashboardNav() {
  return (
    <div className="main">
      <div className="dashboard-navbar" style={{ position: "fixed" }}>
        <div className="container">
          <div className="row vrow">
            <div className="user-data">
              <div className="row hrow">
                <div className="user-image">
                  <img src={userImg} alt="" />
                </div>
                <div className="user-id">
                  <h3 className="h3-title">Iwm</h3>
                  <span
                    className="user-title"
                    style={{
                      color: "#a5a5a5",
                      fontWeight: "lighter",
                      opacity: ".6",
                      textTransform: 'capitalize',
                    }}
                  >
                    admin
                  </span>
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
                <a href="/dashboard/places">
                  <CiLocationOn /> <span>Places</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/dashboard/tour">
                  <GiCommercialAirplane /> <span>Tours</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/dashboard/upcoming">
                  <RiCalendarTodoFill /> <span>Upcoming</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/dashboard">
                  <FaUmbrellaBeach /> <span>Camps</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/dashboard/calendar">
                  <FaRegCalendarAlt /> <span>Calendar</span>
                </a>
              </div>
              <div className="nav-link">
                <a href="/dashboard/chat">
                  <BsWechat /> <span>Chat</span>
                </a>
              </div>
            </div>
            <div className="down-nav-links">
              <span className="nav-title">Popular Places</span>
              <div className="nav-place-link">
                <a href="/dashboard">
                  <span className="yellow">
                    <GoDotFill />
                  </span>
                  <span className="low-op">Oslo</span> / Norway
                </a>
              </div>
              <div className="nav-place-link">
                <a href="/dashboard">
                  <span className="dark">
                    <GoDotFill />
                  </span>
                  <span className="low-op">Maui</span> / Hawaii
                </a>
              </div>
              <div className="nav-place-link">
                <a href="/dashboard">
                  <BsChevronDown />{" "}
                  <span className="show-more"> Show more</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="logout">
            <a href="/login">
              <span className="icon">
                <HiOutlineLogout />
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboardNav;

