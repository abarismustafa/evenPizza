import React from 'react'
import CommonSettingForm from './CommonSettingForm'

const CommonSettingList = () => {
  return (
    <div>
        <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
            <h2 className="fs-4">Web Setting</h2>
          </div>
        <CommonSettingForm />
    </div>
  )
}

export default CommonSettingList