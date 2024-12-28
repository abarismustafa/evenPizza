import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import Accordion from 'react-bootstrap/Accordion';

const InventoryDashboard = () => {
    const barData = {
        labels: ["Sunflower Oil", "Cream Milk", "Besan", "Salt"],
        datasets: [
            {
                label: "Stock Level (Days)",
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50"],
                data: [5, 3, 7, 10],
            },
        ],
    };
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header text-center bg-danger text-white">
                    <h4 className="mb-0">Inventory Dashboard</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="">
                                    <h5 className="card-title">Key Statistics</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <h4>Total Sales:</h4>
                                            <p>
                                                ₹33,716
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>Purchase:</h4>
                                            <p>
                                                ₹0
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>Wastage:</h4>
                                            <p>
                                                ₹0
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-COGS">
                                <div className=" text-center">
                                    <h5 className="card-title">COGS</h5>
                                    <p>No consumption data found</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card card-COGS">
                                <div className="text-center">
                                    <h5 className="card-title">Pending Purchases</h5>
                                    <p>12 POs</p>
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card card-COGS">
                                <div className="text-center">
                                    <h5 className="card-title">Pending Po Approvals</h5>
                                    <p>12 POs</p>
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="set-bar-set">
                                    <h5 className="card-title">New Purchase</h5>
                                    <Bar data={barData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="">
                                    <h5 className="card-title">Stock Level</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <h4 style={{ fontSize: '15px' }}>Cream Milk:</h4>
                                            <p>
                                                3 Days
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 style={{ fontSize: '15px' }}>Sunflower Oil:</h4>
                                            <p>
                                                5 Days
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 style={{ fontSize: '15px' }}>Besan:</h4>
                                            <p>
                                                7 Days
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4 style={{ fontSize: '15px' }}>Salt:</h4>
                                            <p>
                                                10 Days
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="set-bar-set">
                                    <h5 className="card-title">Po Raise</h5>
                                    <p>Used Upon Consumption Below are the row Material Which you need</p>

                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>NIDHI</Accordion.Header>
                                            <Accordion.Body>
                                                Salt
                                                Besan
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>PRAYOSHA FOOD PVT LTD</Accordion.Header>
                                            <Accordion.Body>
                                                --
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryDashboard