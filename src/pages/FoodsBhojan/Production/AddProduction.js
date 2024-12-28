import React from 'react'
import AddProductionList from '../../../components/FoodsBhojan/Production/AddProductionList'

function AddProduction() {
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">
         Add Production
  </h3></div>
  <form className='row'>
  <div className="col-lg-3 col-md-6 col-12">
                  <div className='mt-2'>
                      <label for="exampleFormControlInput1" class="form-label">Food Name: </label>
                      <select className='form-control'>
                          <option className='' value="--all--">--All--</option>
                          <option className='' value="India"></option>
                          <option className='' value="India"></option>
                      </select>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                  <div className='mt-2'>
                      <label for="exampleFormControlInput1" class="form-label">Variant Name: </label>
                      <select className='form-control'>
                          <option className='' value="--all--">--All--</option>
                          <option className='' value="India"></option>
                          <option className='' value="India"></option>
                      </select>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">Production Date:</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">Serving Unit:</label>
            <input
              type="text"
              className="form-control"
             
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">Expiry Date:</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              placeholder=""
            />
          </div>
  </form>
  <div className='mt-2 text-center' >
             <button type="button" class="btn btn-success btn-lg">Submit</button>
             </div>
            </div>
            <AddProductionList/>
    </div>
  )
}

export default AddProduction
