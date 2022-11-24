import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';


function MedicineRecord() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="warning" onClick={handleShow} className="rounded-circle">
          <FaPlusCircle/>Add
        </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Medication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row mb-2'>
                <div className='col-12'>
                    <Form.Control type="text" placeholder="Medicine name" />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <Form.Control type="text" placeholder="Dosage" />
                </div>
                <div className='col-6'>
                    <Form.Control type="text" placeholder="Unit E.g. Mg, Oz, Ml" />
                </div>

            </div>
            <div className='row'>
                <p>Details</p>
                <div className='col-12 mb-2'>
                    <Form.Control type="text" placeholder="Times a Day" />
                </div>

                <div className='col-6'>
                    <Form.Control type="date" placeholder="When to start" />
                </div>
                <div className='col-6'>
                    <Form.Control type="text" placeholder="Period in Days" />
                </div>


            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MedicineRecord