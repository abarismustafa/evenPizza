import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, } from 'recharts';

function SalesPersonDashComp() {
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
                            <span className="number">New Subcriptions</span>
                            <span className="label">14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 760 ARR</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Churn</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />0</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Monthly Rec Rev</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> subscriptions</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Non Rec Rev</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h4 className='m-0 p-0' style={{ color: '#006666' }}>Subcriptions</h4>
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
                                <h2>Top Churn</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Subscriptions</th>
                                            <th className='text-centre'>Value</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12</td>
                                            <td>1200</td>
                                            <td>1234</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>1200</td>
                                            <td>1234</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>1200</td>
                                            <td>1234</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top New</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Subscriptions</th>
                                            <th className='text-centre'>Value</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21</td>
                                            <td>492</td>
                                            <td>492</td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td>492</td>
                                            <td>492</td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td>492</td>
                                            <td>492</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Expansion</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Subscriptions</th>
                                            <th className='text-centre'>Value</th>
                                            <th className='text-centre'>MRR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10</td>
                                            <td>312</td>
                                            <td>2300</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>312</td>
                                            <td>2300</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>312</td>
                                            <td>2300</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Contraction</h2>
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

export default SalesPersonDashComp