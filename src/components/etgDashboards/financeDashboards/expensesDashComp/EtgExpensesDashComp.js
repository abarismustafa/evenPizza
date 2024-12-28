import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function EtgExpensesDashComp() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
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
                            <span className="number">Expenses</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />00</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">To Report</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />0</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">To Validate</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />0</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">To Reimburse</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />0</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Expenses Analysis</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <BarChart
                                width={1200}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                            </BarChart>


                        </div>

                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Expenses</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Expense</th>
                                            <th className='text-centre'>Employee</th>
                                            <th className='text-centre'>Total</th>
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
                                <h2>Top Categories</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Category</th>
                                            <th className='text-centre'>Expenses</th>
                                            <th className='text-centre'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Projector</td>
                                            <td>21</td>
                                            <td>492</td>
                                        </tr>
                                        <tr>
                                            <td>Projector</td>
                                            <td>21</td>
                                            <td>492</td>
                                        </tr>
                                        <tr>
                                            <td>Projector</td>
                                            <td>21</td>
                                            <td>492</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Reinvoiced Orders</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Expenses</th>
                                            <th className='text-centre'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abcd</td>
                                            <td>2100</td>
                                            <td>2100</td>
                                        </tr>
                                        <tr>
                                            <td>Abcd</td>
                                            <td>2100</td>
                                            <td>2100</td>
                                        </tr>
                                        <tr>
                                            <td>Abcd</td>
                                            <td>2100</td>
                                            <td>2100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Employee</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Employee</th>
                                            <th className='text-centre'>Expenses</th>
                                            <th className='text-centre'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>2300</td>
                                            <td>2300</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>2300</td>
                                            <td>2300</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>2300</td>
                                            <td>2300</td>
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

export default EtgExpensesDashComp