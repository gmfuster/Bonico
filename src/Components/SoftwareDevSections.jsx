import React, {Component} from "react";
import {Link} from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

class SoftwareDevSections extends Component {
    render() {
        return(
    
        <React.Fragment>            

            <div className="MainSectionContainer MainSectionContainerSoftwareDev TopMarginToDealWithNavBar" id="SofwareDevSection" >
                <div>
                    <Link to="/CSSAnimations" className="CardTextLink">
                        <img src="/images/MainItemcardImages/animations.svg" className="MainSectionItemImage" alt="CSS animations"></img>    
                    </Link>
                </div>
                <div>
                    <Link to="/CSSPositioning" className="CardTextLink">
                        <img src="/images/MainItemcardImages/positioning.svg" className="MainSectionItemImage" alt="CSS positioning"></img>    
                    </Link>
                </div>  
                <div>
                    <Link to="/ReactNotes1" className="CardTextLink">
                        <img src="/images/MainItemcardImages/reactnotes1.svg" className="MainSectionItemImage" alt="React Notes 1"></img>    
                    </Link>
                </div>               
            </div>      

        </React.Fragment>
        )};


}
export default SoftwareDevSections;