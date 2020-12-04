import React, {Component} from "react";

class NumberBonds extends Component {

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
            padding:"2vw"
        }

      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
            Click the GO button and click on the number that solves the equation.  Use the stairs to see where you are and count up to where you want to be<br/> 
            
            <div style = {divHorContainer}>
                <button style = {{color:"white", backgroundColor:"deeppink", width:"8vw", fontSize:"2vw" }} onClick={this.goClick}>GO</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("1")}>1</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("2")}>2</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("3")}>3</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("4")}>4</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("5")}>5</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("6")}>6</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("7")}>7</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("8")}>8</button>
                <button style = {{color:"white", backgroundColor:"navy", width:"8vw", fontSize:"2vw" }} onClick={() => this.numberClick("9")}>9</button>
                <button style = {{color:"white", backgroundColor:"deeppink", width:"8vw", fontSize:"2vw" }} onClick={this.resetClick}>Reset</button>
            </div>   
            
            <div style = {divHorContainer}>
                <div style = {divVertContainer}>
                    <div style={{backgroundColor:"deeppink", width:"3vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>9</div>
                    <div style={{backgroundColor:"deeppink", width:"6vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>8</div>
                    <div style={{backgroundColor:"deeppink", width:"9vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>7</div>
                    <div style={{backgroundColor:"deeppink", width:"12vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>6</div>
                    <div style={{backgroundColor:"deeppink", width:"15vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>5</div>
                    <div style={{backgroundColor:"deeppink", width:"18vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>4</div>
                    <div style={{backgroundColor:"deeppink", width:"21vw", height:"3vh",borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>3</div>
                    <div style={{backgroundColor:"deeppink", width:"24vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>2</div>
                    <div style={{backgroundColor:"deeppink", width:"27vw", height:"3vh", borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>1</div>
                    <div style={{backgroundColor:"deeppink", width:"30vw", height:"3vh",borderBottom:"2px solid navy", textAlign:"right", color:"white"}}>0</div>
                </div>  

                <div style = {divVertContainer} >
                    <div style = {{border:"3px solid deeppink", width:"10vw", height:"6vh",fontSize:"2vw"}}>1</div>
                    <div style = {divHorContainer}>
                        <div style = {{borderRight:"3px solid deeppink", width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                        <div style = {{width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                        <div style = {{width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                        <div style = {{borderLeft:"3px solid deeppink", width:"2.5vw", height:"10vh",fontSize:"2vw"}}/>
                    </div>
                    <div  style = {divHorContainer}>
                        <div style = {{border:"3px solid deeppink", width:"5vw", height:"5vw", borderRadius:"50px", fontSize:"2vw"}}>1</div>
                        <div style = {{border:"3px solid deeppink", width:"5vw", height:"5vw", borderRadius:"50px", fontSize:"2vw"}}>1</div>                    
                    </div>
                </div>

            </div>            
            
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default NumberBonds;
