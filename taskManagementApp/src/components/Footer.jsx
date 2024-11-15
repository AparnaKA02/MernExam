import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='container mt-5 w-100'>
      <div className='d-flex justify-content-between'>
        <div style={{ width: '400px' }} className='intro'>
          <h5><i>Let <span className='text-success'>Organise</span></i></h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contribution.</p>
          <p>Code licensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}>login</Link>
          <Link to={'/register'} style={{ textDecoration: 'none', color: 'black' }}>Register</Link>
        </div>  
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'black' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'black' }} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: 'black' }} target='_blank'>React Router</a>
         
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center mt-3"> 
          <h5>Contact Us</h5>
        
          <div className='icons d-flex flex-column justify-content-between mt-3'>
          <a href="" style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
          <a href="" style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
          <a href="" style={{ textDecoration: 'none', color: 'black' ,fontSize:'20px'}} target='_blank'><i className='fa-brands fa-github'></i></a>
          <a href="" style={{ textDecoration: 'none', color: 'black',fontSize:'20px' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'> Copyright &copy; June 2024 Batch,Let <span className='text-success'>Organise</span>. Built with React.</p>
    </div>
  )
}

export default Footer
