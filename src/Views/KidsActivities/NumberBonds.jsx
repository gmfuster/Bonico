import React, {Component} from "react";

class NumberBonds extends Component {

    constructor()
    {
        super();           
        this.state = { total:"?", el1:"?", el2:"?", correction:"", signs:["","","","","","","","","",""], dots:["","","","","","","","","",""]}       
                  
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
        this.setState( { total: this.randomTotal, el1: this.random1, el2:"?", signs:this.signs, dots:this.dots, correction:""});                             
        this.forceUpdate();
    }
    resetClick = () => {
        this.setState( {el2:"?", correction:""});
        this.forceUpdate();
    }

    numberClick = (n) => {
                
        (this.random1 + n == this.randomTotal)? this.setState( { correction:"YAY!", el2: n}): this.setState( { correction: "☹☹☹", el2: n})
        this.forceUpdate();
    }

    render() {
        /*maybe move all styles to vars*/
        var divHorContainer = {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            userSelect:"none",     
            fontSize:"2vw"                   
        }

        var divVertContainer = {
            display:"flex",            
            flexDirection:"column",            
            userSelect:"none",            
            padding:"1vw",
            fontSize:"2vw"
        }

      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
            Click the GO button to get an equation to solve.  Click on the number that solves the equation.  Use the stairs to see where you are and count up 
            to where you want to be (put your finger at the step you already have, and start counting up the number of steps you need.<br/> 
            
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
            
            <div style = {divHorContainer}>

                {/*stairs */}
                <div style = {divVertContainer}>

                    <span style={{backgroundColor:"deeppink", width:"5vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[9]}</span> 9 
                        <span style = {{ color:"yellow"}}>{this.state.dots[9]}</span>                    
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"9vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[8]}</span> 8 
                        <span style = {{ color:"yellow"}}>{this.state.dots[8]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"13vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[7]}</span> 7 
                        <span style = {{ color:"yellow"}}>{this.state.dots[7]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"17vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[6]}</span> 6 
                        <span style = {{ color:"yellow"}}>{this.state.dots[6]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"21vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[5]}</span> 5 
                        <span style = {{ color:"yellow"}}>{this.state.dots[5]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"25vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                    <span style = {{ color:"yellow"}}>{this.state.signs[4]}</span> 4 
                        <span style = {{ color:"yellow"}}>{this.state.dots[4]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"29vw", height:"6vh",borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[3]}</span> 3 
                        <span style = {{ color:"yellow"}}>{this.state.dots[3]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"33vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",}}>
                         <span style = {{ color:"yellow"}}>{this.state.signs[2]}</span> 2 
                        <span style = {{ color:"yellow"}}>{this.state.dots[2]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"37vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[1]}</span> 1 
                        <span style = {{ color:"yellow"}}>{this.state.dots[1]}</span>
                    </span>
                    <span style={{backgroundColor:"deeppink", width:"41vw", height:"6vh",borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>
                        <span style = {{ color:"yellow"}}>{this.state.signs[0]}</span> 0 
                        <span style = {{ color:"yellow"}}>{this.state.dots[0]}</span>
                    </span>
                </div>  

                {/*bond */}
                <div style = {divVertContainer} >
                    <div style = {{border:"3px solid deeppink", width:"11vw", height:"7vh"}}>{this.state.total}</div>
                    <div style = {divHorContainer}>
                        <div style = {{borderRight:"3px solid deeppink", width:"2.5vw", height:"11vh"}}/>
                        <div style = {{width:"2.5vw", height:"11vh"}}/>
                        <div style = {{width:"2.5vw", height:"11vh"}}/>
                        <div style = {{borderLeft:"3px solid deeppink", width:"2.5vw", height:"11vh"}}/>
                    </div>
                    <div  style = {divHorContainer}>
                        <div style = {{border:"3px solid deeppink", width:"5vw", height:"5vw", borderRadius:"50px"}}>{this.state.el1}</div>
                        <div style = {{border:"3px solid deeppink", width:"5vw", height:"5vw", borderRadius:"50px"}}>{this.state.el2}</div>                    
                    </div>
                </div>

                {/*Equation*/}
                <div style = {{paddingTop:"10vh", paddingLeft:"1vw"}}>
                    <div style = {divVertContainer} > 
                        <div style = {divHorContainer}>
                            <label style = {{fontSize:"6vw"}}>{this.state.el1}</label>
                            <span style = {{fontSize:"6vw"}}>+</span>
                            <label style = {{fontSize:"6vw"}}>{this.state.el2}</label>
                            <label style = {{fontSize:"6vw"}}>=</label>
                            <label style = {{fontSize:"6vw"}}>{this.state.total}</label>
                        </div>
                        <label style = {{fontSize:"6vw", border:"2px solid salmon" }}>{this.state.correction}</label>
                    </div>
                </div>
                              
            </div>    

                
            
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default NumberBonds;
