import React from "react";
import TruckMasterTab from "./truckMasterTab/TruckMasterTab";
import TruckMasterForm from "./truckMasterTab/TruckMasterForm";

const TruckMasterFormInfomation = ({action, setIsActive }) => {
    function handleAddNewClick(){
      setIsActive(false)
    }
  return (
    <div>
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
        <h2 className="fs-4">{action.icon} {action.name} Truck Master</h2>
        <button
          onClick={handleAddNewClick}
          type="button"
          className="btn btn-primary px-5"
        >
          Go Back
        </button>
      </div>
      <div className="card m-2">
        <TruckMasterForm />
      </div>
      <div className="card m-2">
        <TruckMasterTab />
        <div className="mt-3">
          <button type="button" className="btn btn-primary px-5">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TruckMasterFormInfomation;
