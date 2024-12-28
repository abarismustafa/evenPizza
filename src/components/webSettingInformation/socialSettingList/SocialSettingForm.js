import React from "react";

const SocialSettingForm = () => {
  return (
    <div className="row g-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Title
        </label>
        <input type="text" placeholder="Title " className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Url
        </label>
        <input type="text" placeholder="Url" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Select Icon
        </label>
        <input type="text" placeholder="Select Icon" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Select Icon
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
  );
};

export default SocialSettingForm;
