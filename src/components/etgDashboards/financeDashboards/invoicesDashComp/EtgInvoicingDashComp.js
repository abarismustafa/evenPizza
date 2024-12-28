import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
function EtgInvoicingDashComp() {
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
                            <span className="number">Invoiced</span>
                            <span className="label">125k</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> $1,760 Unpaid</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Average Invoice</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />0</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">DSO</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> in current year</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Invoiced by Month</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <ScatterChart
                                width={1000}
                                height={300}

                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid />
                                {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" /> */}
                                <YAxis type="number" dataKey="y" />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="A school" data={data} fill="#8884d8" />
                            </ScatterChart>


                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Invoices</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Reference</th>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>Status</th>
                                            <th className='text-centre'>Customer</th>
                                            <th className='text-centre'>Date</th>
                                            <th className='text-centre'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>21/2/23</td>
                                            <td>2000</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>21/2/23</td>
                                            <td>2000</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>Abc</td>
                                            <td>21/2/23</td>
                                            <td>2000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Countries</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Country</th>
                                            <th className='text-centre'>Amount</th>
                                            <th className='text-centre'>Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>India</td>
                                            <td>2100</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>India</td>
                                            <td>2100</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>India</td>
                                            <td>2100</td>
                                            <td>10</td>
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
                                            <th className='text-centre'>Categories</th>
                                            <th className='text-centre'>Amount</th>
                                            <th className='text-centre'>Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Projector</td>
                                            <td>2091</td>
                                            <td>12</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Projector</td>
                                            <td>2091</td>
                                            <td>12</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Projector</td>
                                            <td>2091</td>
                                            <td>12</td>
                                            <td>20</td>
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
                                            <th className='text-centre'>Amount</th>
                                            <th className='text-centre'>Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Projector</td>
                                            <td>2122</td>
                                            <td>230</td>
                                        </tr>
                                        <tr>
                                            <td>Projector</td>
                                            <td>2122</td>
                                            <td>230</td>
                                        </tr>
                                        <tr>
                                            <td>Projector</td>
                                            <td>2122</td>
                                            <td>230</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Salesperson</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>Amount</th>
                                            <th className='text-centre'>Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>258831</td>
                                            <td>23</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>258831</td>
                                            <td>23</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>258831</td>
                                            <td>23</td>
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

export default EtgInvoicingDashComp