

const ProfitLossFilter = () => {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter Profit - Loss Report</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Form Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="title"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">To Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="title"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Deduct Tax from Profit/Loss</label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Deduct Tax from Profit/Loss</option>
                                        <option value={1}>Yes</option>
                                        <option value={2}>No</option>
                                    </select>
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Deduct TCS from Profit/Loss</label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Deduct TCS from Profit/Loss</option>
                                        <option value={1}>Yes</option>
                                        <option value={2}>No</option>
                                    </select>
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Consider Cancel/Refund Entry</label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Consider Cancel/Refund Entry</option>
                                        <option value={1}>Yes</option>
                                        <option value={2}>No</option>
                                    </select>
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfitLossFilter