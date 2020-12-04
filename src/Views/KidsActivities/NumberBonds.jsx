import React, {Component} from "react";

class NumberBonds extends Component {

    constructor()
    {
        super();           
        this.state = { total:"?", el1:"?", el2:"?", correction:""}       
                  
        this.numbersToUse = [1,2,3,4,5,6,7,8,9];    
        this.random1 = "?";
        this.randomTotal ="?";
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

        this.setState( { total: this.randomTotal, el1: this.random1, el2:"?"});                             
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
        }

        var divVertContainer = {
            display:"flex",            
            flexDirection:"column",            
            userSelect:"none",            
            padding:"1vw"
        }

      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
            Click the GO button to get an equation to solve.  Click on the number that solves the equation.  Use the stairs to see where you are and count up to where you want to be<br/> 
            
            {/*buttons */}
            <div style = {divHorContainer}>
                <button style = {{color:"white", backgroundColor:"deeppink", width:"8vw", fontSize:"2vw" }} onClick={this.goClick}>GO!</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(0)}>0</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(1)}>1</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(2)}>2</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(3)}>3</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(4)}>4</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(5)}>5</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(6)}>6</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(7)}>7</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(8)}>8</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick(9)}>9</button>
                <button style = {{color:"white", backgroundColor:"deeppink", width:"8vw", fontSize:"2vw" }} onClick={this.resetClick}>Undo</button>
            </div>   
            
            <div style = {divHorContainer}>

                {/*stairs */}
                <div style = {divVertContainer}>
                    <div style={{backgroundColor:"deeppink", width:"3vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>9</div>
                    <div style={{backgroundColor:"deeppink", width:"6vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>8</div>
                    <div style={{backgroundColor:"deeppink", width:"9vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>7</div>
                    <div style={{backgroundColor:"deeppink", width:"12vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>6</div>
                    <div style={{backgroundColor:"deeppink", width:"15vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>5</div>
                    <div style={{backgroundColor:"deeppink", width:"18vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>4</div>
                    <div style={{backgroundColor:"deeppink", width:"21vw", height:"6vh",borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>3</div>
                    <div style={{backgroundColor:"deeppink", width:"24vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>2</div>
                    <div style={{backgroundColor:"deeppink", width:"27vw", height:"6vh", borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>1</div>
                    <div style={{backgroundColor:"deeppink", width:"30vw", height:"6vh",borderBottom:"2px solid navy", textAlign:"right", color:"white",fontSize:"2vw"}}>0</div>
                </div>  

                {/*bond */}
                <div style = {divVertContainer} >
                    <div style = {{border:"3px solid deeppink", width:"10vw", height:"6vh",fontSize:"2vw"}}>{this.state.total}</div>
                    <div style = {divHorContainer}>
                        <div style = {{borderRight:"3px solid deeppink", width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                        <div style = {{width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                        <div style = {{width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                        <div style = {{borderLeft:"3px solid deeppink", width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                    </div>
                    <div  style = {divHorContainer}>
                        <div style = {{border:"3px solid deeppink", width:"5vw", height:"5vw", borderRadius:"50px", fontSize:"2vw"}}>{this.state.el1}</div>
                        <div style = {{border:"3px solid deeppink", width:"5vw", height:"5vw", borderRadius:"50px", fontSize:"2vw"}}>{this.state.el2}</div>                    
                    </div>
                </div>

                {/*Equation*/}
                <div style = {{paddingTop:"10vh", paddingLeft:"2vw", fontSize:"5vw"}}>
                    <div style = {divVertContainer} > 
                        <div style = {divHorContainer}>
                            <label style = {{ }}>{this.state.el1}</label>
                            <span>+</span>
                            <label>{this.state.el2}</label>
                            <label>=</label>
                            <label>{this.state.total}</label>
                        </div>
                        <label style = {{fontSize:"4vw", border:"2px solid salmon" }}>{this.state.correction}</label>
                    </div>
                </div>
                              
            </div>    

                
            
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default NumberBonds;
