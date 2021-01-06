import React from "react"
import {Nav, Form, Button,Navbar,FormControl,NavDropdown} from "react-bootstrap"
import { SiAirbnb } from 'react-icons/si';
import { BiWorld} from 'react-icons/bi';
import { IoSearchCircleSharp} from 'react-icons/io5';
// import {  IoPersonCircleSharp} from 'react-icons/io5';

class NavBar extends React.Component{
    render(){
        return(

            <Navbar className="shadow">
            <Navbar.Brand href="#home"><SiAirbnb className="logo"/></Navbar.Brand>
            <Button variant="none" className="searchBar mr-sm-2 "  >
                <p className="d-inline ">Start your search</p>
              
             <p className="d-inline ml-5 "><IoSearchCircleSharp className="searchicon"/></p> 
            </Button >
            <Nav className="ml-auto ">
              <Nav.Link style={{color:"#222323", fontWeight:"bold", marginLeft:"10px"}} href="#home">Become a host</Nav.Link>
              <Nav.Link style={{color:"#222323", fontWeight:"bold",marginLeft:"10px", fontSize:"16px"}}  href="#features"><BiWorld/></Nav.Link>
              
              <NavDropdown  id="collasible-nav-dropdown">
              
                <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Host your home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Host an experience</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            
            
          </Navbar>



        )
    }
    
}
export default NavBar