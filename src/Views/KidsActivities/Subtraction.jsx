import React, {Component} from "react";
import CanvasComponent from "../../Components/CanvasComponent";

class Subtraction extends Component {

    constructor()
    {
        super();           
        this.state = { result:"?", numberOne:"?", numberTwo:"?"}       

        this.result = null;                
        this.numbersToUse = [1,2,3,4,5,6,7,8,9,10];    

        const pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;
        
        this.imgPath = pathPic + "/images//substractionline.svg";   
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
            
            
            
                <button className= "buttonGeneral" onClick={this.getNewNumbers} style={{width:"80%", marginLeft:"10%", marginRight:"10%"}}>Get New Numbers!</button><br/>                        
                <div style={EquationStyle}>                                                
                                    
                    <span >{this.state.numberOne}</span>                 
                    <span >-</span>                 
                    <span >{this.state.numberTwo}</span>                 
                    <span >=</span>                                 
                    <div style={{ position:"relative", cursor:"pointer" }} onClick={this.showResult}>
                        <span >{this.state.result}</span>   
                        <img style = {{ height:"45%", width:"45%", position:"absolute", bottom:"0px", right:"0px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="click to see result"  />                        
                    </div>   
                </div>
                         

            <div style={{position:"relative"}}>
                <img style = {{ height:"35%", width:"35%", position:"absolute", top:"5%", left:"10px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/requirestouch.svg'}  alt="click to see result"  />                                            
                <CanvasComponent DefaultDisplay={this.imgPath} IsThisAnImage = "true" IsThisText = "false" canvasWidth ="90vw" canvasHeight="40vh" ref={this.refToCanvas}   /> 
            </div> 
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default Subtraction;
