import React, { useState, useEffect } from "react";

const DisplayTours = () => {
  const [tourpst, setTourpst] = useState([]);

  useEffect(() => {
    const apiUrl = "https://hopday-api-zj3a.onrender.com/api/v1/tour/all";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTourpst(data);
      })
      .catch((error) => {
        console.error("Error fetching tour data:", error);
      });
  }, []);

  if (tourpst.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>pst of Tours</h1>
      {tourpst.map((tour) => (
        <TourDetail key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

const TourDetail = ({ tour }) => {
  return (
    <div>
      <img src={tour.backdropImage} alt={tour.title} />
      <h2>{tour.title}</h2>
      <p>{tour.description}</p>
      <p>Destination: {tourData.destination}</p>
      <p>Duration: {tourData.Duration}</p>
      <p>Group Size: {tourData.Group_size}</p>
      <p>Price: {tourData.Price}</p>
      <p>Discount: {tourData.Discount}</p>
      <p>Tour Type: {tourData.Tour_type}</p>
      <p>Departure: {tourData.Departure}</p>
      <p>Seats Available: {tourData.Seats}</p>
      <p>
        Months: {tourData.fromMonth} - {tourData.toMonth}
      </p>
      <p>Departure Time: {tourData.departureTime}</p>
      <p>Return Time: {tourData.ReturnTime}</p>
    </div>
  );
};

export default DisplayTours;
