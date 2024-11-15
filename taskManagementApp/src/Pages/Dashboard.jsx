import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import taskicon from '../assets/taskicon.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container d-flex justify-content-center align-items-center'>
        <h3 className='container d-flex justify-content-start align-items-center'>
          Hi userName <br />
          Welcome to Let Organise platform,

        </h3>
        <Button onClick={handleShow} style={{ width: '60px', height: '60px' }} className='btn btn-dark'><i style={{ fontSize: '30px' }} class="fa-regular fa-square-plus"></i> </Button>
      </div>

      <div style={{ paddingTop: '60px' }} className='container d-flex justify-content-start align-items-center '>
        <Card style={{ width: '18rem' }}>
          <Card.Img width={'40px'} height={'230px'} variant="top" src={taskicon} />
          <Card.Body>
            <Card.Title>Task 1</Card.Title>

            <div className='container d-flex justify-content-evenly align-items-center '>
              <Button variant="primary"><i class="fa-solid fa-pen-to-square"></i></Button>
              <Button variant="primary"><i class="fa-brands fa-github"></i></Button>
              <Button variant="primary"><i class="fa-solid fa-trash-can"></i></Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-5 d-flex justify-content-center">
        <Button className='btn btn-light mx-2'><i style={{fontSize:'50px'}} class="fa-regular fa-images"></i></Button>
        <p>*Upload only the following file type (jpeg,jpg,png) here!!!</p>
          </div>
          <div className="mb-2">
          <input placeholder='Task Title' type="text" className="form-control" />
        </div>
          <div className="mb-2">
            <input  placeholder='Task Description' type="text" className="form-control pb-5" />
          </div>
          <div className="mb-2">
            <input placeholder='Intial Date' type="text" className="form-control" />
          </div>
          <div className="mb-2">
            <input placeholder='Final Date' type="text" className="form-control" />
          </div>
          <div className="mb-2">
            <input placeholder='Status' type="text" className="form-control" />
          </div>
          <div className="mb-2">
            <input placeholder='Progress Percentage' type="text" className="form-control" />
          </div>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Add Task
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Dashboard
