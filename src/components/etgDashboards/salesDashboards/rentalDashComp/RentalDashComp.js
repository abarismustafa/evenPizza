import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { AiOutlinePercentage } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RentalDashComp() {
    const data = [
        {
            name: '1 Sep 2023',
            uv: 3,

        },
        {
            name: '12 Sep 2023',
            uv: 3,

        },
        {
            name: '13 Sep 2023',
            uv: 3,

        },
        {
            name: '14 Sept 2023',
            uv: 3,

        },
        {
            name: 'September 2023',
            uv: 6,

        },
        {
            name: 'September 2023',
            uv: 3,

        },

    ];

    return (
        <>
            <div className="ContentArea">
                <div className="dashboard-gaot">
                    <div className='set-list-Dashboard'>
                        <h1>Welcome to Dashboard</h1>
                    </div>

                    <div className="row mt-3">
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Quotations</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Rentals</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Revenue</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30 }} >
                        <div className='col-md-12'>
                            <h4 className='m-0 p-0' style={{ color: '#006666' }}>Daily Rentals</h4>
                            <hr className=' border-primary m-auto pt-2' />
                            <LineChart width={1000} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ marginTop: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />

                                <Line type="monotone" dataKey="uv" stroke="#0033cc" strokeWidth={4} />
                            </LineChart>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Product Categories</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Category</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Products</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Point of Sale</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cusomer Care</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Cusomer Care</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Cusomer Care</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Salespersons</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Customers</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Point of Sale</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>




                </div>
            </div >

        </>
    )
}

export default RentalDashComp