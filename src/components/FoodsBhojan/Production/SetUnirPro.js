import React from 'react'

function SetUnirPro() {
  return (
    <div>
    <table class="table table-bordered table-striped">
       <thead class="table-light">
           <tr>
               <th>Sr No</th>
               <th>Item Information</th>
               <th>QTY</th>
               <th>Price</th>
                <th>Action</th>
             
           </tr>
       </thead>
       <tbody>
           <tr>
             <td>1</td>
               <td> 
                  <div className=''>
                      <select className='form-control'>
                          <option className='' value="--Select Option--">--Select Option--</option>
                          <option className='' value="India">Active</option>
                          <option className='' value="India">UnActive</option>
                      </select>
                  </div>
             </td>
               <td><input type='text' className='form-control'placeholder='0.00'/></td>
               <td><input type='text' className='form-control'placeholder='0.00'/></td>
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

export default SetUnirPro
