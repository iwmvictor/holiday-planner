import React from "react";
import {
  FaBookOpen,
  FaCameraRetro,
  FaClock,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaSun,
  FaUserFriends,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";

import highlightVid from "../assets/highlight-video.mp4";

function TourDetail() {
  return (
    <main className="tour-detail">
      <div className="tour-hero" style={backgroundStyle}>
        <div className="col-12">
          <div className="banner-content">
            <h1 className="h1-title">Tour List</h1>
          </div>
        </div>
      </div>
      <div className="main-tour-detail pb-70">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="left-side">
                <div className="tour-detail-tabbing">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link active"
                        id="information-tab"
                      >
                        <i>
                          <FaInfoCircle />
                        </i>
                        Information
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="tour-plan-tab"
                      >
                        <i>
                          <FaBookOpen />
                        </i>
                        Tour Plan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="location-tab"
                      >
                        <i>
                          <FaMapMarkerAlt />
                        </i>
                        Location
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="gallery-tab"
                      >
                        <i>
                          <FaCameraRetro />
                        </i>
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/"
                        role="tab"
                        className="nav-link"
                        id="review-tab"
                      >
                        <i>
                          <FaUsers />
                        </i>
                        Review
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane show active"
                      id="information"
                      role="tabpanel"
                    >
                      <div className="tab-box information-tab-box">
                        <span className="discount-label">22% Off</span>
                        <div className="row">
                          <div className="col-9">
                            <div className="tour-title">
                              <h2 className="h2-title">
                                A wonderful serenity has taken possession of my
                                entire soul
                              </h2>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="tur-price-wp">
                              <div className="tour-price">
                                <h3 className="h3-title">$ 1200</h3>
                                <p>Per Person</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tour-short-info-box">
                          <ul>
                            <li>
                              <i>
                                <FaClock />
                              </i>
                              <span className="text">2 days</span>
                            </li>
                            <li>
                              <i>
                                <FaUserFriends />
                              </i>
                              <span className="text">6 People</span>
                            </li>
                            <li>
                              <i>
                                <FaUserPlus />
                              </i>
                              <span className="text">18</span>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaMapMarkerAlt />
                                </i>
                                <span className="text">Greece</span>
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i>
                                  <FaSun />
                                </i>
                                <span className="text">Discovery</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="tour-description">
                          <p>
                            {" "}
                            I should be incapable of drawing a single stroke at
                            the present moment; and yet I feel that I never was
                            a greater artist than now. When, while the lovely
                            valley teems with vapour around me, and the meridian
                            sun strikes the upper surface of the impenetrable
                            foliage of my trees, and but a few stray gleams.
                          </p>
                          <p>
                            {" "}
                            I should be incapable of drawing a single stroke at
                            the present moment; and yet I feel that I never was
                            a greater artist than now. When, while the lovely
                            valley teems with vapour around me, and the meridian
                            sun strikes the upper surface of the impenetrable
                            foliage of my trees, and but a few stray gleams
                            steal into the inner sanctuary, I throw myself down
                            among the tall grass by the trickling stream; and,
                            as I lie close to the earth, a thousand unknown
                            plants are noticed by me: when I hear the buzz of
                            the little world among the stalks, and grow familiar
                            with the countless indescribable forms of the
                            insects and flies, then I feel the presence of the
                            Almighty, who formed us in his own image, and the
                            breath
                          </p>
                        </div>
                        <div className="tour-video mt-40">
                          <video loop muted autoPlay controls>
                            <source src={highlightVid} type="video/mp4" />
                            <a href="/" className="play-btn" title="Play Video"></a>
                          </video>
                        </div>
                        <div className="tour-timetable-schedule mt-40 mb-40">
                          <ul>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Destination</h4>
                              </div>
                              <div className="tts-description">
                                <a href="#">Greece</a>
                              </div>
                            </li>
                            <li>
                              <div className="tts-label">
                                <h4 className="h4-title">Departure</h4>
                              </div>
                              <div className="tts-description">
                                Lorem Ipsum
                              </div>
                            </li>
                          </ul>
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
    </main>
  );
}

export default TourDetail;
