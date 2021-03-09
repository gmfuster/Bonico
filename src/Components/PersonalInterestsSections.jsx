import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";

function PersonalInterestsSections () {
            
        window.scrollTo(0,0);
        return(
    
        <React.Fragment>            

            <div className="TopMarginToDealWithNavBarAll">
                <div className="CenterMyBorder">
                I am a software developer unable to work now (priorities) <br/>                
                I have been doing these as time allows though:<br/>
                    <ul>
                        <li>Working on this page while learning React (I know I have to refactor a bit to have more reusable components, working on it)</li>
                        <li>Writing children's books.  I'm no artist but I like it. </li>
                        <li>Writing some of my notes on <a href="https://gnmfuster.medium.com/" target="_new">https://gnmfuster.medium.com/</a> and publishing some 
                        of them on <a href="https://medium.com/nerd-for-tech" target="_new">https://medium.com/nerd-for-tech</a></li>
                        <li>helping translate <a href="https://www.freecodecamp.org/" target="_new">https://www.freecodecamp.org/</a> to Spanish using Crowdin, Trello, and Ghost (and doing some of their lessons)</li>
                    </ul>
                    Check out some of my interests (and books) below.
                </div>
                <br/>
                <div className="MainSectionContainerActivities MainSectionContainerPersonalInterests">  
                    {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}
                    <LandingPageCardComponent topic = "/ReadBackwards" imageSrc = "/images/MainItemCardImages/readBackwards.svg" borderColorClass= "cardDivNavy"                  
                    text="Reading backwards is good exercise."/>  
                    <LandingPageCardComponent topic = "/Chinese" imageSrc = "/images/MainItemCardImages/Chinese.svg" borderColorClass= "cardDivNavy"
                    text="Some Chinese symbols"/>                
                </div>

                <br/>                
                <div className="MainSectionContainerPersonalInterests">                            
                    <div className="MainSectionContainer  TopMarginToDealWithNavBar" id="" >        
                        <div >                                        
                            <iframe type="text/html" className="cardDiv" frameBorder="0"   title="jonandhismomtalkabout"                    
                            src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>                
                        </div>
                                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default PersonalInterestsSections;