
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';

function TourDetail() {
  const { Tour, setTour } = useContext(TourContent)
  const { name } = useParams();
  console.log(Tour, name);
  const single = Tour.find((item) => item._id == name);
  if(!single){
    return <div>Sorry, tour doesn't exist</div>
  }

  return (
    <div className="reba">
    <h1>Tour List</h1>
    <div className="tour-list">
      {tours.map((tour) => (
        <div key={tour._id} className="tour-item">
          <img src={tour.backdropImage} alt={tour.title} />
          <h2>title: {tour.title}</h2>
          <p><b>description</b>: {tour.Description}</p>
          <p>Duration: {tour.Duration}</p>
          <p>Group Size: {tour.Group_size}</p>
          <p>Price: {tour.Price}</p>
          <p>Discount: {tour.Discount} %</p>
          <p>Tour Type: {tour.Tour_type}</p>
          <p>Departure: {tour.Departure}</p>
          <p>Seats: {tour.Seats}</p>
          <p>From Month: {tour.fromMonth}</p>
          <p>To Month: {tour.toMonth}</p>
          <p>Departure Time: {tour.departureTime}</p>
          <p>Return Time: {tour.ReturnTime}</p>
          {/* Additional details here */}
        </div>
      ))}
    </div>
  </div>
  );
}

export default TourDetail;

