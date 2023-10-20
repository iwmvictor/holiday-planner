import React from "react";

import abtImg from "../assets/about-banner.jpg";

function dashboardTour() {
  return (
    <main className="dashboard-tour" style={{ marginLeft: "210px" }}>
      <div className="tour-mgt">
        <div className="tour-container">
          <div className="tour-list">
            <div className="tour-list-table">
              <div className="tour-mgt-header">
                <div className="row">
                  <div className="tour-id tour-col">
                    <h4 className="h4-dtitle">tour id</h4>
                  </div>
                  <div className="tour-title tour-col">
                    <h4 className="h4-dtitle">title</h4>
                  </div>
                  <div className="tour-duration tour-col">
                    <h4 className="h4-dtitle">duration</h4>
                  </div>
                  <div className="tour-group-size tour-col">
                    <h4 className="h4-dtitle">tour date</h4>
                  </div>
                  <div className="tour-price tour-col">
                    <h4 className="h4-dtitle">price </h4>
                  </div>
                </div>
              </div>

              {/* content/tours */}
              <div className="tour-mgt-body">
                <div className="tour">
                  <div className="row">
                    <div className="tour-id">
                      <span id="tourId" className="tourId">
                        001
                      </span>
                    </div>
                    <div className="tour-title">
                      <span id="tourTitle" className="tourTitle">
                        Cultural tour
                      </span>
                    </div>
                    <div className="tour-duration">
                      <span id="tourDuration" className="tourDuration">
                        2days 6hours
                      </span>
                    </div>
                    <div className="tour-group-size">
                      <span id="tourGroupSize" className="tourGroupSize">
                        19/10/2023
                      </span>
                    </div>
                    <div className="tour-price">
                      <span id="tourPrice" className="tourPrice">
                        $ 3500
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tour">
                  <div className="row">
                    <div className="tour-id">
                      <span id="tourId" className="tourId">
                        001
                      </span>
                    </div>
                    <div className="tour-title">
                      <span id="tourTitle" className="tourTitle">
                        Cultural tour
                      </span>
                    </div>
                    <div className="tour-duration">
                      <span id="tourDuration" className="tourDuration">
                        2days 6hours
                      </span>
                    </div>
                    <div className="tour-group-size">
                      <span id="tourGroupSize" className="tourGroupSize">
                        19/10/2023
                      </span>
                    </div>
                    <div className="tour-price">
                      <span id="tourPrice" className="tourPrice">
                        $ 3500
                      </span>
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

export default dashboardTour;
