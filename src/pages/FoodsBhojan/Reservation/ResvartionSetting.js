import React from 'react'
import Header from '../../../components/FoodsBhojan/Reservation/Header';
import { Link } from 'react-router-dom';
function ResvartionSetting() {
  return (
    <div>
    <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className="table-responsive active-projects style-1">
        <h3 className="tbl-caption text-light">
          Reservation Setting
          </h3></div>
          <Header/>
          
    <div className='mt-2 border-top' > 
    <form className="row align-items-end" style={{ marginTop: "10px" }}>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="timeInput" className="form-label">Opening Time:</label>
            <input
              type="time"
              className="form-control"
              id="timeInput"
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="timeInput" className="form-label">Close Time:</label>
            <input
              type="time"
              className="form-control"
              id="timeInput"
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="timeInput" className="form-label">Max Reserve Person:</label>
            <input
              type="text"
              className="form-control"
              id="timeInput"
              placeholder=""
            />
          </div>
      

          </form>
       </div>
       <div className='mt-2 text-center'>
       <button type="button" class="btn btn-success btn-lg">Save</button>
       <button type="button" class="btn btn-danger btn-lg">Reset</button>
       </div>
    </div>
  </div>
  )
}

export default ResvartionSetting
