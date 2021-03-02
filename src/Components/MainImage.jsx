import React from "react";

function MainImage () {       
   
      const pathPicSrc = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/boyplaybeach.png";

      var imageStyle = {        
        height: "55vh",
        width:"100%"
      }

     return(
        
        <React.Fragment>            
            <img style = {imageStyle} src = {pathPicSrc} className="TopMarginToDealWithNavBarImg" alt="boy at beach"/>  
        </React.Fragment>
      )
  }

export default MainImage;