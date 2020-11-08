import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {   
    render() {
      return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg" >
                {/*<Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/Images/jdrawing.svg"
                        width="50"
                        height="50"
                        className="rounded-circle d-inline-block align-top"
                    />{' '}  
                    TODO            
      </Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                    
                        <Nav.Link href="/" style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)", borderLeft:"solid 2px var(--main-ButtonTextColor-color)"}}>Home</Nav.Link>
                        <Nav.Link href="/#KidsSection" style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)", borderLeft:"solid 2px var(--main-ButtonTextColor-color)"}}>Kids Activities</Nav.Link>                       
                        {/*<Nav.Link href="/#SofwareDevSection" style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)", borderLeft:"solid 2px var(--main-ButtonTextColor-color)"}}>Software Dev. Notes</Nav.Link>  */}
                        <Nav.Link href="/#PersonalInterestsSection" style={{borderRight:"solid 2px var(--main-ButtonTextColor-color)", borderLeft:"solid 2px var(--main-ButtonTextColor-color)"}}>For Grown Ups</Nav.Link>
                        <Nav.Link href="/#BooksSection"><span style={{border:"solid 2px var(--main-ButtonTextColor-color)", padding:"2px", borderRadius:"5px"}}>Books</span></Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>                
            </Navbar>
      </React.Fragment>)

  };
  }
  
  export default NavBar;