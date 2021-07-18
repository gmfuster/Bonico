import React, {Component} from "react";
import  MainImage from "./Components/MainImage";
import DescriptionSections from "./Components/DescriptionSections";

//import KindergartenMath from "./Components/KindergartenMath";
//import KindergartenLang from "./Components/KindergartenLang";
import GamesAndPDFs from "./Components/GamesAndPDFs";

import FooterInfo from './Components/Footer';

class LandingPage extends Component {
  
  render() {

    return(

    <React.Fragment>               

        <MainImage/>      

        <DescriptionSections/>           
      
        <FooterInfo/>       

    </React.Fragment>)
};
}

export default LandingPage;
