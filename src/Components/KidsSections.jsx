import React, {Component} from "react";
import {Link} from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


class KidsSections extends Component {
    render() {

        const path = process.env.REACT_APP_FOR_PATH;

        return(
    
        <React.Fragment>            
            
            <div className="MainSectionContainer MainSectionContainerActivities TopMarginToDealWithNavBar" id="KidsSection">
                {/*}
                <div>
                    <Link to="/LanguageChecklists" className="CardTextLink">
                        <img src="/images/MainItemCardImages/checklists.svg" className="MainSectionItemImage" alt="Check readiness checklists"></img>    
                    </Link>
                </div>
                */}
                <div className="cardDiv">
                    <Link to= {path + "/MinorPrintables"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/MinorPrintables.svg"} className="MainSectionItemImage" alt="Minor Printables"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path + "/CanvasTrace"} className="CardTextLink">
                        <img src= {path + "/images/MainItemCardImages/CanvasTrace.svg"} className="MainSectionItemImage" alt="trace on canvas"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to= {path + "/bdpq"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/pdbq.svg"} className="MainSectionItemImage" alt="P B Q D"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path +  "/bdpqCircles"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/pdbqCircles.svg"} className="MainSectionItemImage" alt="P B Q D Circles"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path +  "/mnwCircles"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/mnwCircles.svg"} className="MainSectionItemImage" alt="M N W Circles"></img>   
                    </Link>
                </div>

                <div className="cardDiv">
                    <Link to={path + "/greaterLessEqual"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/GreaterLessEqual.svg"} className="MainSectionItemImage" alt="Greater Less Equal"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path + "/ThreeLetterWordSounds"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/3LetterWordSounds.svg"} className="MainSectionItemImage" alt="3 letter word sounds"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path + "/ThreeLetterRhymes"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/3LetterRhyme.svg"} className="MainSectionItemImage" alt="3 letter rhymes"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path + "/BeginEndSounds"} className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/BeginEndSounds.svg"} className="MainSectionItemImage" alt="3 letter rhymes"></img>   
                    </Link>
                </div>
                <div className="cardDiv">
                    <Link to={path + "/PlusOnePlusZero" } className="CardTextLink">                                                    
                        <img src= {path + "/images/MainItemCardImages/PlusOnePlusZero.svg"} className="MainSectionItemImage" alt="Plus One Plus Zero"></img>   
                    </Link>
                </div>
            </div>
                     

        </React.Fragment>
        )};


}
export default KidsSections;