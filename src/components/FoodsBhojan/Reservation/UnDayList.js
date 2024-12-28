import React from 'react'

function UnDayList() {
  return (
    <div>
    <table class="table table-bordered table-striped">
       <thead class="table-light">
           <tr>
               <th>Sr No</th>
               <th>Un Available Date</th>
               <th>Available Time</th>
                <th>Action</th>
             
           </tr>
       </thead>
       <tbody>
           <tr>
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

export default UnDayList
