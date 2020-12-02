import React, {Component} from "react";
import CanvasComponent from "../../Components/CanvasComponent";

class Subtraction extends Component {

    constructor()
    {
        super();           
        this.state = { result:"?", numberOne:"?", numberTwo:"?"}       

        this.result = null;                
        this.numbersToUse = [1,2,3,4,5,6,7,8,9,10];    

        const path = process.env.REACT_APP_FOR_PATH;

        this.imgPath = path + "/images//substractionline.svg";   
        this.refToCanvas = React.createRef();      
    }         
   
    generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);      
    }
    
    getNewNumbers = () => {

        let random1 = this.generateRandomNumber(this.numbersToUse.length);
        let random2 = this.generateRandomNumber(this.numbersToUse.length);
                
        (random1>= random2)? this.setState( { numberOne: random1, numberTwo: random2}) : this.setState( { numberTwo: random1, numberOne: random2});
        this.setState( {result : "?"});

        this.result =  Math.abs(random1 - random2)        
        
        this.refToCanvas.current.setCanvasDefault();
    }
            
    showResult = () => {
        this.setState( {result : this.result});
    }

    render() {
        var EquationStyle = {
            width:"100%",            
            textAlign: "center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",                     
            alignItems:"flex-start",
            fontSize:"15vh",            
        }
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
            Click the button to get new numbers.  Calculate using the canvas and click on ? to check your answer. Draw your own circles and cross them if you prefer that way.<br/>
            
            <button className= "buttonGeneral" onClick={this.getNewNumbers}>Get New Numbers!</button><br/>
                        
            <div style={EquationStyle}>                                                
                                
                <span >{this.state.numberOne}</span>                 
                <span >-</span>                 
                <span >{this.state.numberTwo}</span>                 
                <span >=</span>                                 
                <div style={{  cursor:"pointer" }} onClick={this.showResult}>
                   <span >{this.state.result}</span>                 
                </div>   
            </div>                  
            <CanvasComponent DefaultDisplay={this.imgPath} IsThisAnImage = "true" IsThisText = "false" canvasWidth ="90vw" canvasHeight="40vh" ref={this.refToCanvas}   /> 
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default Subtraction;
