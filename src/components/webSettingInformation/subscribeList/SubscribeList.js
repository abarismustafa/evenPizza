import React, { useState } from 'react'
import CustomerListHeader from '../CustomerListHeader'
import SubscribeTable from './SubscribeTable'
import SubscribeForm from './SubscribeForm'

const SubscribeList = () => {
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
                        <h2 className='text-light fs-4'>Subscribe List</h2>
                        <button type='button' className='btn btn-primary'
                        onClick={hendleAddClick}
                        >Add Subscribe</button>
                    </div>
                    <CustomerListHeader />
                    <SubscribeTable data={data}/>
                </div>
            ):(
                <div>
                <div className="d-flex justify-content-between align-items-center p-2 m-2 bg-black">
                        <h2 className='text-light fs-4'>Add Subscribe </h2>
                        <button type='button' className='btn btn-primary'
                        onClick={hendleActiveClick}
                        >Go Back</button>
                    </div>
                    <SubscribeForm />
                </div>
            )
        }
    </div>
  )
}

export default SubscribeList