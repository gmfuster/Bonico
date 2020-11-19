import React, {Component} from "react";
import {Link} from 'react-router-dom';

//for grown ups - 
class PersonalInterestsSections extends Component {
    render() {
        return(
    
        <React.Fragment>            

            <div className="MainSectionContainer MainSectionContainerPersonalInterests TopMarginToDealWithNavBar" id="PersonalInterestsSection" >
                <div>                    
                    <a href="https://www.instagram.com/feedforpositivity/" target="_new" >
                        <img src="/images/MainItemcardImages/feedforpositivity.png" className="MainSectionItemImagePng" alt="Read backwards"></img>    
                        </a>
                </div>   
                <div>
                    <Link to="/ReadBackwards" className="CardTextLink">
                        <img src="/images/MainItemcardImages/readBackwards.svg" className="MainSectionItemImage" alt="Read backwards"></img>    
                    </Link>
                </div>                     
            </div>      

        </React.Fragment>
        )};


}
export default PersonalInterestsSections;