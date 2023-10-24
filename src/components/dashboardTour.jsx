import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { BiPlusCircle } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import abtImg from "../assets/about-banner.jpg";

function dashboardTour() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
                      <div className="row">
                        <span className="destinationValue col-3">
                          <img src={tour.backdropImage} style={{height: '30px', width: '100%', objectFit: 'contain'}}/>
                        </span>
                        <span className="destinationValue col-2">
                          {tour.title}
                        </span>
                        <span className="destinationValue col-2">
                          {tour.Duration}
                        </span>
                        <span className="destinationValue col-2">
                          {tour.Group_size}
                        </span>
                        <span className="destinationValue col-1">
                          {tour.Price}
                        </span>
                        <span className="destinationValue col-2">
                          <button className="table-action-btn">
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
