import React from "react";

function MainImage () {       
   
      const pathPicSrc = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/boyplaybeach.png";
      const learningPic = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/learning.svg";
      const isPic = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/is.svg";
      const funPic = process.env.REACT_APP_FOR_PATH_FOR_PICS +  "/images/fun.svg";

      var imageStyle = {        
        height: "100%",
        width:"100%",    
        opacity:"100%"    
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
              <img className="mainImageAnimation" style = {{position:"absolute",  width:"45%", height:"45%", top:"20%", left:"0%", opacity:"75%"}} src = {learningPic} alt="LEARNING"/>  
              <img className="mainImageAnimation" style = {{position:"absolute",  width:"45%", height:"45%",top:"45%", left:"25%",opacity:"90%"}} src = {isPic} alt="IS"/>  
              <img className="mainImageAnimation" style = {{position:"absolute",  width:"45%", height:"45%", top:"35%", right:"2%",opacity:"75%"}} src = {funPic} alt="FUN"/>  
            </div>        
        </React.Fragment>
      )
  }

export default MainImage;