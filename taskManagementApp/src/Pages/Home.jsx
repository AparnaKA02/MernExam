import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import taskimg1 from '../assets/taskimg1.avif'

const Home = () => {
  return (
    <>
     <Header/>
     <div style={{paddingTop:'100px',paddingBottom:'80px'}} className='mb-5'>
     <Container>
      <Row>
        <Col>
        <div className='mt-5'>
            <p><h1>The Enterprise Work-Management Platform</h1></p>
            <p className='mt-6'><h3>The Foundation for managing tasks, <br />projects and progress scale</h3></p>
            
        </div>
        <div className='mb-3'>
            <button  className='btn  bg-warning  mt-5 px-3 py-3' style={{textDecoration:'none'}}>Try  Let <span id='nav' className='fw-bolder'>Organise</span>  for free</button>
        </div>
        </Col>
        <Col><img src={taskimg1} alt="" /></Col>
      </Row>
    </Container>
     </div>
    </>
  )
}

export default Home
