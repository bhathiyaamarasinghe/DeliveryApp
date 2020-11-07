import './Navbar.css';
import React from 'react';
import { Nav , Navbar, Card} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  console.log(props);
  return (
    
      <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"><h4 className="nav2">Use Me</h4></Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
            
                 <Nav.Link  href="/About"><h6 className="nav1">About</h6></Nav.Link>
                 <Nav.Link  href="/Products"><h6 className="nav1">Products</h6></Nav.Link>
                  <Nav.Link  href="/LogIn"><h6 className="nav1">LogIn</h6></Nav.Link>
                  <Nav.Link  href="/Reg"><h6 className="nav1">SignUp</h6></Nav.Link>
                  
              </Nav>
          </Navbar.Collapse>
      </Navbar>
      
  )
}
  
export default  withRouter(Navigation);