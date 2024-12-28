import JoditEditor from 'jodit-react';
import React from 'react'
import MsWordEditer from './MsWordEditer';

const WidgetSettingForm = () => {
    return (
        <div className="row g-3">
          <div className="col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Widget Name 
            </label>
            <input type="text" placeholder="Widget Name" className="form-control" />
          </div>
    
          <div className="col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Widget Title
            </label>
            <input type="text" placeholder="Widget Title" className="form-control" />
          </div>
    
          <div className="col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Description
            </label>
            <MsWordEditer />
            <div>
        </div>
          </div>
    
          <div className="col-md-6 col-sm-12">
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
      );
}

export default WidgetSettingForm