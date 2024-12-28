import React from 'react'

const SeoSettingForm = () => {
    return (
        <div className="row g-3">
          <div className="col-lg-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Title 
            </label>
            <input type="text" placeholder="Title " className="form-control" />
          </div>
    
          <div className="col-lg-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Keyword
            </label>
            <input type="text" placeholder="Keyword" className="form-control" />
          </div>
    
          <div className="col-sm-12">
          <label htmlFor="employee" className="form-label">
          Description
            </label>
          <textarea className="form-control" placeholder="Description" id="floatingTextarea"></textarea>
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
}

export default SeoSettingForm