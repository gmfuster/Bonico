import React, {Component} from "react";
import {Link} from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


class KidsSections extends Component {
    render() {
        return(
    
        <React.Fragment>            
            
            <div className="MainSectionContainer MainSectionContainerActivities TopMarginToDealWithNavBar" id="KidsSection">
                {/*}
                <div>
                    <Link to="/LanguageChecklists" className="CardTextLink">
                        <img src="/images/MainItemcardImages/checklists.svg" className="MainSectionItemImage" alt="Check readiness checklists"></img>    
                    </Link>
                </div>
                */}
                <div>
                    <Link to="/MinorPrintables" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/MinorPrintables.svg" className="MainSectionItemImage" alt="Minor Printables"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/CanvasTrace" className="CardTextLink">
                        <img src="/Images/MainItemcardImages/CanvasTrace.svg" className="MainSectionItemImage" alt="trace on canvas"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/bdpq" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/pdbq.svg" className="MainSectionItemImage" alt="P B Q D"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/bdpqCircles" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/pdbqCircles.svg" className="MainSectionItemImage" alt="P B Q D Circles"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/mnwCircles" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/mnwCircles.svg" className="MainSectionItemImage" alt="M N W Circles"></img>   
                    </Link>
                </div>

                <div>
                    <Link to="/greaterLessEqual" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/GreaterLessEqual.svg" className="MainSectionItemImage" alt="Greater Less Equal"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/ThreeLetterWordSounds" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/3LetterWordSounds.svg" className="MainSectionItemImage" alt="3 letter word sounds"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/ThreeLetterRhymes" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/3LetterRhyme.svg" className="MainSectionItemImage" alt="3 letter rhymes"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/BeginEndSounds" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/BeginEndSounds.svg" className="MainSectionItemImage" alt="3 letter rhymes"></img>   
                    </Link>
                </div>
                <div>
                    <Link to="/PlusOnePlusZero" className="CardTextLink">                                                    
                        <img src="/Images/MainItemcardImages/PlusOnePlusZero.svg" className="MainSectionItemImage" alt="Plus One Plus Zero"></img>   
                    </Link>
                </div>
            </div>
                     

        </React.Fragment>
        )};


}
export default KidsSections;