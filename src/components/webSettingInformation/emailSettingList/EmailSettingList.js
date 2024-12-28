import React from 'react'
import EmailSettingForm from './EmailSettingForm'

const EmailSettingList = () => {
  return (
    <div>
         <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center m-2">
          <h2 className="fs-4">Email Setting</h2>
        </div>
        <div className='card m-2'>
        <EmailSettingForm />
        </div>
    </div>
  )
}

export default EmailSettingList