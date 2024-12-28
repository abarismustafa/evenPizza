// ManageStoreTable.js
import React from "react";

const ManageStoreTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="card m-2">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table">
            <tr>
              <th>SL No.</th>
              <th>Day Name</th>
              <th>Opening Time</th>
              <th>Close Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.dayName}</td>
                  <td>{item.openingTime}</td>
                  <td>{item.closeTime}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => onEdit(index)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStoreTable;
