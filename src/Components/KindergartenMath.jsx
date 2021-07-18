import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function kindergartenMath () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <Container fluid style={{background:"radial-gradient(deepskyblue, white)" }}>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/Counting" imageSrc = "/images/MainItemCardImages/Counting.svg" borderColorClass= "cardDivAll"
                                 text="Click up or down to form 2 digit numbers"/>    
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/PlusOnePlusZero" imageSrc = "/images/MainItemCardImages/PlusOnePlusZero.svg" borderColorClass= "cardDivAll"
                                text="Solve the additions"/>     
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/Subtraction" imageSrc = "/images/MainItemCardImages/Subtraction.svg" borderColorClass= "cardDivAll"
                                text="Solve the subtraction.  Use the number line if needed"/>    
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/NumberBonds" imageSrc = "/images/MainItemCardImages/NumberBonds.svg" borderColorClass= "cardDivAll"
                                text="How many do you need to make N?"/>      
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/PlusOrMinus" imageSrc = "/images/MainItemCardImages/PlusOrMinus.svg" borderColorClass= "cardDivAll"
                                text="Solve word problems"/>   
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/Sorting" imageSrc = "/images/MainItemCardImages/Sorting.svg" borderColorClass= "cardDivAll"
                                text="Sort, then check your answer"/>      
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/ModelingTens" imageSrc = "/images/MainItemCardImages/ModelingTens.svg" borderColorClass= "cardDivAll"
                                text="Modeling Tens and Ones"/>          
                            </Col>
                            <Col sm={6}>
                                <LandingPageCardComponent topic = "/NextNumber" imageSrc = "/images/MainItemCardImages/NextNumber.svg" borderColorClass= "cardDivAll"
                                text="What number comes next? and +10?"/>    
                            </Col>
                        </Row>
                </Container>
                                                                                          
                    {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}                                                                                                                    

                   
                    {/*<LandingPageCardComponent topic = "/greaterLessEqual" imageSrc = "/images/MainItemCardImages/GreaterLessEqual.svg" borderColorClass= "cardDivMath"
                    text="Click to shuffle for greater, less or equal and win"/>  
                    
                    {*/}
                                                                                                            
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default kindergartenMath;