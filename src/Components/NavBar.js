import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link as ReactLink} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar () {   

    const path = process.env.REACT_APP_FOR_PATH ;
    const pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;

    const reactLinkSt = {
        color:"white",
        paddingLeft:"6px",
        paddingRight:"6px",
        textDecoration: "none",
            
        borderRight:"solid 2px var(--main-ButtonTextColor-color)",
        fontSize:"25px" ,
        margin:"2px" ,
        display: "flex", 
        justifyContent: "center", 
        alignItems:"center"
    }
    const reactLinkStDDItem = {
        color:"navy",
        padding:"5px",
        textDecoration: "underline",        
        fontSize:"25px"         

    }
    
      return(
          
        <React.Fragment>            
            <Navbar bg="dark" variant="dark" fixed="top" expand="sm" >
                {/*<Navbar.Brand href="/">
                    <img
                        alt="Home"
                        src= {pathPic + "/images/jdrawing.svg"}
                        width="50"
                        height="50"
                        className="rounded-circle d-inline-block align-top"
                    />                 
                </Navbar.Brand>
      */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                    
                        <ReactLink style={reactLinkSt} to= {path + "/"}>Home</ReactLink>
                                                         
                        <NavDropdown title="Kindergarten" id="basic-nav-dropdown" style={reactLinkSt} active>                            
                            {/*<NavDropdown.Item >*/}
                                <ReactLink style={reactLinkStDDItem} to= {path + "/kindergartenMath"} >Math</ReactLink> 
                            {/*</NavDropdown.Item>       
                                          */}                            
                                <br/>
                                <ReactLink style={reactLinkStDDItem} to= {path + "/kindergartenLang"} >Language</ReactLink>                             
                        </NavDropdown>                                    
                        <ReactLink style={reactLinkSt} to= {path + "/GamesAndPDFs"} >Games and PDFs</ReactLink>    
                        <ReactLink style={reactLinkSt} to= {path + "/PersonalInterestsSection"} >About me</ReactLink>                        
                    </Nav>

                    <Nav>                       
                        <Nav.Link href="https://twitter.com/GMFuster" target="_new">
                            <img alt="Twitter"
                                src= {pathPic + "/images/Twitter_Logo_Blue.svg"}
                                width="50"
                                height="50"
                                className="rounded-circle d-inline-block align-top"
                            /> 
                        </Nav.Link>
                        <Nav.Link href="https://gmfuster.medium.com/" target="_new">
                        <img alt="Medium"
                                src= {pathPic + "/images/mediumLogo.png"}
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