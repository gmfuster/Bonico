import React from "react";
import LandingPageCardComponent , {LandingPageCardComponentForHref} from "./LandingPageCardComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function PersonalInterestsSections () {
            
        window.scrollTo(0,0);
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <div className="CenterMyBorder" style={{border:"0px"}}>
                    I am a software dev though not working at the moment.  Want to get back to work at some point because I really enjoy it.  
                    Meanwhile I'm doing a few things here and there, some of them not programming related.
                </div>
                <Container fluid style={{background:"radial-gradient(deeppink, white)" }}>
                    <Row>
                        <Col sm={6}>
                            <LandingPageCardComponentForHref href = "https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" 
                                fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"} borderColorClass= "cardDivAll"                  
                            text="I wrote about an Adoption story - bilingual (Amazon)"/>  
                        </Col>
                        <Col sm={6}>
                            <LandingPageCardComponentForHref href = "https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" 
                            fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"}borderColorClass= "cardDivAll"                  
                            text="I wrote about a Kid and mom's talks (Amazon)"/>  
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <LandingPageCardComponentForHref href = "https://www.freecodecamp.org/espanol/news/author/gemma/" fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/pencils.jpg"} 
                            borderColorClass= "cardDivAll"                  
                                text="Translations of articles for freeCodeCamp"/>  
                        </Col>
                        <Col sm={6}>
                            <LandingPageCardComponentForHref href = "https://gmfuster.medium.com/" fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/mediumLogo.png"} 
                            borderColorClass= "cardDivAll"                  
                                text="Some Medium articles"/>  
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <LandingPageCardComponent topic = "/ReadBackwards" imageSrc = "/images/MainItemCardImages/readBackwards.svg" borderColorClass= "cardDivAll"                  
                            text="Reading backwards is good exercise."/>   
                        </Col>
                        <Col sm={6}>
                        
                        </Col>
                    </Row>
                </Container>                                
                
            </div>

        </React.Fragment>
    );
}
export default PersonalInterestsSections;