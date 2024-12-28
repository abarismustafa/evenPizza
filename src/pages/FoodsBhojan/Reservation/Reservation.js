import React from 'react';
import Header from '../../../components/FoodsBhojan/Reservation/Header';
import { Link } from 'react-router-dom';
import ReservationList from '../../../components/FoodsBhojan/Reservation/ReservationList';

function Reservation() {
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">
            Reservation
            <div>
                 <Link
                                className="btn btn-primary btn-sm"
                                to="/add-book"
                                role="button"
                                aria-controls="offcanvasExample"
                                aria-label="Take a Reservation"
                                style={{ marginLeft: "8px" }}
                              >
                                + Take A Reservation
                              </Link>
            </div>
            </h3></div>
            <Header/>
            
      <div className='mt-2' >  <ReservationList/></div>
      </div>
    </div>
  );
}

export default Reservation;
