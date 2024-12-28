import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line } from 'recharts';

function EtgVendorDashComp() {
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
                            <span className="number">Purchased</span>
                            <span className="label">$ 14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Orders</span>
                            <span className="label">$146.67</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Lines</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Quantity ordered</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2 mt-2">
                            <span className="number">Days to recieve</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Monthly Sales</h5>
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
                                <h2>Top Orders</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Ordered</th>
                                            <th className='text-centre'>Buyer</th>
                                            <th className='text-centre'>Source</th>
                                            <th className='text-centre'>Vendor</th>
                                            <th className='text-centre'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>492</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>49002</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>492</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>49002</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>492</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>49002</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Vendors</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Vendor</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>492</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>492</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>492</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Buyer</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Buyer</th>
                                            <th className='text-centre'>Orders</th>
                                            <th className='text-centre'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>20</td>
                                            <td>2000</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>20</td>
                                            <td>2000</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>20</td>
                                            <td>2000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Sourcing by Country</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Country</th>
                                            <th className='text-centre'>Orders</th>
                                            <th className='text-centre'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>4200</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>4200</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>4200</td>
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

export default EtgVendorDashComp