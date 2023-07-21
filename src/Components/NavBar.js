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
        paddingLeft:"4px",
        paddingRight:"4px",
        textDecoration: "none",
                    
        fontSize:"2.5vh" ,
        margin:"2px" ,
        display: "flex", 
        justifyContent: "center", 
        alignItems:"center",
        color:"deeppink"
    }
    var reactLinkSt2 = Object.assign({}, reactLinkSt, {color:"navy"}); 

    const reactLinkStDDItem = {
        color:"navy",
        padding:"px",
        textDecoration: "none",        
        fontSize:"2vh"         
    }
    
      return(
          
        <React.Fragment>       
                
            <Navbar  fixed="top" expand="sm" style={{background:"skyblue"}}>
                {/*}
                <Navbar.Brand>
                    <img
                        alt="Home"
                        src= {pathPic + "/images/jandmlaughingblue.svg"}
                        width="50"
                        height="50"
                        className="rounded-circle d-inline-block align-top"
                    />                 
                </Navbar.Brand>   
                {*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">       
                       
                        <ReactLink style={reactLinkSt2} to= {path + "/"}>
                            <img
                            alt="Home"
                            src= {pathPic + "/images/jandmlaughingblue.svg"}
                            width="50"
                            height="50"
                            className="rounded-circle d-inline-block align-top"
                            />    
                        </ReactLink>                                                            

                          

                        <NavDropdown title="GAMES" id="basic-nav-dropdown" > 
                            <ReactLink style={reactLinkSt} to= {path + "/GamesAndPDFs"} >Kids</ReactLink> 
                            <NavDropdown.Divider />                                  
                          
                        </NavDropdown>    

                        <NavDropdown title="MATH" id="basic-nav-dropdown" > 
                            <ReactLink style={reactLinkSt} to= {path + "/kindergartenMath"} >Kinder</ReactLink>  
                            <NavDropdown.Divider />      
                            <ReactLink style={reactLinkSt2} to= {path + "/FirstMath"} >1st</ReactLink>                     
                          
                        </NavDropdown>    

                        <NavDropdown title="LANGUAGE" id="basic-nav-dropdown" > 
                            <ReactLink style={reactLinkSt} to= {path + "/kindergartenLang"} >Kinder</ReactLink>                                                            
                        </NavDropdown>    

                        

                              
                                                                                                                                                     
                    </Nav>

                            
                            
                    <Nav>                         
                        <Nav.Link href="https://www.youtube.com/channel/UCRzxDsd0WvJza0BxaIRiQnA" target="_new">
                            <img alt="YouTube"
                                src= {pathPic + "/images/youtube_social_icon_red.png"}
                                width="35px"
                                height="35px"
                                className="align-top"
                            /> 
                        </Nav.Link>                            
                    </Nav>
                </Navbar.Collapse>                    

            </Navbar>                                       
            
      </React.Fragment>);

  }
  
  export default NavBar;