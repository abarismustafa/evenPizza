import React from 'react'

const DriverDetailsInfomation = () => {
    return (
        <div className="row g-3">
    
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
                Truck
          </label>
          <input type="text" placeholder="Truck" className="form-control" />
        </div>
    
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Driver
          </label>
          <input type="text" placeholder="Driver" className="form-control" />
        </div>
    
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            From Date
          </label>
          <input type="Date" placeholder="" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Remark
          </label>
          <input type="text" placeholder="Remark" className="form-control" />
        </div>
    
        <div className="col-lg-3 col-md-6 col-sm-12">
            <button type='button' className='btn btn-primary px-5 mt-5'>Add</button>
        </div>
    
        </div>
      )
}

export default DriverDetailsInfomation