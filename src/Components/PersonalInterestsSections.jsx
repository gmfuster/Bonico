import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";

function PersonalInterestsSections () {
            

        return(
    
        <React.Fragment>            

            <h1 className="sectionHeaderPink" id="KidsSection">Things I Like:</h1><br/>
            <div className="MainSectionContainerActivities MainSectionContainerPersonalInterests">  
                 {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}
                 <LandingPageCardComponent topic = "/ReadBackwards" imageSrc = "/images/MainItemCardImages/readBackwards.svg" borderColorClass= "cardDivNavy"                  
                text="Reading backwards is good exercise."/>  
                <LandingPageCardComponent topic = "/Chinese" imageSrc = "/images/MainItemCardImages/Chinese.svg" borderColorClass= "cardDivNavy"
                text="Some Chinese symbols"/>                
            </div>

            <h2 id="PersonalInterestsSection" style={{textAlign: "center"}}>Just found out I like writing books too</h2>
            <div className="MainSectionContainerPersonalInterests">                            
                <div className="MainSectionContainer  TopMarginToDealWithNavBar" id="" >        
                    <div >                                        
                        <iframe type="text/html" className="cardDiv" frameBorder="0"   title="jonandhismomtalkabout"                    
                        src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>                
                    </div>
                
                {/* TODO move this to another icon on the nav bar}
                    <div className="cardDiv">                    
                        <a href="https://www.instagram.com/feedforpositivity/" target="_new" >
                            <img src= {path +"/images/MainItemCardImages/feedforpositivity.png"} className="MainSectionItemImagePng" alt="feed for positivity"></img>    
                        </a>
                    </div>                                                         
        */}
                 </div>
            </div>
            
        </React.Fragment>
    );
}
export default PersonalInterestsSections;