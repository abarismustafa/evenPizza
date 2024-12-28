import React from 'react'

const CustomerListHeader = () => {
    return (
        <div className='card m-2'>
                <div className='row align-items-center'>
    
                    <div className='col-md-8 col-sm-12 d-flex flex-wrap justify-content-start gap-2'>
                        <button type="button" className="btn btn-primary m-0">Copy</button>
                        <button type="button" className="btn btn-primary m-0">CSV</button>
                        <button type="button" className="btn btn-primary m-0">Excel</button>
                        <button type="button" className="btn btn-primary m-0">Pdf</button>
                        <button type="button" className="btn btn-primary m-0">Print</button>
                    </div>
    
                    <div className="col-md-4 col-sm-12 mt-2 mt-md-0">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="form-control" 
                        />
                    </div>
                </div>
                </div>
      )
}

export default CustomerListHeader