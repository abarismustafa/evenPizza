import React from 'react'

const FinanceInformation = () => {
  return (
    <div className="row g-3">

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Company Name
      </label>
      <input type="text" placeholder="Company Name" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Finance Amount
      </label>
      <input type="text" placeholder="Finance Amount" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        No Of Installment
      </label>
      <input type="text" placeholder="No Of Installment" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Down Payment Amount
      </label>
      <input type="text" placeholder="Down Payment Amount" className="form-control" />
    </div>


    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Finnance Date From
      </label>
      <input type="Date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Finance Date To
      </label>
      <input type="date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Installment Date
      </label>
      <input type="Date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Next Installment Date
      </label>
      <input type="Date" placeholder="" className="form-control" />
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Installment Amount
      </label>
      <input type="text" placeholder="Installment Amount" className="form-control" />
    </div>

    </div>
  )
}

export default FinanceInformation