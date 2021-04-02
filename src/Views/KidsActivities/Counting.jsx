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

        var buttons = {
            color:"white", 
            width:"20vw",
            fontSize:"5vw",
            height:"13vh",
            textAlign:"center",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            outline:"none",
            border:"white solid 2px"
        }

        var blueButtons = Object.assign({}, buttons, { backgroundColor:"navy"}); 
        var pinkButtons = Object.assign({}, buttons, { backgroundColor:"deeppink"});             
       
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Increase or decrease the number by clicking on the + or - buttons and see what numbers you make.
           <br/><br/>
           
            <div>                   
                <div style = {divHorContainer}>
                    <button style = {blueButtons} onClick={() => this.nextDigit("1", "UP")}>+</button>
                    <button style = {pinkButtons} onClick={() => this.nextDigit("2", "UP")}> +</button> <br/>
                </div>   
                 
                <div style = {divHorContainer}>
                    <span style = {{ border:"white solid 2px", color:"white", backgroundColor:"navy", width:"20vw", height:"20vw", fontSize:"18vw", textAlign:"center"}}>{this.state.digit1 } </span>
                    <span style = {{ border:"white solid 2px", color:"white", backgroundColor:"deeppink", width:"20vw", height:"20vw",fontSize:"18vw", textAlign:"center"}}>{this.state.digit2}</span> <br/>
                </div>                              

                <div style = {divHorContainer}>
                    <button style = {blueButtons} onClick={() => this.nextDigit("1", "DOWN")}>-</button>  
                    <button style = {pinkButtons} onClick={() => this.nextDigit("2", "DOWN")}>-</button> <br/>
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
