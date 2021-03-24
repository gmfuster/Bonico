import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";

function kindergartenMath () {
               
        window.scroll(0,0);
        
        return(
    
        <React.Fragment>            
            
            <div className="TopMarginToDealWithNavBarAll">
                <h1 className="sectionHeaderBlue" id="KidsSection">Math for Kindergarten</h1><br/>
                <div className="MainSectionContainerActivities">                                                                             
                    {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}
                    <LandingPageCardComponent topic = "/MinorPrintables" imageSrc = "/images/MainItemCardImages/MinorPrintables.svg" borderColorClass= "cardDivAll"
                    text="Games and activity PDFs"/>                                                                                                  

                    <LandingPageCardComponent topic = "/Counting" imageSrc = "/images/MainItemCardImages/Counting.svg" borderColorClass= "cardDivMath"
                    text="Click up or down to form 2 digit numbers"/>   
                    <LandingPageCardComponent topic = "/greaterLessEqual" imageSrc = "/images/MainItemCardImages/GreaterLessEqual.svg" borderColorClass= "cardDivMath"
                    text="Click to shuffle for greater, less or equal and win"/>   
                    <LandingPageCardComponent topic = "/PlusOnePlusZero" imageSrc = "/images/MainItemCardImages/PlusOnePlusZero.svg" borderColorClass= "cardDivMath"
                    text="Solve the additions"/>   
                    <LandingPageCardComponent topic = "/Subtraction" imageSrc = "/images/MainItemCardImages/Subtraction.svg" borderColorClass= "cardDivMath"
                    text="Solve the subtraction.  Use the number line if needed"/>   
                    <LandingPageCardComponent topic = "/NumberBonds" imageSrc = "/images/MainItemCardImages/NumberBonds.svg" borderColorClass= "cardDivMath"
                    text="How many do you need to make N?"/>   
                    <LandingPageCardComponent topic = "/FillSquares" imageSrc = "/images/MainItemCardImages/fillsquares.svg" borderColorClass= "cardDivMath"
                    text="Click for different ways to make 10"/>   
                    <LandingPageCardComponent topic = "/PlusOrMinus" imageSrc = "/images/MainItemCardImages/PlusOrMinus.svg" borderColorClass= "cardDivMath"
                    text="Solve word problems"/>   
                    <LandingPageCardComponent topic = "/Sorting" imageSrc = "/images/MainItemCardImages/Sorting.svg" borderColorClass= "cardDivMath"
                    text="Sort, then check your answer"/>    
                    <LandingPageCardComponent topic = "/ModelingTens" imageSrc = "/images/MainItemCardImages/ModelingTens.svg" borderColorClass= "cardDivMath"
                    text="Modeling Tens and Ones"/>                                                                            
                    <LandingPageCardComponent topic = "/NextNumber" imageSrc = "/images/MainItemCardImages/NextNumber.svg" borderColorClass= "cardDivMath"
                    text="What number comes next? and +10?"/>                                                                            
                </div>
                </div>               
            <br/>
        </React.Fragment>
        )
};


export default kindergartenMath;