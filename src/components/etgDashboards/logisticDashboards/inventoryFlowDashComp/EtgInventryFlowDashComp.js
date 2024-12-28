import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, } from 'recharts';

function EtgInventryFlowDashComp() {
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
                            <span className="number">Average Cycle Time</span>
                            <span className="label">$ 14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Average Delay</span>
                            <span className="label">$146.67</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Moved Quantity</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Weakly Stock Moves</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <ResponsiveContainer height={250} width="100%">
                                <LineChart data={data} margin={{ right: 25, top: 10 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Line type="line" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={5} />
                                    <Line type="line" dataKey="uv" stroke="#82ca9d" strokeWidth={5} />
                                </LineChart>
                            </ResponsiveContainer>

                        </div>

                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Products</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Product</th>
                                            <th className='text-centre'>Moves</th>
                                            <th className='text-centre'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>49002</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>49002</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                            <td>49002</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Partners</h2>
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
                                <h2>Top Warehouses</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Warehouse</th>
                                            <th className='text-centre'>Moves</th>
                                            <th className='text-centre'>Quantity</th>
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
                                <h2>Top Locations</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Location</th>
                                            <th className='text-centre'>Moves</th>
                                            <th className='text-centre'>Quantity</th>
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

export default EtgInventryFlowDashComp