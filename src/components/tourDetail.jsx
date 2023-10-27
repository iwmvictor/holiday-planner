import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TourDetail() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://holiday-api-zj3a.onrender.com/api/v1/tour/all');
        setTours(response.data); // Assuming the data is an array of tours
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Call the async function to fetch data
    fetchData();
  }, []);

  if (loading) {
    return (
      <div class="loader-wrapper">
        <div class="loader">
          <div class="circle outer">
            <div class="circle middle">
              <div class="circle inner">
                <div class="circle inniest"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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

