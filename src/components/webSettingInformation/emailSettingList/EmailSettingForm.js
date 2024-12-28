import React from "react";

const EmailSettingForm = () => {
    return(
        <form>
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Protocol
            </label>
            <input type="text" placeholder="Protocol" className="form-control" />
          </div>
    
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            MailPath
            </label>
            <input
              type="text"
              placeholder="MailPath"
              className="form-control"
            />
          </div>
    
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            MailType
            </label>
            <input type="text" placeholder="MailType" className="form-control" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Smtp Host 
            </label>
            <input type="text" placeholder="Smtp Host " className="form-control" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
            Smtp Port 
            </label>
            <input type="text" placeholder="Smtp Port " className="form-control" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
                Sender Email
            </label>
            <input type="email" placeholder="Sender Email" className="form-control" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
                Smtp Password 
            </label>
            <input type="text" placeholder="Smtp Password " className="form-control" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">
                api key
            </label>
            <input type="text" placeholder="api key" className="form-control" />
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
      </form>
    )
 
};

export default EmailSettingForm;
