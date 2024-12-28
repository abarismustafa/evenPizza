import React from 'react'

function UserList() {
  return (
    <div className=''>
    <table class="table table-bordered table-hover">
      <thead class="table-primary">
        <tr>
          <th scope="col">SL No.</th>
          <th scope="col">Image</th>
          <th scope="col">User Name</th>
          <th scope="col">Email Address</th>
          <th scope="col">About</th>
          <th scope="col">Last Login</th>
          <th scope="col">Last Logout</th>
          <th scope="col">IP Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <td>1</td>
          <td><img src="https://via.placeholder.com/50" class="img-thumbnail" alt="User Image"/></td>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
          <td>Administrator</td>
          <td>2024-12-25 10:30 AM</td>
          <td>2024-12-25 05:45 PM</td>
          <td>192.168.1.1</td>
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
        <tr>
          <td>2</td>
          <td><img src="https://via.placeholder.com/50" class="img-thumbnail" alt="User Image"/></td>
          <td>Jane Smith</td>
          <td>jane.smith@example.com</td>
          <td>Content Manager</td>
          <td>2024-12-24 09:15 AM</td>
          <td>2024-12-24 06:00 PM</td>
          <td>192.168.1.2</td>
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
        <tr>
          <td>3</td>
          <td><img src="https://via.placeholder.com/50" class="img-thumbnail" alt="User Image"/></td>
          <td>Mark Johnson</td>
          <td>mark.johnson@example.com</td>
          <td>Editor</td>
          <td>2024-12-23 11:00 AM</td>
          <td>2024-12-23 04:30 PM</td>
          <td>192.168.1.3</td>
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

export default UserList
