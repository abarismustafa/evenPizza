import React, { useState } from 'react'
import SocialSettingForm from './SocialSettingForm';
import SocialSettingTable from './SocialSettingTable';

const SocialSettingList = () => {
    const [data,setData] = useState([])
    return (
      <div>
        <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
          <h2 className="fs-4">Social Setting</h2>
        </div>
        <div className="card m-2">
          <SocialSettingForm />
        </div>
        <div className="card m-2">
          <SocialSettingTable data={data} />
        </div>
      </div>
    );
}

export default SocialSettingList