import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"



const StockTransferEntryAdd = () => {
    const breadCrumbsTitle = {
        title_1: "Home",
        title_2: "Stock Transfer Entry Add"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Trasfer Details</h4>
                                <div>
                                    {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">To</label>
                                        <select className="form-select shadow " name="lead_priority" >
                                            <option selected>Open this To</option>
                                            <option value={''} key={''}>Supplier/Third Party</option>
                                            <option value={''} key={''}>Restaurant</option>
                                            <option value={''} key={''}>Kitchen</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Restaurant</label>
                                        <select className="form-select shadow " name="lead_priority">
                                            <option selected>Open this Restaurant</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Invoice Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Category</label>
                                        <select className="form-select shadow " name="lead_priority">
                                            <option selected>Open this Category</option>
                                            {/* <option value={''} key={''}></option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Challan No</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Challan No"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Payment Type</label>
                                        <select className="form-select shadow " name="lead_priority">
                                            <option selected>Open this Category</option>
                                            <option value={''} key={''}>Paid</option>
                                            <option value={''} key={''}>Unpaid</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Address"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-4 mt-4">
                                    <div className="mt-2 mt-4 d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Update Inventory Stock
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Editable
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Trasfer Details</h4>
                                <div>
                                    {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Qty</th>
                                                <th>Unit</th>
                                                <th>Price</th>
                                                <th>Amount</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <select className="form-select shadow " name="lead_priority" >
                                                        <option selected>Open this Select Menu</option>

                                                    </select>
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Stock Qty: 0
                                                    </label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select className="form-select shadow " name="lead_priority" >
                                                        <option selected>Open this Select Menu</option>

                                                    </select>
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Stock Qty: 0
                                                    </label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select className="form-select shadow " name="lead_priority" >
                                                        <option selected>Open this Select Menu</option>

                                                    </select>
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Stock Qty: 0
                                                    </label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                    // value={filterInitial?.start_date}
                                                    // name="start_date"
                                                    // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-12">
                                    <div className="mt-2" style={{ textAlign: 'center' }}>
                                        <button type="button" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StockTransferEntryAdd