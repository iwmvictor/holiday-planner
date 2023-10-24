import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaPlaceOfWorship, FaUpload } from "react-icons/fa";

function reba() {
  const [userForEdit, setUserForEdit] = useState(null);

  return (
    <>
      <div className="edit-tour">
        <h2>
          edit tour #<span>trip-name</span>
        </h2>
        <form className="edit-tour-form">
          <div className="col-12">
            <span className="input-box no-arrow col-6">
              <span className="icon"><BiCurrentLocation/></span>
              <input
                type="text"
                placeholder="Destination"
                className="form-input"
              />
            </span>

            <span className="input-box no-arrow col-6">
              <span className="icon"><FaUpload/></span>
              <input
                type="text"
                placeholder="upload Image"
                className="form-input"
              />
              upl
            </span>
          </div>

          <div className="col-12">
            {/* Title */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input type="text" placeholder="Title" className="form-input" />
            </span>

            {/* Description */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Description"
                className="form-input"
              />
            </span>
          </div>

          <div className="col-12">
            {/* Duration */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Duration"
                className="form-input"
              />
            </span>

            {/* Group Size */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Group Size"
                className="form-input"
              />
            </span>
          </div>

          <div className="col-12">
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input type="text" placeholder="Price" className="form-input" />
            </span>

            {/* Discount Percentage */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Discount: Percentage"
                className="form-input"
              />
            </span>
          </div>

          <div className="col-12">
            {/* Tour Type */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Tour Type"
                className="form-input"
              />
            </span>

            {/* Departure */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Departure"
                className="form-input"
              />
            </span>
          </div>

          <div className="col-12">
            {/* Seats */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input type="text" placeholder="Seats" className="form-input" />
            </span>

            {/* From Month */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="From Month"
                className="form-input"
              />
            </span>
          </div>

          <div className="col-12">
            {/* To Month */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="To Month"
                className="form-input"
              />
            </span>

            {/* Departure Time */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Departure Time"
                className="form-input"
              />
            </span>
          </div>

          <div className="col-12">
            {/* Return Time */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Return Time"
                className="form-input"
              />
            </span>

            {/* Gallery */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input type="text" placeholder="Gallery" className="form-input" />
            </span>
          </div>

          <div className="col-12">
            {/* Price Included */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Price Included"
                className="form-input"
              />
            </span>

            {/* Price Not Included */}
            <span className="input-box no-arrow col-6">
              <span className="icon"></span>
              <input
                type="text"
                placeholder="Price Not Included"
                className="form-input"
              />
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default reba;
