import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";

function kindergartenLang () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <h1 className="sectionHeaderRed" id="KidsSection">Language for Kindergarten</h1><br/>
                <div className="MainSectionContainerActivities">                                                                             
                    {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}                    
                    <LandingPageCardComponent topic = "/CanvasTrace" imageSrc = "/images/MainItemCardImages/CanvasTrace.svg" borderColorClass= "cardDivLang"
                    text="Enter your own text to trace"/>                                         
                    
                    <LandingPageCardComponent topic = "/bdpq" imageSrc = "/images/MainItemCardImages/pdbq.svg" borderColorClass= "cardDivLang" 
                    text="Get a word and identify its starting letter (b p q d)"/>                                                         
                    <LandingPageCardComponent topic = "/bdpqCircles" imageSrc = "/images/MainItemCardImages/pdbqCircles.svg" borderColorClass= "cardDivLang"
                    text="Choose to find the p-b-d-q and find them"/>   
                    <LandingPageCardComponent topic = "/mnwCircles" imageSrc = "/images/MainItemCardImages/mnwCircles.svg" borderColorClass= "cardDivLang"
                    text="Choose to find the m-n-w and find them"/>   
                    <LandingPageCardComponent topic = "/ThreeLetterWordSounds" imageSrc = "/images/MainItemCardImages/3LetterWordSounds.svg" borderColorClass= "cardDivLang"
                    text="Click square to get a letter in a 3 letter word and read"/>   
                    <LandingPageCardComponent topic = "/Prefixsuffix" imageSrc = "/images/MainItemCardImages/Prefixsuffix.svg" borderColorClass= "cardDivLang"
                    text="See the root and add the prefix or suffix"/>   
                                                                                            
                </div>
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default kindergartenLang;