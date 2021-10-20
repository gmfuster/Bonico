import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function FirstMath () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <Container fluid style={{background:"radial-gradient(deepskyblue, white)" }}>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/CompareNumbers" imageSrc = "/images/MainItemCardImages/CompareNumbers.svg" borderColorClass= "cardDivAll"
                                 text="Compare numbers"/>    
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/ModelingTens" imageSrc = "/images/MainItemCardImages/ModelingTens.svg" borderColorClass= "cardDivAll"
                                text="Modeling Tens and Ones"/>          
                            </Col>                           
                        </Row>
                        <Row>                           
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/NextNumber" imageSrc = "/images/MainItemCardImages/NextNumber.svg" borderColorClass= "cardDivAll"
                                text="What number comes next? and +10?"/>    
                            </Col>
                        </Row>                        
                </Container>                                                                                                             
                                                                                                            
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default FirstMath;