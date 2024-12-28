import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { PieChart, Pie, } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function EtgEmployeeHumanResorceDashComp() {
    const data = [
        {
            name: 'October 2022',

            pv: 0,
            amt: 9,
        },
        {
            name: 'November 2022',

            pv: 0,
            amt: 9,
        },
        {
            name: 'December 2022',

            pv: 0,
            amt: 9,
        },
        {
            name: 'January 2023',

            pv: 9,
            amt: 9,
        },
        {
            name: 'February 2023',

            pv: 1,
            amt: 9,
        },
        {
            name: 'March 2023',

            pv: 2,
            amt: 9,
        },
        {
            name: 'April 2023',

            pv: 0,
            amt: 9,
        },
        {
            name: 'May 2023',

            pv: 0,
            amt: 9,
        },
        {
            name: 'June 2023',

            pv: 0,
            amt: 9,
        },
        {
            name: 'July 2023',

            pv: 0,
            amt: 9,
        },
        {
            name: 'August 2023',

            pv: 0,
            amt: 9,
        },
        {
            name: 'September 2023',

            pv: 2,
            amt: 9,
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
                            <span className="number">Employees</span>
                            <span className="label">14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className="col-md-10" style={{ marginTop: 30, marginRight: 60 }}>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Event Status</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <BarChart
                                width={1100}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="10" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />

                            </BarChart>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Departments</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Department</th>
                                            <th className='text-centre'>Hires</th>
                                            <th className='text-centre'>Employees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Research & Devlopment</td>
                                            <td>222</td>
                                            <td>222</td>
                                        </tr>
                                        <tr>
                                            <td>Research & Devlopment</td>
                                            <td>222</td>
                                            <td>222</td>
                                        </tr>
                                        <tr>
                                            <td>Research & Devlopment</td>
                                            <td>222</td>
                                            <td>222</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Paid Job Position</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Job Position</th>
                                            <th className='text-centre'>Contract</th>
                                            <th className='text-centre'>Avg.Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Consultant</td>
                                            <td>49</td>
                                            <td>$4,262.50</td>
                                        </tr>
                                        <tr>
                                            <td>Consultant</td>
                                            <td>49</td>
                                            <td>$4,262.50</td>
                                        </tr>
                                        <tr>
                                            <td>Consultant</td>
                                            <td>49</td>
                                            <td>$4,262.50</td>
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

export default EtgEmployeeHumanResorceDashComp