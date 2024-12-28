import React from "react";

const BannerForm = () => {
  return (
    <div className="row g-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Banner Type
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Banner Width
        </label>
        <input
          type="text"
          placeholder="Banner Width"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Banner Height
        </label>
        <input type="text" placeholder="Banner Height" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Title
        </label>
        <input type="text" placeholder="Title" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Sub Title
        </label>
        <input type="text" placeholder="Sub Title" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Image
        </label>
        <input type="file" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
        Link URL
        </label>
        <input type="text" placeholder="Link URL" className="form-control" />
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

export default BannerForm;
