import React from "react";

const MenuSettingForm = () => {
  return (
    <div className="row g-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Menu Name
        </label>
        <input type="text" placeholder="Menu Name" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Menu Slug
        </label>
        <input type="text" placeholder="Menu Slug" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Sub Menu
        </label>
        <input type="text" placeholder="Sub Menu" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
        Status
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
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
  );
};

export default MenuSettingForm;
