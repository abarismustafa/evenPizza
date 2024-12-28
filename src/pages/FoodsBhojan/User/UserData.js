import React from 'react'
import Header from '../../../components/FoodsBhojan/Reservation/Header'
import UserList from '../../../components/FoodsBhojan/User/UserList'

function UserData() {
  return (
    <div>
            <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
                <div className="table-responsive active-projects style-1">
                    <h3 className="tbl-caption text-light">
                         User List </h3></div>
<Header/>
<div className='mt-2'><UserList/></div>
            </div>





        </div>
  )
}

export default UserData
