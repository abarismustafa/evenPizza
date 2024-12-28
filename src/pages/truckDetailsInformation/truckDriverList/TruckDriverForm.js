import React from "react";

const TruckDriverForm = () => {
  return (
    <div className="card m-2">
    <div className="row g-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Driver Name
        </label>
        <input type="text" placeholder="Driver Name" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Alias
        </label>
        <input type="text" placeholder="Alias" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Address
        </label>
        <input type="text" placeholder="Address" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          City
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Police Stn
        </label>
        <input
          type="text"
          placeholder="Police Stn"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Mobile 1 
        </label>
        <input type="number" placeholder="Mobile 1" className="form-control" />
      </div> 

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Mobile 2
        </label>
        <input type="number" placeholder="Mobile 2" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Licence No
        </label>
        <input type="text" placeholder="Licence No" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Valid up To
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        RTO State
        </label>
        <input type="text" placeholder="RTO State" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        UserName(owner)
        </label>
        <input type="text" placeholder="UserName(owner)" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Password
        </label>
        <input type="text" placeholder="Password" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Re-Type Password
        </label>
        <input type="text" placeholder="Re-Type Password" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Dri. Image
        </label>
        <input type="file" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Lic. Image
        </label>
        <input type="file" placeholder="" className="form-control" />
      </div>

      <div className="mt-3 text-center">
          <button type="button" className="btn btn-primary px-5">
            Save
          </button>
        </div>
    </div>
    </div>
  );
};

export default TruckDriverForm;
