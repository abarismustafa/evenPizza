import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { AiOutlinePercentage } from "react-icons/ai";
import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, } from 'recharts';

function SubscriptionDashComp() {
    const data = [
        {
            name: 'May 2023',
            uv: 65,

        },
        {
            name: 'June 2023',
            uv: 142,

        },
        {
            name: 'July 2023',
            uv: 142

        },
        {
            name: 'Aug 2023',
            uv: 142,

        },
        {
            name: 'Sept 2023',
            uv: 95,

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
                            <span className="number">Monthly Rec Rev</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 760 ARR</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">New MRR</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Subscriptions</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 subscriptions</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Churn</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 MRR</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2 mt-2">
                            <span className="number">Cust Lifetime</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                    </div>


                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h4 className='m-0 p-0' style={{ color: '#006666' }}>Monthly Recurring Revenue</h4>
                            <hr className=' border-primary m-auto pt-2' />

                            <AreaChart
                                width={1000}
                                height={250}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="line" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>

                        </div>
                    </div>
                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h4 className='m-0 p-0' style={{ color: '#006666' }}>Monthly Growth</h4>
                            <hr className=' border-primary m-auto pt-2' />

                            <BarChart width={1000} height={250} data={data}>
                                <XAxis dataKey='name' />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>

                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Quotations</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Quotes</th>
                                            <th className='text-centre'>Customer</th>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Deco addict</td>
                                            <td>1234</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>1234</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>1234</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Subcriptions</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Subscriptions</th>
                                            <th className='text-centre'>Customer</th>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Projectore</td>
                                            <td>3</td>
                                            <td>492</td>
                                            <td>3887</td>
                                        </tr>
                                        <tr>
                                            <td>Projectore</td>
                                            <td>3</td>
                                            <td>492</td>
                                            <td>3887</td>
                                        </tr>
                                        <tr>
                                            <td>Projectore</td>
                                            <td>3</td>
                                            <td>492</td>
                                            <td>3887</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Plan</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Plan</th>
                                            <th className='text-centre'>Subscriptions</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>32</td>
                                            <td>23354</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>32</td>
                                            <td>23354</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>32</td>
                                            <td>23354</td>
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
                                            <th className='text-centre'>Product</th>
                                            <th className='text-centre'>Subscriptions</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>32</td>
                                            <td>9987</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>32</td>
                                            <td>9987</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>32</td>
                                            <td>9987</td>
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

export default SubscriptionDashComp