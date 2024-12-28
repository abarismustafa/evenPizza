import React, { useState } from 'react'
import SeoSettingForm from './SeoSettingForm';
import SeoSettingTable from './SeoSettingTable';

const SeoSettingList = () => {
    const [data,setData] = useState([])
    return (
      <div>
        <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
          <h2 className="fs-4">Seo Setting</h2>
        </div>
        <div className="card m-2">
          <SeoSettingForm />
        </div>
        <div className="card m-2">
          <SeoSettingTable data={data} />
        </div>
      </div>
    );
}

export default SeoSettingList