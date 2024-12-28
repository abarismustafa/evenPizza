import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function UnDayPop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Add Unavailability</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <form className="row align-items-end" style={{ marginTop: "10px" }}>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">Unavailable Date:</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">Start Time:</label>
            <input
              type="time"
              className="form-control"
              id="timeInput"
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <label htmlFor="dateInput" className="form-label">End Time:</label>
            <input
              type="time"
              className="form-control"
              id="timeInput"
              placeholder=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
                  <div className='mt-2'>
                      <label for="exampleFormControlInput1" class="form-label">status: </label>
                      <select className='form-control'>
                          <option className='' value="--all--">--All--</option>
                          <option className='' value="India">Active</option>
                          <option className='' value="India">UnActive</option>
                      </select>
                  </div>
              </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
           Add
          </Button>
          <Button variant="danger" onClick={handleClose}>
           Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UnDayPop;