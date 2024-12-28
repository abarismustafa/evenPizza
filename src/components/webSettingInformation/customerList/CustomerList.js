import React, { useState } from 'react'
import CustomerTable from './CustomerTable'
import CustomerListHeader from '../CustomerListHeader'

const CustomerList = () => {
    const [data, setData] = useState([])

    return (
        <div>
            <div className='bg-black p-2 m-2'>
                <h2 className='fs-4 text-light'>Customer</h2>
            </div>
            <CustomerListHeader />
            <CustomerTable data={data} />
        </div>
    )
}

export default CustomerList;
