import React from "react";

function dashboardPlace() {
  return (
    <main
      className="admin-place"
      style={{
        background: "var(--card-dark)", height: '100vh', width: '100%'
      }}
    >
      <div className="tour-place" style={{ marginLeft: "230px" }}>
        <div className="tour-container">
          <div className="tour-place-header">
            <h2> tour details</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default dashboardPlace;
