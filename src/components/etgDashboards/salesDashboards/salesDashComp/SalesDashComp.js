import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { AiOutlinePercentage } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SalesDashComp() {
    const data = [
        {
            name: 'August 2023',
            uv: 8000,
        },
        {
            name: 'September 2023',
            uv: 9000,
        },

    ];

    return (
        <>
            <div className="ContentArea">
                <div className="dashboard-gaot">
                    <div className='set-list-Dashboard'>
                        <h1>Welcome to Dashboard</h1>
                    </div>

                    <div className="stats">
                        <div className="card-dash flight">
                            <span className="number">Quotation</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight">
                            <span className="number">Orders</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight">
                            <span className="number">Revenue</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight">
                            <span className="number">Average Order</span>
                            <span className="label">00</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} /> 0 <AiOutlinePercentage /> Since Last Period</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30 }} >
                        <div className='col-md-12'>
                            <h4 className='m-0 p-0' style={{ color: '#006666' }}>Monthly Sales</h4>
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
                                <h2>Top Quotations</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Quotations</th>
                                            <th className='text-centre'>Customer</th>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>OdooBot</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>OdooBot</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>OdooBot</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Sales Orders</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Customer</th>
                                            <th className='text-centre'>Salesperson</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>OdooBot</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>OdooBot</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>0023</td>
                                            <td>Deco addict</td>
                                            <td>OdooBot</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Countries</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Country</th>
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
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Products</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Product</th>
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
                                <h2>Top Customers</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Customer</th>
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
                                <h2>Top Categories</h2>
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
                                            <td>All / Salable/service</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>All / Salable/service</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>All / Salable/service</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Sales Teams</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Sales Team</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>website</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>website</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>website</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
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
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Michel Admin</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Michel Admin</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Michel Admin</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Sourses</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Sourse</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Mediums</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Medium</th>
                                            <th className='text-centre'>Order</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>3</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
}

export default SalesDashComp