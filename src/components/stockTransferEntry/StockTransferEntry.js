import { message, Pagination } from "antd"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";

const StockTransferEntry = () => {
    const breadCrumbsTitle = {
        title_1: "Home",
        title_2: "Stock Transfer Entry"
    }
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await getTRCRM_tr_traveller(clone)
            // setTotalCount(res?.totalCount)
            // setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            // await deleteTRCRM_tr_traveller(id)
            // // let backList = totalCount % 11 === 0 ? page - 1 : page
            // getTransitionReport(0)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)

    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Stock Transfer Entry Filter</h4>
                                <div>
                                    {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={filterInitial?.start_date}
                                            name="start_date"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">End Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={filterInitial?.end_date}
                                            name="start_date"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">To</label>
                                        <select className="form-select shadow " name="lead_priority" value={filterInitial?.lead_priority} onChange={handleChange}>
                                            <option selected>Open this To</option>
                                            {/* {leadPriority && leadPriority?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Payment</label>
                                        <select className="form-select shadow " name="lead_priority" value={filterInitial?.lead_priority} onChange={handleChange}>
                                            <option selected>Open this Payment</option>
                                            {/* {leadPriority && leadPriority?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Status</label>
                                        <select className="form-select shadow " name="lead_priority" value={filterInitial?.lead_priority} onChange={handleChange}>
                                            <option selected>Open this Status</option>
                                            {/* {leadPriority && leadPriority?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Status</label>
                                        <select className="form-select shadow " name="lead_priority" value={filterInitial?.lead_priority} onChange={handleChange}>
                                            <option selected>Open this Status</option>
                                            {/* {leadPriority && leadPriority?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Type</label>
                                        <select className="form-select shadow " name="lead_priority" value={filterInitial?.lead_priority} onChange={handleChange}>
                                            <option selected>Open this Type</option>
                                            {/* {leadPriority && leadPriority?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })} */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Stock Transfer Entry  List</b></h4>
                                        <div>
                                            <Link to={'/add-stock-transfer-entry'} className="btn btn-primary">Add Stock Transfer Entry</Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th> To	</th>
                                                    <th>Invoice Date</th>
                                                    <th>Challan Number</th>
                                                    <th>Total Rs.</th>
                                                    <th >Payment</th>
                                                    <th >Created By</th>
                                                    <th >Status	</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" className="odd" key={i} style={{ cursor: "pointer" }}>
                                                        <td>--</td>
                                                        <td>{item?.source_name}</td>
                                                        <td>{item?.destination_name}</td>
                                                        <td>{item?.departure_time}</td>

                                                        <td>{item?.ticket_no}</td>
                                                        <td>--</td>
                                                        <td>-</td>
                                                        <td>{item?.totalAmount}</td>
                                                        <td><span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.status === "2" ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === "2" ? '0.8rem' : ''}` }}>{item?.status == "2" ? 'Success' : 'Pending'}</span></td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>{item?.source_name}</td>
                                                        <td>--</td>
                                                        <td>{item?.createdAt}</td>
                                                        <td>--</td>

                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                /* showSizeChanger
                                                onShowSizeChange={''} */

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                            // total={aepsData?.totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}

export default StockTransferEntry