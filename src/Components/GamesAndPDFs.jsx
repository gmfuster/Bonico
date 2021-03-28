import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";


function GamesAndPDFs () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <h1 className="sectionHeaderPink" id="GamesAndPDFs">Games and PDFs with Practice Games</h1><br/>
                <div className="MainSectionContainerActivities">                                                                                                
                    <LandingPageCardComponent topic = "/MinorPrintables" imageSrc = "/images/MainItemCardImages/MinorPrintables.svg" borderColorClass= "cardDivAll"
                    text="Games and activity PDFs"/>  

                    <LandingPageCardComponent topic = "/SpinStarWarsCars" imageSrc = "/images/MainItemCardImages/SpinStarWarsCars.svg" borderColorClass= "cardDivAll"
                    text="Spin, wait, get a star wars car, be the first to find it."/>                                         
                    
                                                                                            
                </div>
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default GamesAndPDFs;