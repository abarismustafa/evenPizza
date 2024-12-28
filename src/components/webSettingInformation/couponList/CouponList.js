import React, { useState } from 'react'
import CouponTable from './CouponTable'
import CouponForm from './CouponForm'
import CustomerListHeader from '../CustomerListHeader'

const CouponList = () => {
    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState([])
    function hendleAddClick(){
        setIsActive(true)
    }
    function hendleActiveClick(){
        setIsActive(false)
    }

  return (
    <div>
        {
            !isActive ? (
                <div>
                    <div className="d-flex justify-content-between align-items-center p-2 m-2 bg-black">
                        <h2 className='text-light fs-4'>Coupon List</h2>
                        <button type='button' className='btn btn-primary'
                        onClick={hendleAddClick}
                        >add coupon</button>
                    </div>
                    <CustomerListHeader />
                    <CouponTable data={data}/>
                </div>
            ):(
                <div>
                <div className="d-flex justify-content-between align-items-center p-2 m-2 bg-black">
                        <h2 className='text-light fs-4'>Add Coupon</h2>
                        <button type='button' className='btn btn-primary'
                        onClick={hendleActiveClick}
                        >Go Back</button>
                    </div>
                        <CouponForm />
                </div>
            )
        }
    </div>
  )
}

export default CouponList