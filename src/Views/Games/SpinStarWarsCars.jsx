import React, {Component} from "react";
import ShufflePicsAndShowComponent from "./../../Components/ShufflePicsandShow";

class SpinStarWarsCars extends Component {

    constructor()
    {
        super();                                        
        this.starwarscars = React.createRef();    
        //name of pics and path to pics - Full name with full path to pics.          
        let pathForCarsPics = process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images//CarImages/";
        this.elementsForPics = [pathForCarsPics + "darthmaul.svg", pathForCarsPics + "darthvader.svg", pathForCarsPics + "flametrooper.svg", 
        pathForCarsPics + "jettrooper.svg", pathForCarsPics + "lukejedi.svg", pathForCarsPics + "lukepilot.svg", pathForCarsPics + "stormtrooper.svg",
        pathForCarsPics + "bb8.svg", pathForCarsPics + "lukearm.svg", pathForCarsPics + "falconold.svg", pathForCarsPics + "falconnew.svg",
        pathForCarsPics + "kyloren.svg", pathForCarsPics + "captainphasma.svg", pathForCarsPics + "kylotie.svg", pathForCarsPics + "finn.svg",
        pathForCarsPics + "clone.svg"];        
    }     

    getNewResults = () => {        
                                      
        this.starwarscars.current.roll();                
    }    


    render() {

        var picStyles = {                         
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"                  
        }
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">            
            Get a random star wars car drawing.<br/>            
            <br/>
            <div style={picStyles}>                     
                        <ShufflePicsAndShowComponent  ref={this.starwarscars}
                        elementsForPics = {this.elementsForPics} myPicsPath = {this.parthToPics} myWidth="25vw" myHeight = "25vw" repeatItems = "false"
                        />   
                                                                                
            </div>                               
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default SpinStarWarsCars;
