import React from 'react';
import { Link } from 'react-router-dom';
import { Popconfirm, Pagination } from 'antd';

function CardPendingOrderSummery() {
  const data = []; // Example data; replace with actual data
  const totalCount = data.length;

  return (
    <div className="row my-2 mx-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <div className="tbl-caption d-flex justify-content-between align-items-center">
                <h4 className="heading mb-0">Pending Order Summary Report From Date: 13-Dec-2024 To Date: 13-Dec-2024</h4>
              </div>
              <table
                id="empoloyees-tblwrapper"
                className="table dataTable no-footer"
                role="grid"
                aria-describedby="empoloyees-tblwrapper_info"
              >
                <thead>
                  <tr role="row">
                    <th>Order Date</th>
                    <th>Order No</th>
                    <th>Party Name</th>
                    <th>EmpName</th>
                    <th>Product Name</th>
                    <th>Order Qty</th>
                    <th>Billed Qty</th>
                    <th>Pending Qty</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={item._id || index} role="row" className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td>{item.state || ''}</td>
                        <td>{item.customer || ''}</td>
                        <td>{item.product || ''}</td>
                        <td>{item.invoiceNo || ''}</td>
                        <td>{item.packing || ''}</td>
                        <td>{item.returnReason || ''}</td>
                        <td>{item.preferredTransport || ''}</td>
                        <td>{item.selectDepo || ''}</td>
                        <td>
                          <span
                            className="badge text-light border-0"
                            style={{
                              backgroundColor: item?.is_active ? 'blue' : '#bc3922ab',
                              fontSize: item?.is_active ? '1rem' : '0.8rem',
                            }}
                          >
                            {item?.is_active ? 'ACTIVE' : 'INACTIVE'}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex">
                            <Link
                              to={`/newvblock/${item?._id}`}
                              className="btn btn-primary shadow btn-xs sharp me-1"
                            >
                              <i className="fa fa-pencil" />
                            </Link>
                            <Popconfirm
                              title="Delete Block!"
                              description="Are you sure to delete?"
                              onConfirm={() => console.log('Delete confirmed', item?._id)}
                              onCancel={() => console.log('Delete canceled')}
                              okText="Yes"
                              cancelText="No"
                            >
                              <button className="btn btn-danger shadow btn-xs sharp">
                                <i className="fa fa-trash" />
                              </button>
                            </Popconfirm>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        No data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div
                className="dataTables_info"
                id="empoloyees-tblwrapper_info"
                role="status"
                aria-live="polite"
              >
                Total {totalCount} entries
              </div>
              <div
                className="dataTables_paginate paging_simple_numbers"
                id="empoloyees-tblwrapper_paginate"
              >
                <Pagination
                  defaultCurrent={1}
                  total={totalCount}
                  onChange={(page) => console.log(`Page changed to ${page}`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPendingOrderSummery;
