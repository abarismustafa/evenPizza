import React from 'react'

const CouponForm = () => {
    return (
        <div className='card m-2'>
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Coupon Code 
            </label>
            <input type="text" placeholder="Coupon Code  " className="form-control" />
          </div>
    
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Coupon Value
            </label>
            <input type="text" placeholder="Coupon Value" className="form-control" />
          </div>
    
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Start Date
            </label>
            <input type="date" placeholder="" className="form-control" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            End Date
            </label>
            <input type="date" placeholder="" className="form-control" />
          </div>
    
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Status
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
    
          <div className="mt-3 text-center">
            <button type="button" className="btn btn-primary px-5">
              Add
            </button>
            <button type="button" className="btn btn-danger px-5">
              Reset
            </button>
          </div>
        </div>
        </div>
      );
}

export default CouponForm