import React from "react";

import { BsGrid } from "react-icons/bs";
import { FaAngleRight, FaCalendarCheck, FaUsers } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiSolidMessageDetail } from "react-icons/bi";

import logoImg from "../assets/logo.png";
import { BiLogOut } from "react-icons/bi";

function dashboardNav() {
  return (
    <header className="dashboard-nav">
      <div className="container">
        <div className="row">
            <div className="logo-image">
              <a href="/"><img src={logoImg} alt="" /></a>
            </div>

          <div className="dashboard-nav-title">
            <h3 className="nav-title">main menu</h3>
          </div>
          <div className="dashboard-navlink-wp">
            <div className="dashboard-navlink">
              <a href="/dashboard">
                <BsGrid /> <span>dashboard</span> <FaAngleRight />
              </a>
            </div>
            <div className="dashboard-navlink">
              <a href="/dashboard/tour">
                <GiCommercialAirplane /> <span>tours</span> <FaAngleRight />
              </a>
            </div>
            <div className="dashboard-navlink">
              <a href="/dashboard/chat">
                <BiSolidMessageDetail /> <span>chat</span> <FaAngleRight />
              </a>
            </div>
            <div className="dashboard-navlink">
              <a href="/dashboard/booking">
                <FaCalendarCheck /> <span>bookings</span> <FaAngleRight />
              </a>
            </div>
            <div className="dashboard-navlink">
              <a href="/dashboard/user">
                <FaUsers /> <span>users</span> <FaAngleRight />
              </a>
            </div>
          </div>
          <div className="navlog">
            <a href="/login">
              <BiLogOut /> <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default dashboardNav;
