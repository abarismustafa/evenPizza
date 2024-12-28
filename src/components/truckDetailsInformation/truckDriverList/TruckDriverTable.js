import React from "react";

const TruckDriverTable = ({ thead, tbody }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="form-check-input" />
            </th>
            {thead.map((item) => (
              <th>
                <div className="d-flex justify-content-between align-items-center">
                  {item.name}
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 d-inline-block"
                  >
                    <i className="fa-solid fa-filter"></i>
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((item) => (
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>{item.Driver}</td>
              <td>{item.Mobile}</td>
              <td>{item.LicNo}</td>
              <td>{item.City}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckDriverTable;
