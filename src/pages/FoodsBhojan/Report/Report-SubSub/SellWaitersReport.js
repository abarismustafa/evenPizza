import React from 'react'
import Header from '../../../../components/FoodsBhojan/Reservation/Header'
import WaiterList from '../../../../components/FoodsBhojan/Report/Report-subsub/WaiterList'

function SellWaitersReport() {
  return (
    <div>
    <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className="table-responsive active-projects style-1">
        <h3 className="tbl-caption text-light">
        Sell Report Waiters
          <div>
             </div>
          </h3></div>
          <div class="row">
    <form class="d-flex align-items-center gap-2 row">
       <div className='col-lg-3 col-md-6 col-12'>
      <label for="to" class="form-label mb-0">From</label>
      <input type="date" id="date" class="form-control"/>
      </div>
      <div className='col-lg-3 col-md-6 col-12'>
      <label for="to" class="form-label mb-0">To</label>
      <input type="date" id="date" class="form-control"/>
      </div>
          
      </form>
      <div className=' text-center'>
      <button type="button" class="btn btn-primary">Print</button>
      <button type="button" class="btn btn-success">Search</button>
     </div>
  </div>
 
  <div className='mt-2 border-top' >
  <h5 className='text-center'>Dhaka Restaurant
  98 Green Road, Farmgate, Dhaka-1215.</h5>
          <Header/>
          </div>
    </div>
    <div className='mt-2 card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }} >
<WaiterList/> </div>
  </div>

  )
}

export default SellWaitersReport