import React from "react"
import {Nav, Form, Button,Navbar,FormControl,NavDropdown,Col} from "react-bootstrap"
import { SiAirbnb } from 'react-icons/si';
import { BiWorld} from 'react-icons/bi';
import { IoSearchCircleSharp} from 'react-icons/io5';
// import {  IoPersonCircleSharp} from 'react-icons/io5';

class NavBar extends React.Component{
    render(){
        return(

          <>

          <div className="header d-flex lex-column align-items-end justify-content-center f">
            <div className="filterpart mb-3">
         
              <Form >
                <Form.Row>

              <Form.Group as={Col} className="border-right mr-2 p-0 p-0 h-100"controlId="location">  
              <Form.Label className="d-block ">Location</Form.Label>
                <FormControl type="text" placeholder="Where are you going?" className="filter border-white p-0 " /></Form.Group>
              <Form.Group as={Col} className="border-right mr-2 p-0 h-100"controlId="checkin"> 
              <Form.Label>Check in</Form.Label>
                <FormControl type="text" placeholder="Add Date" className="filter border-white p-0 " /></Form.Group>
              <Form.Group as={Col} className="border-right mr-2 p-0 h-100"controlId="checkout"> 
              <Form.Label>Check Out</Form.Label>
                <FormControl type="text" placeholder="Add Date" className="filter border-white p-0 " /></Form.Group>
              <Form.Group as={Col} className=" mr-2 p-0 h-100"controlId="guests"> 
              <Form.Label>Guests</Form.Label>
                <FormControl type="text" placeholder="Add guests" className="filter border-white p-0 m-0" />
               </Form.Group>
               
                </Form.Row>
                
              </Form>
              {/* <span className="ml-auto"><IoSearchCircleSharp className="searchicon"/></span> */}
               
            </div>
          </div>

            <Navbar   className="shadow">
            <Navbar.Brand href="#home"><SiAirbnb className="logo"/></Navbar.Brand>
            <Button variant="none" className="searchBar mr-sm-2 "  >
              <div>
                <p className="d-inline ">Start your search</p>
              
              <p className="d-inline ml-auto "><IoSearchCircleSharp className="searchicon"/></p> </div>
                
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

        </>

        )
    }
    
}
export default NavBar