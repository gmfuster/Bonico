import React, {Component} from "react";
import  MainImage from "./Components/MainImage";
import DescriptionSections from "./Components/DescriptionSections";

import KidsSections from "./Components/KidsSections";
import PersonalInterestsSections from "./Components/PersonalInterestsSections";
import Books from "./Components/Books";



class LandingPage extends Component {
  
  render() {
    return(

    <React.Fragment>               

        <MainImage/>      

        <DescriptionSections/>
            
        <KidsSections/>            

        <Books/>
      
        <PersonalInterestsSections/>       
      

    </React.Fragment>)
};
}

export default LandingPage;
