import React from "react";

const RegistrationInformation = () => {
  return (
    <div className="row g-3">

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Truck Reg. No
        </label>
        <input type="text" placeholder="Truck Reg. No" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Engine No
        </label>
        <input type="text" placeholder="Engine No" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Chassis No
        </label>
        <input type="text" placeholder="Chassis No" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Load Cap
        </label>
        <input type="text" placeholder="Load Cap" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Own/Outside
        </label>
        <input type="text" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Truck Reg. No
        </label>
        <input type="text" placeholder="Own/Outside" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Type of Vehicle
        </label>
        <input type="text" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
            Maker's Name
        </label>
        <input type="text" placeholder="Maker's Name" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
            RoadTax Rcpt No
        </label>
        <input type="text" placeholder="RoadTax Rcpt No" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
            Note
        </label>
        <input type="text" placeholder="Note" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
            Model Year/Month
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
            Fastag No
        </label>
        <input type="text" placeholder="Fastag No" className="form-control" />
      </div>

    </div>
  );
};

export default RegistrationInformation;
