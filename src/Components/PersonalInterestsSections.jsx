import React, {Component} from "react";
import {Link} from 'react-router-dom';

//for grown ups - 
class PersonalInterestsSections extends Component {
    render() {

        const path = process.env.REACT_APP_FOR_PATH;

        return(
    
        <React.Fragment>            

            <div className="MainSectionContainer MainSectionContainerPersonalInterests TopMarginToDealWithNavBar" id="PersonalInterestsSection" >
        
            <div >                                        
                <iframe type="text/html" className="cardDiv" frameBorder="0"                      
                src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>                
            </div>


                <div className="cardDiv">                    
                    <a href="https://www.instagram.com/feedforpositivity/" target="_new" >
                        <img src= {path +"/images/MainItemCardImages/feedforpositivity.png"} className="MainSectionItemImagePng" alt="Read backwards"></img>    
                        </a>
                </div>   
                <div className="cardDiv">
                    <Link to= {path + "/ReadBackwards"} className="CardTextLink">
                        <img src= {path + "/images/MainItemCardImages/readBackwards.svg"} className="MainSectionItemImage" alt="Read backwards"></img>    
                    </Link>
                </div>                     
            </div>      

        </React.Fragment>
        )};


}
export default PersonalInterestsSections;