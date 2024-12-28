import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function EtgInventryOnHandDashComp() {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
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
                            <span className="number">Inventory Value</span>
                            <span className="label">$ 14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>

                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Stock Quantity by location</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <PieChart width={600} height={400}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data01}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                                <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />

                                <Tooltip />
                            </PieChart>


                        </div>

                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Locations</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Location</th>
                                            <th className='text-centre'>Reserved</th>
                                            <th className='text-centre'>On Hand</th>
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
                                <h2>Top Products</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Product</th>
                                            <th className='text-centre'>Reserved</th>
                                            <th className='text-centre'>On Hand</th>
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
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Lots / Serial Numbers</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Lot /SN</th>
                                            <th className='text-centre'>Reserved</th>
                                            <th className='text-centre'>On Hand</th>
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

                    </div>

                </div>
            </div >

        </>
    )
}

export default EtgInventryOnHandDashComp