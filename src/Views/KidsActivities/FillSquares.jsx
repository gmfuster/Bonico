import React, {Component} from "react";

class FillSquares extends Component {

    constructor()
    {
        super();   
        this.state = {number1:null, number2:null,sq1:null,sq2:null,sq3:null,sq4:null,sq5:null,sq6:null,sq7:null,sq8:null,sq9:null,sq10:null, value:0};
        this.sliderMin = 0;
        this.sliderMax =10;       
        this.sliderStep=1; 
    }                     
    onValueChanged = (range) => {

    }

    render() {                  
      return(  
          
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Move the slider forward or backward and see how the squares change and how that affects the equation.
           <div className="sliderContainer">                
                <input type="range" min="0" max="10" className="slider"/>
           </div>
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default FillSquares;
