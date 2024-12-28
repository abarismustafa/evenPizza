import React from 'react'

function CashRegisterList() {
  return (
    <div className='table-responsive active-projects style-1'>
    <h3 className='tbl-caption text-light'>Cash Register List</h3>
         <table class="table table-bordered table-striped">
       <thead class="table-light">
           <tr>
               <th>Sr No</th>
               <th>From Date</th>
               <th>To Date</th>
               <th>Customer Name</th>
               <th>Table Person</th>
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

export default CashRegisterList
