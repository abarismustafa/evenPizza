import React, { useState } from "react";
import WidgetSettingForm from "./WidgetSettingForm";
import WidgetSettingTable from "./WidgetSettingTable";

const WidgetSettingList = () => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  function hendleAddClick() {
    setIsActive(true);
  }
  function handleIsActiveClick() {
    setIsActive(false);
  }
  return (
    <div>
      {!isActive ? (
        <div>
        <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
            <h2 className="fs-4">Widget Setting</h2>
            <button
              type="button"
              className="btn btn-primary"
              onClick={hendleAddClick}
            >
              Add Widget
            </button>
          </div>
          <div className="card m-2">
            <WidgetSettingTable data={data} />
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
            <h2 className="fs-4">Add Widget</h2>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleIsActiveClick}
            >
              Go Back
            </button>
          </div>
          <div className="card m-2">
            <WidgetSettingForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetSettingList;
