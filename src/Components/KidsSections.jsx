import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";

function KidsSections () {
               

        return(
    
        <React.Fragment>            
            
            <h1 className="sectionHeaderPink" id="KidsSection">Activities and Games for Kindergarten:</h1><br/>
            <div className="MainSectionContainerActivities">                                                                             
                 {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}
                <LandingPageCardComponent topic = "/MinorPrintables" imageSrc = "/images/MainItemCardImages/MinorPrintables.svg" borderColorClass= "cardDivAll"
                text="Games and activity PDFs"/>  
                <LandingPageCardComponent topic = "/CanvasTrace" imageSrc = "/images/MainItemCardImages/CanvasTrace.svg" borderColorClass= "cardDivAll"
                text="Enter your own text to trace"/>                                         
                
                <LandingPageCardComponent topic = "/bdpq" imageSrc = "/images/MainItemCardImages/pdbq.svg" borderColorClass= "cardDivLang" 
                text="Get a word and identify its starting letter (b p q d)"/>                                                         
                <LandingPageCardComponent topic = "/bdpqCircles" imageSrc = "/images/MainItemCardImages/pdbqCircles.svg" borderColorClass= "cardDivLang"
                text="Choose to find the p-b-d-q and find them"/>   
                <LandingPageCardComponent topic = "/mnwCircles" imageSrc = "/images/MainItemCardImages/mnwCircles.svg" borderColorClass= "cardDivLang"
                text="Choose to find the m-n-w and find them"/>   
                <LandingPageCardComponent topic = "/ThreeLetterWordSounds" imageSrc = "/images/MainItemCardImages/3LetterWordSounds.svg" borderColorClass= "cardDivLang"
                text="Click square to get a letter in a 3 letter word and read"/>   

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
            </div>                
            <br/>
        </React.Fragment>
        )
};


export default KidsSections;