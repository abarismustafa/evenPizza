import React from 'react'

function AddProductionList() {
  return (
    <div className='card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className='table-responsive active-projects style-1'>
            <h3 className='tbl-caption text-light'>Add Production List</h3>
        </div>
    <table class="table table-bordered table-striped">
       <thead class="table-light">
           <tr>
               <th>Sr No</th>
               <th>Food Name</th>
               <th>Variant Name</th>
               <th>Production Date</th>
               <th>Serving Unit</th>
               <th>Expiry Date</th>
                <th>Action</th>
             
           </tr>
       </thead>
       <tbody>
           <tr>
             <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <div>
           <a className="btn btn-primary shadow btn-xs sharp me-1">
             <i class="fa fa-pencil"> </i>
           </a>
           <a class="btn btn-danger shadow btn-xs sharp" >
             <i class="fa fa-trash">
             </i>
           </a>
         </div>
           </tr>
                    
       </tbody>
   </table>
   </div>
  )
}

export default AddProductionList
