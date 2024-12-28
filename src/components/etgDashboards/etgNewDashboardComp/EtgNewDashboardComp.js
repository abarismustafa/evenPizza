import React from 'react';
import discus from '../../../assets/NEWI/discuss.png'
import calender from '../../../assets/NEWI/calender.png'
import todo from '../../../assets/NEWI/ToDo.png'
import knowledge from '../../../assets/NEWI/knowledge.png'
import contact from '../../../assets/NEWI/contact.png'
import crm from '../../../assets/NEWI/CRM.png'
import sales from '../../../assets/NEWI/sales.png'
import dashboard from '../../../assets/NEWI/dashboard.png'
import subscription from '../../../assets/NEWI/subcriptions.png'
import rental from '../../../assets/NEWI/rental.png'
import pointofsale from '../../../assets/NEWI/pointOfSale.png'
import accounting from '../../../assets/NEWI/Accounting.png'
import documents from '../../../assets/NEWI/documnets.png'
import project from '../../../assets/NEWI/project.png'
import timesheets from '../../../assets/NEWI/timesheets.png'
import fieldservice from '../../../assets/NEWI/fieldservice.png'
import planning from '../../../assets/NEWI/planning.png'
import helpdesk from '../../../assets/NEWI/helpdesk.png'
import website from '../../../assets/NEWI/website.png'
import emailmarketing from '../../../assets/NEWI/emailmarketing.png'
import events from '../../../assets/NEWI/events.png'
import purchase from '../../../assets/NEWI/purchase.png'
import inventory from '../../../assets/NEWI/inventory.png'
import manufacturing from '../../../assets/NEWI/manufacturing.png'
import sign from '../../../assets/NEWI/sign.png'
import employee from '../../../assets/NEWI/employee.png'
import recuirements from '../../../assets/NEWI/recuirement.png'
import timeoff from '../../../assets/NEWI/timeOff.png'
import expenses from '../../../assets/NEWI/expenses.png'
import apps from '../../../assets/NEWI/apps.png'
import setting from '../../../assets/NEWI/settings.png'

function EtgNewDashboardComp() {
    return (
        <>
            <div className="ContentArea">
                <div className="dashboard-gaot">
                    <div className='set-list-Dashboard'>
                        <h5>Welcome to Dashboard</h5>
                    </div>



                    {/* <div className='container'> */}
                    <div className='row ' style={{ paddingLeft: '100px', paddingRight: '50px' }}>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={discus} alt="discuss" style={{ width: 60, height: 'auto' }} />
                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Discuss</div>
                        </div>

                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={calender} alt="calender" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Calender</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={todo} alt="ToDo" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>To-Do</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={knowledge} alt="knowledge" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-2'>Knowledge</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={contact} alt="contact" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Contacts</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={crm} alt="CRM" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>CRM</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={sales} alt="sales" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Sales</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={dashboard} alt="dashboard" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-2'>Dashboard</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform' >
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={subscription} alt="subcriptions" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-0'>Subscriptions</div>
                        </div>

                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={rental} alt="rental" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Rental</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={pointofsale} alt="pointOfSale" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-1'>Point of Sale</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={accounting} alt="Accounting" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-2'>Accounting</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={documents} alt="documnets" style={{ width: 65, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-1'>Documents</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={project} alt="project" style={{ width: 65, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Project</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={timesheets} alt="timesheets" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-2'>Timesheets</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={fieldservice} alt="fieldservice" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-0'>Field Services</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={planning} alt="planning" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Planning</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform' >
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={helpdesk} alt="helpdesk" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Helpdesk</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={website} alt="website" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Website</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={emailmarketing} alt="emailmarketing" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-0'>Email Marketing</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={events} alt="events" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Events</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={purchase} alt="purchase" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Purchase</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform' >
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={inventory} alt="inventory" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Inventory</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={manufacturing} alt="manufacturing" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-0'>Manufacturing</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform' >
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={sign} alt="sign" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Sign</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={employee} alt="employee" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-2'>Employees</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={recuirements} alt="recuirements" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-1'>Recuirement</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={timeoff} alt="timeOff" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Time Off</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform '>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={expenses} alt="expenses" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Expenses</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={apps} alt="apps" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-4'>Apps</div>
                        </div>
                        <div className='col-sm-2 p-0 m-0 mt-4 transform'>
                            <div style={{ width: 80, height: 80, border: '1px solid gray', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={setting} alt="settings" style={{ width: 60, height: 'auto' }} />

                            </div>
                            <div className='fw-bold  text-secondary ml-3'>Settings</div>
                        </div>

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EtgNewDashboardComp