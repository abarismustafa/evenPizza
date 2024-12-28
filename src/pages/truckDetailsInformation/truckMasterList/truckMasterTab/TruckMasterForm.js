import React from 'react'

const TruckMasterForm = () => {
  return (
    <div className="row g-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Truck</label>
          <input
            type="number"
            placeholder='Truck'
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Permit No</label>
          <input
            type="text"
            placeholder='Permit No'
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">RTO</label>
          <input
            type="text"
            placeholder='RTO'
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">Driver</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Wb Permit No</label>
          <input
            type="text"
            placeholder='Wb Permit No'
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">PUC</label>
          <input
            type="text"
            placeholder='PUC'
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">Transpoter</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Average</label>
          <input
            type="text"
            placeholder="Average"
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">Owner</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">Account</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">Packaging</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Tax Amount</label>
          <input
            type="text"
            placeholder="Tax Amount"
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Last Reading of Truck</label>
          <input
            type="text"
            placeholder="Last Reading of Truck"
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">Type</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">GPS Name</label>
          <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">IMEI No</label>
          <input
            type="text"
            placeholder="IMEI No"
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">IMEI No</label>
          <input
            type="file"
            placeholder=""
            className="form-control"
          />
        </div>

      </div>
  )
}

export default TruckMasterForm