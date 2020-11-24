import React, {Component} from "react";
import {Link} from 'react-router-dom';

//for grown ups - 
class PersonalInterestsSections extends Component {
    render() {

        const path = process.env.REACT_APP_FOR_PATH;

        return(
    
        <React.Fragment>            

            <div className="MainSectionContainer MainSectionContainerPersonalInterests TopMarginToDealWithNavBar" id="PersonalInterestsSection" >
                <div className="cardDiv">                    
                    <a href="https://www.instagram.com/feedforpositivity/" target="_new" >
                        <img src= {path +"/images/MainItemcardImages/feedforpositivity.png"} className="MainSectionItemImagePng" alt="Read backwards"></img>    
                        </a>
                </div>   
                <div className="cardDiv">
                    <Link to= {path + "/ReadBackwards"} className="CardTextLink">
                        <img src= {path + "/images/MainItemcardImages/readBackwards.svg"} className="MainSectionItemImage" alt="Read backwards"></img>    
                    </Link>
                </div>                     
            </div>      

        </React.Fragment>
        )};


}
export default PersonalInterestsSections;