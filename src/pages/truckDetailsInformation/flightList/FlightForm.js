import React from 'react'

const FlightForm = () => {
    return (
        <div className="card m-2">
        <div className="row g-3">
          <div className="col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
              Flight Name
            </label>
            <input type="text" placeholder="Flight Name" className="form-control" />
          </div>

          <div className="mt-3 text-center">
              <button type="button" className="btn btn-primary px-5">
                Save
              </button>
            </div>
        </div>
        </div>
      );
}

export default FlightForm