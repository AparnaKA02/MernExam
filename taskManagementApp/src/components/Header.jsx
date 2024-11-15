import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideDashboard}) => {
  return (
    <Navbar  style={{zIndex:1,backgroundColor:'white'}} className="border shadow rounded position-fixed w-100">
        <Container>
       <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand style={{color:'black'}} className='fw-bolder'>
          <i class="fa-solid fa-folder-open"></i>Let <span id='nav' className='text-success'>Organise</span>
            </Navbar.Brand>
       </Link>
       {
        insideDashboard &&
        <div className="ms-auto">
          <button className="btn btn-link">Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
        </div>
       }
        </Container>
      </Navbar>
  
  )
}

export default Header
