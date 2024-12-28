import React, { useState } from "react";
import TruckDetailsHeader from "../TruckDetailsHeader";
import TruckDriverTable from "./TruckDriverTable";
import TruckDriverForm from "./TruckDriverForm";

const TruckDriverList = () => {
  // State for controlling the popup visibility and current action
  const [isActive, setIsActive] = useState(false);
  const [selectedAction, setSelectedAction] = useState({});

  // Truck Master Header data (buttons)
  const HeaderIcon = [
    { id: 1, icon: <i className="fa-solid fa-plus"></i>, name: "Add" },
    {
      id: 2,
      icon: <i className="fa-solid fa-pen-to-square"></i>,
      name: "Edit",
      color: "success",
    },
    { id: 3, icon: <i className="fa-solid fa-eye"></i>, name: "View" },
    {
      id: 4,
      icon: <i className="fa-solid fa-trash"></i>,
      name: "Delete",
      color: "danger",
    },
    {
      id: 5,
      icon: <i className="fa-solid fa-rotate-right"></i>,
      name: "Refresh",
    },
  ];

  // Truck Master List data (table headers and rows)
  const thead = [
    { id: 1, name: "Driver" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Lic No" },
    { id: 4, name: "City" },
  ];

  const tbody = [
    {
      id: 1,
      Driver: "ABC DRIVER",
      Mobile: "0987656789",
      LicNo: "1244",
      City: "Delhi",
    },
  ];

  //Add, Edit, view, Delet and Refresh event handleAction functionalty
  const handleActionClick = (actionName) => {
    if (["Add", "Edit", "View"].includes(actionName)) {
      const selectedActions = HeaderIcon.find(
        (action) => action.name === actionName
      );
      setSelectedAction(selectedActions);
      setIsActive(true);
    }
    if ("Delet" === actionName) {
    }
    if ("Refresh" === actionName) {
    }
  };

  function handleAddNewClick() {
    setIsActive(false);
  }

  return (
    <div>
      {!isActive ? (
        <>
          <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
            <h2 className="fs-4">List Of Truck Driver</h2>
            <div></div>
          </div>

          <div className="card m-2">
            <TruckDetailsHeader
              handleClick={handleActionClick}
              HeaderIcon={HeaderIcon}
            />
          </div>

          <div className="card m-2">
            <div className="d-flex justify-content-between align-items-center bg-light my-1 px-2 py-1">
              <p>
                Drag a column header and drop it here to group by that column
              </p>
              <div>
                <button type="button" className="btn btn-outline-primary px-3">
                  <i className="fa-solid fa-file-excel fs-3"></i>
                </button>
                <button type="button" className="btn btn-outline-primary px-3">
                  <i className="fa-solid fa-file-pdf fs-3"></i>
                </button>
              </div>
            </div>
            <TruckDriverTable thead={thead} tbody={tbody} />
          </div>
        </>
      ) : (
        <div className="">
          <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
            <h2 className="fs-4">
              {selectedAction.icon} {selectedAction.name} Truck Master
            </h2>
            <button
              onClick={handleAddNewClick}
              type="button"
              className="btn btn-primary px-5"
            >
              Go Back
            </button>
          </div>
          <TruckDriverForm />
        </div>
      )}
    </div>
  );
};

export default TruckDriverList;
