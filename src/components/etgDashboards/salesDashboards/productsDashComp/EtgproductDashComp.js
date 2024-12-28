import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function EtgproductDashComp() {
    const data = [
        {
            name: 'IT Technical maintain',
            uv: 22500,

        },
        {
            name: 'Senior Architect',
            uv: 16000,

        },
        {
            name: 'Developer',
            uv: 15000,

        },
        {
            name: 'Page D',
            uv: 12080,

        },
        {
            name: 'Page E',
            uv: 10000,

        },
        {
            name: 'Page F',
            uv: 9090,

        },
        {
            name: 'Page G',
            uv: 8090,

        },
        {
            name: 'Page G',
            uv: 7090,

        },
        {
            name: 'Page G',
            uv: 6490,

        },
        {
            name: 'Page G',
            uv: 5490,

        },
        {
            name: 'Page G',
            uv: 4490,

        },
        {
            name: 'Page G',
            uv: 3490,

        },
        {
            name: 'Page G',
            uv: 2490,

        },
        {
            name: 'Page G',
            uv: 1490,

        },
        {
            name: 'Page G',
            uv: 100,

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
                        <div className="card-dash etg p-3">
                            <span className="number">Best Seller</span>
                            <h5>IT Technical Maintenance(Plan Service)</h5>
                            <span className="label">96 Sold</span>
                        </div>
                        <div className="card-dash etg p-3">
                            <span className="number">Best Seller</span>
                            <h5>All / Saleable / Service</h5>
                            <span className="label">96 Sold</span>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Best Seller by Revenue</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <BarChart width={1000} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#8884d8" />

                            </BarChart>
                        </div>
                    </div>

                    <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className='col-md-12 '>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Best Seller by Unit Sold</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <BarChart width={1000} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="" />
                                <YAxis dataKey='uv' />
                                <Tooltip />
                                <Legend />
                            </BarChart>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Best Selling Products</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Product</th>
                                            <th className='text-centre'>Unit</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>IT Technical(Plan Service)	</td>
                                            <td>96</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>IT Technical(Plan Service)	</td>
                                            <td>96</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>IT Technical(Plan Service)	</td>
                                            <td>96</td>
                                            <td>3,664.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Best Selling Categories</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Category</th>
                                            <th className='text-centre'>Unit</th>
                                            <th className='text-centre'>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ALl /saleable/Services</td>
                                            <td>466</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>ALl /saleable/Services</td>
                                            <td>466</td>
                                            <td>3,664.00</td>
                                        </tr>
                                        <tr>
                                            <td>ALl /saleable/Services</td>
                                            <td>466</td>
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

export default EtgproductDashComp