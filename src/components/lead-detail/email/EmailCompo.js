import { useState } from "react";
import EmailList from "./EmailList";
import CreateConnect from "./CreateConnect";
import CreateEmail from "./CreateEmail";

function EmailCompo() {

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    return <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-12 mb-2 d-flex justify-content-between">

                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Prev
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>

                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setModalShow2(true)}>Send Email</button>
                                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>Connect Account</button>
                                </div>
                            </nav>

                            <CreateConnect
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <CreateEmail
                                show={modalShow2}
                                onHide={() => setModalShow2(false)}
                            />
                        </div>
                        <div className="col-12" style={{ overflowX: "auto" }}>
                            <EmailList />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default EmailCompo;