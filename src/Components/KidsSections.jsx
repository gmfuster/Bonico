import React from "react";
import {Link} from 'react-router-dom';


function KidsSections () {
    

        const path = process.env.REACT_APP_FOR_PATH;        

        return(
    
        <React.Fragment>            
            
            <div className="MainSectionContainerActivities">

                <h1 className="sectionHeaderPink" id="KidsSection">Kindergarten General PDFs and Trace</h1>
                <div className="MainSectionContainer">                
                    <div className="cardDiv cardDivAll">
                        <Link to= {path + "/MinorPrintables"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/MinorPrintables.svg"} className="MainSectionItemImage" alt="Minor Printables"
                            title="Various printables for language and math activities and games"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv cardDivAll">
                        <Link to={path + "/CanvasTrace"} className="CardTextLink">
                            <img src= {path + "/images/MainItemCardImages/CanvasTrace.svg"} className="MainSectionItemImage" alt="trace on canvas"
                            title="Enter a text and move it to the canvas so you can trace it"></img>   
                        </Link>
                    </div>
                </div>   
            </div>
            <br/>
            <div className="MainSectionContainerActivities">
                <h1 className="sectionHeaderPink" id="KidsSection">Kindergarten Language</h1>
                <div className="MainSectionContainer" >   
                    <div className="cardDiv cardDivLang">
                        <Link to= {path + "/bdpq"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/pdbq.svg"} className="MainSectionItemImage" alt="P B Q D"
                            title="Get a word and select what letter the word starts with"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv cardDivLang">
                        <Link to={path +  "/bdpqCircles"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/pdbqCircles.svg"} className="MainSectionItemImage" alt="P B Q D Circles"
                            title="Get a bunch of similar letters at random, choose which letter you want to find and find all of those letters"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv cardDivLang">
                        <Link to={path +  "/mnwCircles"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/mnwCircles.svg"} className="MainSectionItemImage" alt="M N W Circles"
                            title="Get a bunch of similar letters at random, choose which letter you want to find and find all of those letters"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv cardDivLang">
                        <Link to={path + "/ThreeLetterWordSounds"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/3LetterWordSounds.svg"} className="MainSectionItemImage" alt="3 letter word sounds"
                            title="Click on each of the 3 squares that form a real or made up word and read it"></img>   
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="MainSectionContainerActivities">
                <h1 className="sectionHeaderPink" id="KidsSection">Kindergarten Math</h1>
                <div className="MainSectionContainer" >   
                    <div className="cardDiv">
                        <Link to={path + "/Counting"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/Counting.svg"} className="MainSectionItemImage" alt="Count up to 99"
                            title="2 digit numbers.  Click on the up and down arrows to make the number change and see how numbers are formed."></img>   
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link to={path + "/greaterLessEqual"} className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/GreaterLessEqual.svg"} className="MainSectionItemImage" alt="Greater Less Equal"
                            title="Play this game to practice greater than, less than, or equal."></img>   
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link to={path + "/PlusOnePlusZero" } className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/PlusOnePlusZero.svg"} className="MainSectionItemImage" alt="Plus One Plus Zero"
                            title="Practice your additions"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link to={path + "/Subtraction" } className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/Subtraction.svg"} className="MainSectionItemImage" alt="Subtraction"
                            title="Practice your subtractions using a number line on a canvas"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link to={path + "/NumberBonds" } className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/NumberBonds.svg"} className="MainSectionItemImage" alt="Number Bonds"
                            title="Complete the number bonds."></img>   
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link to={path + "/FillSquares" } className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/fillsquares.svg"} className="MainSectionItemImage" alt="Fill Squares to add"
                            title="Change the square color and see how it affects the addition equation"></img>   
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link to={path + "/PlusOrMinus" } className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/PlusOrMinus.svg"} className="MainSectionItemImage" alt="I this adding or subtracting"
                            title="Get a question and drag and drop numbers to form the equation, then check if you got it right."></img>   
                        </Link>
                    </div>     
                    <div className="cardDiv">
                        <Link to={path + "/Sorting" } className="CardTextLink">                                                    
                            <img src= {path + "/images/MainItemCardImages/Sorting.svg"} className="MainSectionItemImage" alt="sort items"
                            title="Sort from greatest to least or least to greatest"></img>   
                        </Link>
                    </div>                           
                </div>
            </div>                
            <br/>
        </React.Fragment>
        )
};


export default KidsSections;