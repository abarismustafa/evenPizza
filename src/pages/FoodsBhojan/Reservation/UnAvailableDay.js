import React, { useState } from 'react'
import Header from '../../../components/FoodsBhojan/Reservation/Header';
import { Link } from 'react-router-dom';
import UnDayPop from '../../../components/FoodsBhojan/Reservation/UnDayPop';
import UnDayList from '../../../components/FoodsBhojan/Reservation/UnDayList';
function UnAvailableDay() {
     const [show, setShow] = useState (false)
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">
           Un Available Day
            <div>
                 <Link
                                className="btn btn-primary btn-sm"
                                to=""
                                role="button"
                                aria-controls="offcanvasExample"
                                aria-label="Take a Reservation"
                                style={{ marginLeft: "8px" }}
                                onClick={()=>setShow(true)}     >
                                + Add Unavailability
                              </Link>
            </div>
            </h3></div>
            <Header/>
            
      <div className='mt-2' > <UnDayList/></div>
      </div>
      {show && <UnDayPop show={show} setShow={setShow}/>}
    
    </div>

  )
}

export default UnAvailableDay
