import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar () {   

     const path = process.env.REACT_APP_FOR_PATH ;

      return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg" >
                <Navbar.Brand href="/">
                    <img
                        alt="Home"
                        src= {path + "/images/jdrawing.svg"}
                        width="50"
                        height="50"
                        className="rounded-circle d-inline-block align-top"
                    />                 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                    
                        <Nav.Link href= {path + "/"} style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)", borderLeft:"solid 2px var(--main-ButtonTextColor-color)"}}>Home</Nav.Link>
                        <Nav.Link href= {path + "/#KidsSection"} style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)"}}>Kindergarten</Nav.Link>                                              
                        <Nav.Link href= {path + "/#PersonalInterestsSection"} style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)"}}>My Interests</Nav.Link>                        
                    </Nav>
                    <Nav>                       
                        <Nav.Link href="https://twitter.com/GMFuster" target="_new">
                            <img alt="Twitter"
                                src= {path + "/images/Twitter_Logo_Blue.svg"}
                                width="50"
                                height="50"
                                className="rounded-circle d-inline-block align-top"
                            /> 
                        </Nav.Link>
                        <Nav.Link href="https://gmfuster.medium.com/" target="_new">
                        <img alt="Twitter"
                                src= {path + "/images/mediumLogo.png"}
                                width="50"
                                height="50"
                                className="rounded-circle d-inline-block align-top"
                            /> 
                        </Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>                
            </Navbar>
      </React.Fragment>);

  }
  
  export default NavBar;