import React from 'react'

const InsuranceInformation = () => {
  return (
    <div className="row g-3">

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Company
      </label>
      <input type="text" placeholder="Company" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Policy No
      </label>
      <input type="text" placeholder="Policy No" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Premium
      </label>
      <input type="text" placeholder="Premium" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Value
      </label>
      <input type="text" placeholder="Value" className="form-control" />
    </div>


    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Insurance Date
      </label>
      <input type="Date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Renew Date
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Notes
      </label>
      <input type="text" placeholder="Notes" className="form-control" />
    </div>

    </div>
  )
}

export default InsuranceInformation