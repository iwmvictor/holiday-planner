import React from 'react'


import { BsGrid } from 'react-icons/bs'
import { FaAngleRight, FaCalendarCheck, FaUsers, } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'

import logoImg from "../assets/logo.png";

function dashboardNav() {
  return (
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
          </div>
        </div>
      </header>
  )
}

export default dashboardNav