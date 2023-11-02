import React from "react";

function dashboardPlace() {
  return (
    <section className="dashboard-main">
      <div className="dashboard-user-sec">
        <div className="container">
          <div className="tour-booking">
            <div className="row datat">
              <div className="booking-header">
                <div className="row">
                  <div className="booking-header-title">
                    <span className="booking-title">tour booking</span>
                    <span className="booking-subtitle">
                      showing available tour bookings
                    </span>
                  </div>
                  <div className="total-bookings">
                    <span className="total-booking">
                      total bookings <b>27</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="booking-body">
                <div className="row">
                  <div className="bookings-header">
                    <div className="row">
                      <span style={{ flexBasis: "5%" }}>#id</span>
                      <span style={{ flexBasis: "20%" }}>tour name</span>
                      <span style={{ flexBasis: "20%" }}>traveller's name</span>
                      <span style={{ flexBasis: "10%" }}>Group size</span>
                      <span style={{ flexBasis: "15%" }}>pay method</span>
                      <span style={{ flexBasis: "10%" }}>status</span>
                      <span style={{ flexBasis: "20%" }}>action</span>
                    </div>
                  </div>
                  <div className="bookings-content">
                    <div className="row">
                      <span style={{ flexBasis: "5%" }}>001</span>
                      <span style={{ flexBasis: "20%" }}>visit buja</span>
                      <span style={{ flexBasis: "20%" }}>iman gadhzi</span>
                      <span style={{ flexBasis: "10%" }}>6</span>
                      <span style={{ flexBasis: "15%" }}>Momo</span>
                      <span style={{ flexBasis: "10%" }}>paid</span>
                      <span style={{ flexBasis: "20%" }}>
                        {" "}
                        <button>delete</button>{" "}
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

export default dashboardPlace;
