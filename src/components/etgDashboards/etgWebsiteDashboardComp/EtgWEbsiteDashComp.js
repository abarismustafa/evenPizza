import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function EtgWEbsiteDashComp() {
    const data = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
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
                            <span className="number">Carts</span>
                            <span className="label">14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Orders</span>
                            <span className="label">67</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Abandoned Carts</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Total Revenue</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h4 className='m-0 p-0' style={{ color: '#006666' }}>Invoiced</h4>
                            <hr className=' border-primary m-auto pt-2' />

                            <ScatterChart
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                                width={1000}
                                height={300}
                            >
                                <CartesianGrid />
                                <XAxis type="number" dataKey="x" />
                                <YAxis type="number" dataKey="y" />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="A school" data={data} fill="#8884d8" />
                            </ScatterChart>
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
                                            <th className='text-centre'>Units</th>
                                            <th className='text-centre'>Revenue</th>
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
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Categories</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Category</th>
                                            <th className='text-centre'>Units</th>
                                            <th className='text-centre'>Revenue</th>
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
                    </div>



                </div>
            </div >

        </>
    )
}

export default EtgWEbsiteDashComp