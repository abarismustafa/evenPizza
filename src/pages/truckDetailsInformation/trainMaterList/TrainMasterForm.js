import React from 'react'

const TrainMasterForm = () => {
    return (
        <div className="card m-2">
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
              Train No
            </label>
            <input type="text" placeholder="Train No" className="form-control" />
          </div>
    
          <div className="col-lg-4 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
              Name
            </label>
            <input type="text" placeholder="Name" className="form-control" />
          </div>
    
          <div className="col-lg-4 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
              Detail
            </label>
            <input type="text" placeholder="Detail" className="form-control" />
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

export default TrainMasterForm