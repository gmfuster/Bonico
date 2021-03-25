import React from "react";

function MainImage () {       
   
      const pathPicSrc = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/boyplaybeach.png";

      var imageStyle = {        
        height: "55vh",
        width:"100%"
      }      

     return(
        
        <React.Fragment>    
            <div className="imageContainer TopMarginToDealWithNavBarImg">
              <img style = {imageStyle} src = {pathPicSrc} alt="boy at beach"/>  
              <div className="bottomImageText">Learning is Fun!</div>
            </div>        
        </React.Fragment>
      )
  }

export default MainImage;