import React, {Component} from "react";

class Counting extends Component {

    constructor()
    {
        super();           
        this.state = { digit1:"0", digit2:"0"}       

        this.result = null;                         
        this.digit1 = 0; this.digit2 = 0;      
    }             
    
    nextDigit = (d, s) => {

        switch(d) {
            case "1":
                if (s === "UP"){
                    (this.digit1 === 9)? this.digit1 = 0 : this.digit1 ++;
                }else{
                    (this.digit1 === 0)? this.digit1 = 9 : this.digit1 --;
                }                
                this.setState( { digit1: this.digit1})
                break;
            case "2":
                if (s === "UP"){
                    (this.digit2 === 9)? this.digit2 = 0 : this.digit2 ++;
                }else{
                    (this.digit2 === 0)? this.digit2 = 9 : this.digit2 --;
                }                  
                this.setState( { digit2: this.digit2})
                break;
            default:
                break;
        }
        
    }   
            
    showResult = () => {
        this.setState( {result : this.result});
    }

    render() {      

       var divHorContainer = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        userSelect:"none"
    }
    
       
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Increase or decrease the number by clicking on the + or - buttons.  Pay attention to how the blue and pink numbers combine to create the  bigger number.
           <br/><br/>
           
            <div>                   
                <div style = {divHorContainer}>
                    <button style = {{color:"white", backgroundColor:"navy", width:"25vw", fontSize:"2vw", height:"8vh" }} onClick={() => this.nextDigit("1", "UP")}>+</button>
                    <button  style = {{color:"white", backgroundColor:"deeppink", width:"25vw",fontSize:"2vw",height:"8vh" }} onClick={() => this.nextDigit("2", "UP")}>+</button> <br/>
                </div>   
                <br/>   
                <div style = {divHorContainer}>
                    <span style = {{ color:"white", backgroundColor:"navy", width:"25vw", height:"25vw", fontSize:"18vw", textAlign:"center"}}>{this.state.digit1 } </span>
                    <span style = {{ color:"white", backgroundColor:"deeppink", width:"25vw", height:"25vw",fontSize:"18vw", textAlign:"center"}}>{this.state.digit2}</span> <br/>
                </div>                              
                <br/>   
                <div style = {divHorContainer}>
                    <button style = {{color:"white", backgroundColor:"navy", width:"25vw",fontSize:"2vw",height:"8vh" }} onClick={() => this.nextDigit("1", "DOWN")}>-</button>  
                    <button  style = {{color:"white", backgroundColor:"deeppink", width:"25vw",fontSize:"2vw",height:"8vh" }} onClick={() => this.nextDigit("2", "DOWN")}>-</button> <br/>
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
