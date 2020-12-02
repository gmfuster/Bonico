import React, {Component} from "react";
import CanvasComponent from "../../Components/CanvasComponent";

class Counting extends Component {

    constructor()
    {
        super();           
        this.state = { digit1:"0", digit2:"0"}       

        this.result = null;                         
        this.digit1 = 0; this.digit2 = 0;      
    }             
    //todo see how to pass the parameter to one function without it being called on load
    nextDigit1 = () => {
        (this.digit1 == 9)? this.digit1 = 0 : this.digit1 ++;
        this.setState( { digit1: this.digit1})
    }
    nextDigit2 = () => {
        (this.digit2 == 9)? this.digit2 = 0 : this.digit2 ++;
        this.setState( { digit2: this.digit2})
    }
            
    showResult = () => {
        this.setState( {result : this.result});
    }

    render() {

        var numberStyle = {
            width:"100%",            
            textAlign: "center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",                     
            alignItems:"flex-start",
            fontSize:"20vw",    
            cursor:"pointer"        
        }
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Click on each digit (number) to get the next one.  Pay attention to have both numbers together form the bigger number.  You can set the first number at 2 and Click
           on the second one to see 20, 21, 22 or have a 5 on the second number and click on the first one to see 15, 25, 35 etc.<br/>                       
                        
            <div style={numberStyle}>                                                
                                
                <span onClick={this.nextDigit1} style={{ color:"deeppink"}} >{this.state.digit1 }</span>                                 
                <span onClick={this.nextDigit2}>{this.state.digit2}</span>                                                 
            </div>                  
           
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default Counting;
