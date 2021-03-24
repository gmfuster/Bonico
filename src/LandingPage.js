import React, {Component} from "react";
import  MainImage from "./Components/MainImage";
import DescriptionSections from "./Components/DescriptionSections";

import KindergartenMath from "./Components/KindergartenMath";
import KindergartenLang from "./Components/KindergartenLang";



class LandingPage extends Component {
  
  render() {

    return(

    <React.Fragment>               

        <MainImage/>      

        <DescriptionSections/>
            
        <KindergartenMath/>                                    
        <KindergartenLang/>                                    
      

    </React.Fragment>)
};
}

export default LandingPage;
