import React from 'react'

const LiterInformation = () => {
  return (
    <div className="row g-3">

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
            Date
      </label>
      <input type="date" placeholder="Company Name" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Closing Liter
      </label>
      <input type="text" placeholder="Closing Liter" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        KM
      </label>
      <input type="text" placeholder="KM" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
        <button type='button' className='btn btn-primary px-5 mt-5'>Add</button>
    </div>

    </div>
  )
}

export default LiterInformation