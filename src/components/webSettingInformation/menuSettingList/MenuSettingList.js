import React, { useState } from "react";
import MenuSettingTable from "./MenuSettingTable";
import MenuSettingForm from "./MenuSettingForm";

const MenuSettingList = () => {
    const [data,setData] = useState([])
  return (
    <div>
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
        <h2 className="fs-4">Menu Setting</h2>
      </div>
      <div className="card m-2">
        <MenuSettingForm />
      </div>
      <div className="card m-2">
        <MenuSettingTable data={data} />
      </div>
    </div>
  );
};

export default MenuSettingList;
