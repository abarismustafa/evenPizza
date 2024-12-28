import React from 'react'

const RtoInformation = () => {
  return (
    <div className="row g-3">

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        RoadTax Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        RoadTax Due Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Capacity
      </label>
      <input type="text" placeholder="Capacity" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Permit Due Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>


    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        National Permit No
      </label>
      <input type="text" placeholder="National Permit No" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        National Permit Due
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Puc Due Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Fitness No
      </label>
      <input type="text" placeholder="Fitness No" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Fitness Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Fitness Due Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    </div>
  )
}

export default RtoInformation