import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function GamesAndPDFs () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <Container fluid className="TopMarginToDealWithNavBarAll">
                <Row>
                    <Col sm={6}>
                        <LandingPageCardComponent topic = "/SpinStarWarsCars" imageSrc = "/images/MainItemCardImages/SpinStarWarsCars.svg" borderColorClass= "cardDivAll"
                        text="Spin, wait, get a star wars car, be the first to find it."/>  
                    </Col>
                    <Col sm={6}>
                        <LandingPageCardComponent topic = "/SpinShapes" imageSrc = "/images/MainItemCardImages/shapes.svg" borderColorClass= "cardDivAll"
                        text="Spin, wait, get a shape to find, find it."/>  
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <LandingPageCardComponent topic = "/MemoryCards" imageSrc = "/images/MainItemCardImages/MemoryCards.svg" borderColorClass= "cardDivAll"
                        text="Can you remember where the cards are? 1 player or 2."/>  
                    </Col>
                    <Col sm={6}>
                        <LandingPageCardComponent topic = "/AdditionMaze" imageSrc = "/images/MainItemCardImages/AdditionMaze.svg" borderColorClass= "cardDivAll"
                        text="Solve the maze by chosing the right additions"/>  
                    </Col>
                </Row>
            </Container>

            {/*}<div className="container-fluid TopMarginToDealWithNavBarAll">
                <h1 className="sectionHeaderPink" id="GamesAndPDFs">Games!!!</h1><br/>
                <div className="MainSectionContainerActivities">                     

                    <LandingPageCardComponent topic = "/SpinStarWarsCars" imageSrc = "/images/MainItemCardImages/SpinStarWarsCars.svg" borderColorClass= "cardDivAll"
                    text="Spin, wait, get a star wars car, be the first to find it."/>    

                     <LandingPageCardComponent topic = "/SpinShapes" imageSrc = "/images/MainItemCardImages/shapes.svg" borderColorClass= "cardDivAll"
                    text="Spin, wait, get a shape to find, find it."/>  

                    <LandingPageCardComponent topic = "/MemoryCards" imageSrc = "/images/MainItemCardImages/MemoryCards.svg" borderColorClass= "cardDivAll"
                    text="Can you remember where the cards are? 1 player or 2."/>  

                     <LandingPageCardComponent topic = "/AdditionMaze" imageSrc = "/images/MainItemCardImages/AdditionMaze.svg" borderColorClass= "cardDivAll"
                    text="Solve the maze by chosing the right additions"/>  

                     <LandingPageCardComponent topic = "/Freeze" imageSrc = "/images/MainItemCardImages/Freeze.svg" borderColorClass= "cardDivAll"
                    text="Listen and stop when the sound stops, Freeze!"/>                                         
                    
                                                                                            
                </div>
                </div>               
            <br/>
        {*/}
        </React.Fragment>
        )
};


export default GamesAndPDFs;