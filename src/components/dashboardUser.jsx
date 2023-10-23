import React from 'react'

import { BiPlusCircle, BiFilter,} from 'react-icons/bi'
import { BsPencilFill} from 'react-icons/bs'
import { FaSearch, FaFilePdf, FaFileExcel, FaPrint, FaTrash } from 'react-icons/fa'

function dashboardUser() {
  return (
    <section className="dashboard-main">
        <div className="dashboard-user-sec">
          <div className="container">
            <div className="row">
              <div className="dashboard-user-header">
                <div className="row">
                  <div className="section-title">
                    <h2>user list</h2>
                    <p className="section-subtitle">manage the system users</p>
                  </div>
                  <div className="dashboard-button">
                    <a className="btn add-user">
                      <BiPlusCircle style={{ fontSize: "21px" }} />{" "}
                      <span>add user</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="dashboard-user-main">
                <div className="user-container">
                  <div className="row">
                    <div className="user-main-header">
                      <div className="row">
                        <div className="left-side">
                          <div className="filter-icon" title="filter">
                            <BiFilter style={{ fontSize: "28px" }} />
                          </div>
                          <div className="input-box no-arrow">
                            <span className="icon">
                              <FaSearch />
                            </span>
                            <input
                              type="search"
                              name=""
                              placeholder="Search user ..."
                              className="form-input"
                            />
                          </div>
                        </div>
                        <div className="right-side">
                          <div className="topdf-icon" title="pdf">
                            <FaFilePdf />
                          </div>
                          <div className="toexcel-icon" title="excel">
                            <FaFileExcel />
                          </div>
                          <div className="print-icon" title="print">
                            <FaPrint />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user-main-content">
                      <div className="row">
                        <div className="user-list-header">
                          <div className="row">
                            <div className="user-check-box input-box col-1">
                              <input type="checkbox" className="form-input" />
                            </div>
                            <div className="user-fullname-header col-3">
                              <h4>Full name</h4>
                            </div>
                            <div className="user-email-header col-2">
                              <h4>Email</h4>
                            </div>
                            <div className="user-phone-header col-2">
                              <h4>Phone Number</h4>
                            </div>
                            <div className="user-location-header col-1">
                              <h4>Location</h4>
                            </div>
                            <div className="user-role-header col-1">
                              <h4>Status</h4>
                            </div>
                            <div className="user-action-header col-2">
                              <h4>Actions</h4>
                            </div>
                          </div>
                        </div>
                        <div className="user-list">
                          <div className="user-detail">
                            <div className="row col-12">
                              <div className="user-check-box input-box col-1">
                                <input type="checkbox" className="form-input" />
                              </div>
                              <div className="user-fullname col-3">
                                <span className="userName">iman gadzhi</span>
                              </div>
                              <div className="user-email col-2">
                                <span className="userEmail">
                                  iman@gmail.com
                                </span>
                              </div>
                              <div className="user-phone col-2">
                                <span className="userPhone">250781222994</span>
                              </div>
                              <div className="user-location col-1">
                                <span className="userLocation">Rwanda</span>
                              </div>
                              <div className="user-status col-1">
                                <span className="userStatus">user</span>
                              </div>
                              <div className="user-action col-2">
                                <button className="table-action-btn">
                                  <BsPencilFill />
                                </button>
                                <button className="table-action-btn">
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="user-detail">
                            <div className="row col-12">
                              <div className="user-check-box input-box col-1">
                                <input type="checkbox" className="form-input" />
                              </div>
                              <div className="user-fullname col-3">
                                <span className="userName">vusi thembakutu</span>
                              </div>
                              <div className="user-email col-2">
                                <span className="userEmail">
                                  vusi@gmail.com
                                </span>
                              </div>
                              <div className="user-phone col-2">
                                <span className="userPhone">250781222994</span>
                              </div>
                              <div className="user-location col-1">
                                <span className="userLocation">kenya</span>
                              </div>
                              <div className="user-status col-1">
                                <span className="userStatus">user</span>
                              </div>
                              <div className="user-action col-2">
                                <button className="table-action-btn">
                                  <BsPencilFill />
                                </button>
                                <button className="table-action-btn">
                                  <FaTrash />
                                </button>
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
          </div>
        </div>
      </section>
  )
}

export default dashboardUser