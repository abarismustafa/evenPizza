import React from 'react';
import Header from '../../../components/FoodsBhojan/Reservation/Header';
import { Link } from 'react-router-dom';
import ProductionSetListing from '../../../components/FoodsBhojan/Production/ProductionSetListing';

function ProductionList() {
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">
            Production List
            <div>
                 <Link
                                className="btn btn-primary btn-sm"
                                to="/set-production"
                                role="button"
                                aria-controls="offcanvasExample"
                                aria-label="Take a Reservation"
                                style={{ marginLeft: "8px" }}
                              >
                                + Add Production
                              </Link>
            </div>
            </h3></div>
            <Header/>
            
      <div className='mt-2' ><ProductionSetListing/></div>
      </div>
    </div>
  );
}

export default ProductionList;
