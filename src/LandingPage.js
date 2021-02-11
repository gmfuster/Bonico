import React, {Component} from "react";
import  MainImage from "./Components/MainImage";
import DescriptionSections from "./Components/DescriptionSections";

import Kindergarten from "./Components/Kindergarten";



class LandingPage extends Component {
  
  render() {
    return(

    <React.Fragment>               

        <MainImage/>      

        <DescriptionSections/>
            
        <Kindergarten/>                                    
      

    </React.Fragment>)
};
}

export default LandingPage;
