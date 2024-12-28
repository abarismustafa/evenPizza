import React from 'react';
import { Link } from 'react-router-dom';

function AddBooking() {
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">Book A Table</h3>
        </div>

        <form className="row align-items-end" style={{ marginTop: "10px" }}>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">Date:</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              placeholder=""
            />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="timeInput" className="form-label">Time:</label>
            <input
              type="time"
              className="form-control"
              id="timeInput"
              placeholder=""
            />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="peopleInput" className="form-label">Number Of People:</label>
            <input
              type="text"
              className="form-control"
              id="peopleInput"
              placeholder=""
            />
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <Link
              className="btn btn-primary btn-lg"
              to=""
              role="button"
              aria-label="Check Availability"
              style={{ marginTop: "32px" }}
            >
              Check Availability
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBooking;
