import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import loginimg from '../assets/loginimg.gif'



const Auth = ({ insideRegister }) => {
 const[inputData,setInputData] = useState({
  username:"",
  email:"",
  password:""
 })
 console.log(inputData);

 const handleRegister = (e)=>{
  e.preventDefault()
  console.log("inside register");
  if(inputData.username && inputData.email && inputData.password){
    alert('make api call')
  } else{
    alert('fill form completely')
  }
  
 }
 


  return (
    <>
      <div id='test' style={{ paddingTop: '30px',width: "100%", height: '100vh',backgroundColor:'' }}className='d-flex  justify-content-center align-items-center'>
        <div  style={{ backgroundColor:'white',width: "50%",  }} className='d-flex flex-column justify-content-center align-items-center rounded '>
          {insideRegister ?
            <h1 className='text-center mb-5 '>Register <i class="fa-solid fa-circle-user"></i></h1>
          :
         <div>
            <h1 className='text-center mb-5 '>Login <i class="fa-solid fa-circle-user"></i></h1>
            
         </div>
          }
          <Container>
            <Row>
              <Col className=''>
                <img width={' 350px'} height={'300px'} className='rounded' src={loginimg} alt="" />

              </Col>
              <Col style={{ lineHeight: '30px', }} className=''>
                <Form>
                  {insideRegister &&
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label >Your Name</Form.Label>
                      <Form.Control value={inputData.username} onChange={e=>setInputData({...inputData,username:e.target.value})} style={{width:'350px'}} type="text" placeholder="Enter your Full name" />
                    </Form.Group>

                  }
                  <Form.Label>Email address</Form.Label>
                  <Form.Control value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})} style={{width:'350px'}} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                
                  </Form.Text>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})} style={{width:'350px'}} type="password" placeholder="Set a Password" />
                    <Form.Text className="text-muted">
                      We'll never share your password with anyone else.
                    </Form.Text>
                  </Form.Group>
                  {
                    insideRegister ?
                   <div className="text-center">
                   <p>Already User? <Link to={'/login'} style={{}}>Login</Link></p>
                   <Button onClick={handleRegister} className='mb-3' variant="primary" type="submit">
                    Create New Account
                  </Button>
                 </div>
                 
                      :
                      <div className="text-center">
                    <p>New User? <Link  to={'/register'} style={{}}>Register</Link></p>
                    <Button className='mb-3' variant="primary" type="submit">
                    Login
                  </Button>
                  </div>
                  }
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    
    </>
  )
}

export default Auth
