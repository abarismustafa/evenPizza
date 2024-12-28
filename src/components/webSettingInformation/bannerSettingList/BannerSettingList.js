import React, { useState } from "react";
import BannerTable from "./BannerTable";
import BannerForm from "./BannerForm";

const BannerSettingList = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData]= useState([])
    function handleAddClick(){
        setIsActive(true)
    }

    function handleActiveClick(){
        setIsActive(false)
    }
  

  return (
    <div >
      {!isActive ? (
        (
          <div>
            <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
              <h2 className="fs-4">Banner Setting</h2>
              <button
                onClick={handleAddClick}
                type="button"
                className="btn btn-primary"
              >
                Add Banner
              </button>
            </div>
            <div className="card m-2">
              <BannerTable data={data}/>
            </div>
          </div>
        )
      ) : (
        <div>
          <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
            <h2 className="fs-4">Add Banner</h2>
            <button
              onClick={handleActiveClick}
              type="button"
              className="btn btn-primary "
            >
              Go Back
            </button>
          </div>
          <div className="card m-2">
            <BannerForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerSettingList;
