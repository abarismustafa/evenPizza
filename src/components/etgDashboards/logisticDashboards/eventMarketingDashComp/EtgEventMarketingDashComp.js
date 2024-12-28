import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { PiPercentDuotone } from "react-icons/pi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function EtgEventMarketingDashComp() {
    const data = [
        {
            name: 'Booked',

            pv: 0.5,
            amt: 0.5,
        },
        {
            name: 'Ended',

            pv: 0.3,
            amt: 0.3,
        },
        {
            name: 'Ended',

            pv: 1.6,
            amt: 1.6,
        },
        {
            name: 'Ended',

            pv: 1.2,
            amt: 1.2,
        },
        {
            name: 'Booked',

            pv: 1.4,
            amt: 1.4,
        },
        {
            name: 'Booked',

            pv: 1.0,
            amt: 1.0,
        },
        {
            name: 'Booked',

            pv: 1.5,
            amt: 1.5,
        },



    ];
    const data1 = [
        {
            name: 'Attended',

            pv: 2.0,
            amt: 5,
        },
        {
            name: 'Confirmed',

            pv: 5,
            amt: 5,
        },
        {
            name: 'Confirmed',

            pv: 5,
            amt: 5,
        },
        {
            name: 'Confirmed',

            pv: 5,
            amt: 5,
        },
        {
            name: 'Attended',

            pv: 2.0,
            amt: 5,
        },
        {
            name: 'Attended',

            pv: 2.0,
            amt: 5,
        },
        {
            name: 'Attended',

            pv: 2.0,
            amt: 5,
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
                            <span className="number">Events</span>
                            <span className="label">$ 14</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Revenue</span>
                            <span className="label">$146.67</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                        <div className="card-dash flight ms-2 me-2">
                            <span className="number">Attendees</span>
                            <span className="label">02</span>
                            <span className="number"><IoMdArrowUp style={{ marginBottom: '4px' }} />1300 <PiPercentDuotone /> since last period</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12" style={{ marginTop: 30, marginRight: 60 }}>
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
                        <div className="col-md-12" style={{ marginTop: 30, marginRight: 60 }}>
                            <h5 className='m-0 p-0' style={{ color: '#006666' }}>Registration Status</h5>
                            <hr className=' border-primary m-auto pt-2' />
                            <BarChart
                                width={1100}
                                height={300}
                                data={data1}
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
                                <h2>Top Venues</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Venue</th>
                                            <th className='text-centre'>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Los Angeles Conventional Center</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>Los Angeles Conventional Center</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>Los Angeles Conventional Center</td>
                                            <td>21</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Templates</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Template</th>
                                            <th className='text-centre'>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Exibition</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Exibition</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Exibition</td>
                                            <td>20</td>
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
                                            <th className='text-centre'>Tag</th>
                                            <th className='text-centre'>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Culture</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Culture</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Culture</td>
                                            <td>20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="bookings">
                                <h2>Top Organizers</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-centre'>Organizer</th>
                                            <th className='text-centre'>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>Abc</td>
                                            <td>21</td>
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

export default EtgEventMarketingDashComp