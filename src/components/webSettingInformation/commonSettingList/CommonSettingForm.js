import React from "react";

const CommonSettingForm = () => {
  return (
    <div className="card m-2">
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Mobile
          </label>
          <input type="Number" placeholder="Mobile" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Phone
          </label>
          <input type="number" placeholder="Phone" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Logo
          </label>
          <input type="file" placeholder="" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">
            Footer Logo
          </label>
          <input type="file" placeholder="" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">
            Web site ON/Off
          </label>
          <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="downline" className="form-label">
            Membership Enable
          </label>
          <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-md-6 col-sm-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            rows="2"
            placeholder="Address"
          ></textarea>
        </div>

        <div className="col-md-6 col-sm-12">
          <label htmlFor="address" className="form-label">
            Powered By Text
          </label>
          <textarea
            className="form-control"
            rows="2"
            placeholder="Powered By Text"
          ></textarea>
        </div>

        <div className="mt-3 text-center">
          <button type="button" className="btn btn-primary px-5">
            Save
          </button> 
          <button type="button" className="btn btn-danger px-5">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonSettingForm;
