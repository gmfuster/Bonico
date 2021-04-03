import React, {Component} from "react";

class NumberBonds extends Component {

    constructor()
    {
        super();           
        this.state = { total:"?", el1:"?", el2:"?", correction:"☻", signs:["","","","","","","","","",""], dots:["","","","","","","","","",""], items1:"", items2:""}       
                  
        this.numbersToUse = [1,2,3,4,5,6,7,8,9];    
        this.random1 = "?";
        this.randomTotal ="?";
        this.signs=["","","","","","","","","",""];
        this.dots=["","","","","","","","","",""];
    }         
   
    generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);      
    }
    
    goClick = () => {

        this.random1 = this.generateRandomNumber(this.numbersToUse.length);
        this.randomTotal = this.generateRandomNumber(this.numbersToUse.length);        

        if (this.random1 > this.randomTotal){            
            [this.random1, this.randomTotal] = [this.randomTotal, this.random1];
        }               

        this.signs=["","","","","","","","","",""]  ;
        this.dots=["","","","","","","","","",""]  ;
        this.signs[this.random1] = ">>>";
        this.signs[this.randomTotal] = ">>>";        
        this.dots[this.random1] = "☻";        

        let items1 = ""; let items2="";
        for (let i = 1; i <= this.random1; i++)
        {
            items1 += " o ";
        }
        for (let i = 1; i <= (this.randomTotal - this.random1); i++)
        {
            items2 += " o ";
        }

        this.setState( { total: this.randomTotal, el1: this.random1, el2:"?", signs:this.signs, dots:this.dots, correction:"☻", items1:items1, items2:items2});                             
        this.forceUpdate();
    }
    resetClick = () => {
        this.setState( {el2:"?", correction:"☻"});
        this.forceUpdate();
    }

    numberClick = (n) => {
                
        (this.random1 + n === this.randomTotal)? this.setState( { correction:"👍", el2: n}): this.setState( { correction: "👎", el2: n})
        this.forceUpdate();
    }

    render() {
        /*maybe move all styles to vars*/
        var divHorContainer = {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            userSelect:"none",     
            fontSize:"2vw"    ,           
            marginLeft:"10%",
            marginRight:"10%",
        }

        var divHorEq =  Object.assign({}, divHorContainer, {height:"65vh" });   

        var divVertContainer = {
            display:"flex",            
            flexDirection:"column",            
            userSelect:"none",                                    
        }

        var square =   Object.assign({}, divVertContainer, {width:"25%", height:"95%",border:"salmon solid 5px", fontSize:"6vw"});       

      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
            GO to start. Click on the number that completes the bond.  <br/> 
            
            {/*buttons */}
            <div style = {divHorContainer}>
                <button style = {{color:"white", backgroundColor:"deeppink", width:"8vw" }} onClick={this.goClick}>GO!</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(0)}>0</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(1)}>1</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(2)}>2</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(3)}>3</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(4)}>4</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(5)}>5</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(6)}>6</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(7)}>7</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw" }} onClick={() => this.numberClick(8)}>8</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"6vw"}} onClick={() => this.numberClick(9)}>9</button>
                <button style = {{color:"white", backgroundColor:"deeppink", width:"8vw" }} onClick={this.resetClick}>Undo</button>
            </div>   
                                                    
            
            <br/>

            {/*Equation*/}
            <div >                             
                <div style = {divHorEq}>

                    <div style={square}>
                        <label>{this.state.el1}</label>                        
                        <span style = {{margin:"5%", fontSize:"5vw", color:"darkblue", borderTop:"2px solid lightblue"}}>{this.state.items1} </span>
                    </div>                    
                    
                    <span style = {{fontSize:"6vw"}}>+</span>
                    
                    <div style={square}>
                        <label >{this.state.el2}</label>                        
                        <span style = {{margin:"5%", fontSize:"5vw", color:"deeppink", borderTop:"2px solid lightblue"}}>{this.state.items2} </span>
                    </div>                    
                        
                    <label style = {{fontSize:"6vw"}}>=</label>
                    
                    <div style={square}>
                        <label >{this.state.total}</label>
                    </div>

                    <label style = {{fontSize:"10vw", width:"100px",marginLeft:"5px", color:"salmon" }}>{this.state.correction}</label>
                </div>                                                    
            </div>                                 

            
                                            

                
            
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default NumberBonds;
