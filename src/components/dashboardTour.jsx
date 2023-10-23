import React from "react";

import { BiPlusCircle } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import abtImg from "../assets/about-banner.jpg";

function dashboardTour() {
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
                      <span className="destinationValue col-3">50+ people</span>
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
    </section>
  );
}

export default dashboardTour;
