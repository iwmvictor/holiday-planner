import React, { useState, useEffect } from "react";
import axios from "axios";

function Reba() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of registered users from the API
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/auth/users")
      .then((response) => {
        setUsers(response.data); // Assuming the data is an array of users
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="reba-container">
      <h2>List of Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} style={{margin: '10px', background: '#666'}}>
            <p>Name: {user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Location: {user.location}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reba;
