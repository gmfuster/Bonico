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
        paddingLeft:"5px",
        paddingRight:"5px",
        textDecoration: "none",
                    
        fontSize:"3vh" ,
        margin:"3px" ,
        display: "flex", 
        justifyContent: "center", 
        alignItems:"center",
        color:"deeppink"
    }
    var reactLinkSt2 = Object.assign({}, reactLinkSt, {color:"navy"}); 

    const reactLinkStDDItem = {
        color:"navy",
        padding:"5px",
        textDecoration: "none",        
        fontSize:"2vh"         
    }
    
      return(
          
        <React.Fragment>       
                
            <Navbar  fixed="top" expand="sm" style={{background:"skyblue"}}>
                <Navbar.Brand href={path + "/"}>
                    <img
                        alt="Home"
                        src= {pathPic + "/images/jandmlaughingblue.svg"}
                        width="50"
                        height="50"
                        className="rounded-circle d-inline-block align-top"
                    />                 
                </Navbar.Brand>   

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">       

                        <ReactLink style={reactLinkSt} to= {path + "/"}>Home</ReactLink>

                        <ReactLink style={reactLinkSt2} to= {path + "/kindergartenMath"} >Math-K</ReactLink>     

                         <ReactLink style={reactLinkSt} to= {path + "/kindergartenLang"} >Lang-K</ReactLink>                                                        
                        {/*<NavDropdown title="Kindergarten" id="basic-nav-dropdown" style={reactLinkSt} active>   
                        <NavDropdown title="Math" id="basic-nav-dropdown" style={reactLinkSt} active>                         
                            {/*<NavDropdown.Item >*/}
                                {/*<ReactLink style={reactLinkStDDItem} to= {path + "/kindergartenMath"} >Kindergarten</ReactLink>{*/}
                            {/*</NavDropdown.Item>       
                                          */}                            
                    {/*}            <br/>
                                                            
                                        </NavDropdown> {*/}
                    
{/*}
                        <NavDropdown title="Language" id="basic-nav-dropdown" style={reactLinkSt} active>                         
                            <ReactLink style={reactLinkStDDItem} to= {path + "/kindergartenLang"} >Kindergarten</ReactLink>                         
                        </NavDropdown>  
                                    {*/}

                        <ReactLink style={reactLinkSt2} to= {path + "/GamesAndPDFs"} >Games</ReactLink>    
                                          
                    </Nav>

                            
                            
                    <Nav>  
                        {/*}                     
                        <Nav.Link href="https://twitter.com/GMFuster" target="_new">
                            <img alt="Twitter"
                                src= {pathPic + "/images/Twitter_Logo_Blue.svg"}
                                width="35px"
                                height="35px"
                                className=" align-top"
                            /> 
                        </Nav.Link>
                                        {*/}
                        <Nav.Link href="https://gmfuster.medium.com/" target="_new">
                        <img alt="Medium"
                                src= {pathPic + "/images/mediumLogo.png"}
                                width="35px"
                                height="35px"
                                className="align-top"
                            /> 
                        </Nav.Link>  
                        <Nav.Link href="https://www.youtube.com/channel/UCRzxDsd0WvJza0BxaIRiQnA" target="_new">
                            <img alt="YouTube"
                                src= {pathPic + "/images/youtube_social_icon_red.png"}
                                width="35px"
                                height="35px"
                                className="align-top"
                            /> 
                        </Nav.Link>          
                        <ReactLink style={reactLinkSt2} to= {path + "/PersonalInterestsSection"} >
                        <img alt="Medium"
                                src= {pathPic + "/images/AboutMe.svg"}
                                width="35px"
                                height="35px"
                                className="align-top"
                            /> </ReactLink>                   
                    </Nav>
                </Navbar.Collapse>                    

            </Navbar>                                       
            
      </React.Fragment>);

  }
  
  export default NavBar;