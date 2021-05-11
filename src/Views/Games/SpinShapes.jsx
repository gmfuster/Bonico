import React from "react";
import ShufflePicsAndShowComponent from "../../Components/ShufflePicsandShow";

function SpinShapes () {    

    let shapes = React.createRef();    

    function getNewResults (){        
                                      
        shapes.current.roll();                
    }     
            
    let pathForShapePics = process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images//ShapeImages/";
    let elementsForPics = [pathForShapePics + "circle.svg", pathForShapePics + "cone.svg", 
    pathForShapePics + "cube.svg", pathForShapePics + "cylinder.svg", pathForShapePics + "diamond.svg", pathForShapePics + "heart.svg",
    pathForShapePics + "hexagon.svg", pathForShapePics + "oval.svg", pathForShapePics + "pyramid.svg", pathForShapePics + "rectangle.svg",
    pathForShapePics + "sphere.svg", pathForShapePics + "square.svg", pathForShapePics + "star.svg", pathForShapePics + "triangle.svg"];        

   

    var picStyles = {                         
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"                  
    }

    return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">            
            Get a random shape and go find it around your home.<br/>            
            <br/>
            <div style={picStyles}>                     
                        <ShufflePicsAndShowComponent  ref={shapes}
                        elementsForPics = {elementsForPics} myPicsPath = {pathForShapePics} myWidth="25vw" myHeight = "25vw" repeatItems = "false"
                        />   
                                                                                
            </div>                               
        </div>
  
      </React.Fragment>)
  };  
  
  export default SpinShapes;
