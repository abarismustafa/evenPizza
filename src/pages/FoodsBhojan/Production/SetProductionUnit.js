import React from 'react'
import SetUnirPro from '../../../components/FoodsBhojan/Production/SetUnirPro'

function SetProductionUnit() {
  return (
    <div>
      <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className="table-responsive active-projects style-1">
          <h3 className="tbl-caption text-light">
          Set Production Unit
            </h3></div>
            <div className='border-bottom'>
         <h4>   Set Production Cost Per Unit</h4>
            </div>
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
                          <option className='' value="India">Active</option>
                          <option className='' value="India">UnActive</option>
                      </select>
                  </div>
              </div>
            </form>
           
             <div className='mt-2' >
            <SetUnirPro/>
             </div>
             <div className='mt-2 text-center' >
             <button type="button" class="btn btn-success btn-lg">Submit</button>
             </div>
      </div>
    </div>
  )
}

export default SetProductionUnit
