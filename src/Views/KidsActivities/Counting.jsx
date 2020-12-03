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
    nextDigit1 = (d, s) => {

        switch(d) {
            case "1":
                if (s == "UP"){
                    (this.digit1 == 9)? this.digit1 = 0 : this.digit1 ++;
                }else{
                    (this.digit1 == 0)? this.digit1 = 9 : this.digit1 --;
                }                
                this.setState( { digit1: this.digit1})
                break;
            case "2":
                if (s == "UP"){
                    (this.digit2 == 9)? this.digit2 = 0 : this.digit2 ++;
                }else{
                    (this.digit2 == 0)? this.digit2 = 9 : this.digit2 --;
                }                  
                this.setState( { digit2: this.digit2})
        }
        
    }   
            
    showResult = () => {
        this.setState( {result : this.result});
    }

    render() {      

       var divHorContainer = {
        display:"flex",
        flexDdirection:"row",
        justifyContent:"center",
        userSelect:"none"
    }
    
       
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Click on each digit (number) to get the next one.  Pay attention to have both numbers together form the bigger number.  You can set the first number at 2 and Click
           on the second one to see 20, 21, 22 or have a 5 on the second number and click on the first one to see 15, 25, 35 etc.<br/>                       
           
            <div>                   
                <div style = {divHorContainer}>
                    <button style = {{backgroundColor:"navy", width:"20vw" }} onClick={() => this.nextDigit("1", "UP")}>+</button>
                    <button  style = {{backgroundColor:"deeppink", width:"20vw" }} onClick={() => this.nextDigit("2", "UP")}>-</button> <br/>
                </div>   
                <br/>   
                <div style = {divHorContainer}>
                    <span style = {{ color:"white", backgroundColor:"navy", width:"20vw", fontSize:"18vw", textAlign:"center"}}>{this.state.digit1 } </span>
                    <span style = {{ color:"white", backgroundColor:"deeppink", width:"20vw", fontSize:"18vw", textAlign:"center"}}>{this.state.digit2}</span> <br/>
                </div>                              
                <br/>   
                <div style = {divHorContainer}>
                    <button style = {{backgroundColor:"navy", width:"20vw" }} onClick={() => this.nextDigit("1", "DOWN")}>+</button>  
                    <button  style = {{backgroundColor:"deeppink", width:"20vw" }} onClick={() => this.nextDigit("2", "DOWN")}>-</button> <br/>
                </div>                 
            </div>
            
            {/*}
            <div style={numberStyle}>      
                <div style={ digitGroupStyle}>
                    <button style={ buttonStylePink}  onClick={() => this.nextDigit("1", "UP")}></button> 
                    <span style ={digitStyle}>{this.state.digit1 } </span><br/>
                    <button onClick={() => this.nextDigit("1", "DOWN")}></button>
                </div>  

                <div style={ digitGroupStyle}>
                    <button  onClick={() => this.nextDigit("2", "UP")}></button>  
                    <span  >{this.state.digit2}</span>     <br/>
                    <button  onClick={() => this.nextDigit("2", "DOWN")} > </button>                                        
                </div>
            </div>                  
      */}
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default Counting;
