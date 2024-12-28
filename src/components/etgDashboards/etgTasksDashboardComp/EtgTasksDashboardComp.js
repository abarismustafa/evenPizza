import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { PieChart, Pie, } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function EtgTasksDashboardComp() {
    const data = [
        {
            name: 'New',
            uv: 33,
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
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];
    const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
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
                            <span className="number">Tasks</span>
                            <span className="label">14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Hours Logged</span>
                            <span className="label">670</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Time to Assign</span>
                            <span className="label">20 Days</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />12 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Time to Assign
                            </span>
                            <span className="label">10 Days</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />5 <PiPercentDuotone /> Since Last Period</span>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: 30, marginRight: 60 }} >
                        <div className="col-md-4" style={{ marginTop: 30, marginRight: 60 }}>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Task By Stages</h5>
                            <hr className=' border-primary m-auto pt-2' />

                            <BarChart
                                width={400}
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
                        <div className="col-md-6" style={{ marginTop: 30, marginRight: 60 }}>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Task By State</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <PieChart width={400} height={400}>
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
                                <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                                <Tooltip />
                            </PieChart>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Assignees</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Assignees</th>
                                            <th className='text-centre'>Hours Logged</th>
                                            <th className='text-centre'>Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mitchell Admin</td>
                                            <td>2100</td>
                                            <td>42</td>
                                        </tr>
                                        <tr>
                                            <td>Mitchell Admin</td>
                                            <td>2100</td>
                                            <td>42</td>
                                        </tr>
                                        <tr>
                                            <td>Mitchell Admin</td>
                                            <td>2100</td>
                                            <td>42</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Projects</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Project</th>
                                            <th className='text-centre'>Hour Logged</th>
                                            <th className='text-centre'>Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Tags</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Tags</th>
                                            <th className='text-centre'>Hour Logged</th>
                                            <th className='text-centre'>Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Experiment</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>Experiment</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>Experiment</td>
                                            <td>2123</td>
                                            <td>49</td>
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
                                            <th className='text-centre'>Project</th>
                                            <th className='text-centre'>Hour Logged</th>
                                            <th className='text-centre'>Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Field Services</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>Field Services</td>
                                            <td>2123</td>
                                            <td>49</td>
                                        </tr>
                                        <tr>
                                            <td>Field Services</td>
                                            <td>2123</td>
                                            <td>49</td>
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

export default EtgTasksDashboardComp