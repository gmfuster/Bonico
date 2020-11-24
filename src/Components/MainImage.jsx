import React, {Component} from "react";

class MainImage extends Component {       
    render() {

      var imageStyle = {
        backgroundPosition: "center",
        backgroundImage: "url(" + process.env.REACT_APP_FOR_PATH + "/images/boyplaybeach.png)",
        backgroundSize: "cover",
        height: "60vh",
        position: "relative"
    }

     return(
        
        <React.Fragment>
            <header style = {imageStyle} className="TopMarginToDealWithNavBarImg"/>  
        </React.Fragment>
      )
    }
}
export default MainImage;