import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function kindergartenLang () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                    <Container fluid style={{background:"radial-gradient(red, white)" }}>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/CanvasTrace" imageSrc = "/images/MainItemCardImages/CanvasTrace.svg" borderColorClass= "cardDivAll"
                                text="Enter your own text to trace"/>     
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/bdpq" imageSrc = "/images/MainItemCardImages/pdbq.svg" borderColorClass= "cardDivAll" 
                                text="Get a word and identify its starting letter (b p q d)"/>     
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/bdpqCircles" imageSrc = "/images/MainItemCardImages/pdbqCircles.svg" borderColorClass= "cardDivAll"
                                text="Choose to find the p-b-d-q and find them"/>      
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/mnwCircles" imageSrc = "/images/MainItemCardImages/mnwCircles.svg" borderColorClass= "cardDivAll"
                                 text="Choose to find the m-n-w and find them"/>     
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/ThreeLetterWordSounds" imageSrc = "/images/MainItemCardImages/3LetterWordSounds.svg" borderColorClass= "cardDivAll"
                                text="Click square to get a letter in a 3 letter word and read"/>   
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/Prefixsuffix" imageSrc = "/images/MainItemCardImages/Prefixsuffix.svg" borderColorClass= "cardDivAll"
                                 text="See the root and add the prefix or suffix"/>       
                            </Col>
                        </Row>
                    </Container>               
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default kindergartenLang;