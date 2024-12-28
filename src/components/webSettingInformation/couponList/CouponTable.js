import React from 'react'

const CouponTable = ({data}) => {
  return (
    <div className='card m-2'>
    <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table">
            <tr>
              <th>SL No.</th>
              <th>Coupon code</th>
              <th>Coupon value</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  
                  <td>
                    <button
                      className="btn btn-success me-2"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className='text-center'>
                <td colSpan="6">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CouponTable