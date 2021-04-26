import React from "react";

function MainImage () {       
   
      const pathPicSrc = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/boyplaybeach.png";
      const learningPic = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/learning.svg";
      const isPic = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/is.svg";
      const funPic = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/fun.svg";

      var imageStyle = {        
        height: "100%",
        width:"100%",    
        opacity:"85%"    
      }      

      let divStyle ={
        position:"relative",
        width:"100%",
        height: "55vh",
      }

     return(
        
        <React.Fragment>    
            <div className="imageContainer TopMarginToDealWithNavBarImg" style={divStyle}>
              <img style = {imageStyle} src = {pathPicSrc} alt="boy at beach"/>  
              {/*<div className="bottomImageText">Learning is Fun!</div>*/}
              <img style = {{position:"absolute", width:"45vw", height:"35vh", top:"10%", left:"0%"}} src = {learningPic} alt="LEARNING"/>  
              <img style = {{position:"absolute", width:"35vw", height:"25vh", top:"45%", left:"25%"}} src = {isPic} alt="IS"/>  
              <img style = {{position:"absolute", width:"30vw", height:"20vh", top:"35%", right:"5%"}} src = {funPic} alt="FUN"/>  
            </div>        
        </React.Fragment>
      )
  }

export default MainImage;