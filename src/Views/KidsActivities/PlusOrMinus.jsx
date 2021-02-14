import React, {Component} from "react";

class PLusOrMinus extends Component {

    constructor()
    {
        super();          
        this.arrayOfQuestionObjects = this.setUpArrayOfQuestions();
        this.state = {text:"You question will be here", equation:"Click to see equation",
                        drop1:"?", drop2:"?", dropSign:"?", dropSol:"?", message:"You Got This!"};
        this.arrayInd = 0;
        this.equation="Click to see equation";//todo change this so if clicking when no question shows message.
    }      

    setUpArrayOfQuestions = () => {

        let theArray = [];  

       //questions so there is no need for duplicate numbers on the drag and drop section
       let obj = {
            text:"Maria has 5 apples and eats 2. How many does she have left?",
            equation:"5-2=3"
        };
        theArray.push(obj);
        obj = {
            text:"John has 5 cars and his friend gives him 1 for his birthday. How many does he have now in all?",
            equation:"5+1=6"
        };
        theArray.push(obj);
        obj = {            
            text:"The horse ate 6 apples and later he ate 2 more apples. How many did he eat in all?",
            equation:"6+2=8"
        };
        theArray.push(obj);
        obj = {            
            text:"Amy found 2 shells but she broke 1.  How many does she have now?",
            equation:"2-1=1"
        };
        obj = {           
            text:"The snowman had 2 branches as arms and all 2 fell off. How many does he have now?",
            equation:"2-2=0"
        };
        theArray.push(obj);
        theArray.push(obj);
        obj = {           
            text:"There were 7 students on the bus and 1 got out.  How many are still on the bus?",
            equation:"7-1=6"
        };
        theArray.push(obj);
        obj = {
            text:"There were 3 birds on the nest and then 2 bird left the nest.  How many birds are still on the nest?",
            equation:"3-2=1"
        };
        theArray.push(obj);
        obj = {
            text:"I had 3 soccer balls and then I got 1 more as a present.  How many do I have now?",
            equation:"3+1=4"
        };
        theArray.push(obj);
        obj = {           
            text:"I had 9 crayons and I broke 1. How many do I have now?",
            equation:"9-1=8"
        };
        theArray.push(obj);
        obj = {           
            text:"I had 4 cookies and I ate 4 cookies. How many do I have now?",
            equation:"4-4=0"
        };
        theArray.push(obj);
        return theArray;
    }

    getNextQuestion = () => {

        this.equation = this.arrayOfQuestionObjects[this.arrayInd].equation;
        this.setState( {text:this.arrayOfQuestionObjects[this.arrayInd].text, equation:"Click to see equation", drop1:"?", drop2:"?",dropSign:"?", dropSol:"?", message:"You Got This!"} );        
        //set the index for the next time    
        (this.arrayInd === this.arrayOfQuestionObjects.length -1 ) ? this.arrayInd = 0 : this.arrayInd++;
    }

    clickEl(e, num){
        if (num === "+" || num === "-"){
            this.setState({dropSign: num});
        }else{            
            if (this.state.drop1 === "?"){
                this.setState({drop1:num});
            }else if (this.state.drop2 === "?"){
                this.setState({drop2:num});
            }else if (this.state.dropSol === "?"){
                this.setState({dropSol:num});
            }else{
                this.setState({message:"reset equation to try again"});
            }
        }
    }
    resetEq = () => {
        this.setState({drop1:"?", drop2:"?", dropSol:"?", dropSign:"?"})
    }
    /*handleDragStart(e, num) {
       
        e.dataTransfer.setData("number", num);
    }*/

    showEquation = () =>{
        this.setState({equation:this.equation});
    }


    /*handleDrop(e, element ) {
        const number = e.dataTransfer.getData("number");
        switch(element){
            case "1":
                this.setState( {drop1:number});
                break;
            case "2":
                this.setState( {drop2:number});
                break;
            case "sign":
                this.setState( {dropSign:number});
                break;
            case "sol":
                this.setState( {dropSol:number});
                break;
            default:
                break;
        }
        
    }*/

    render() {   

        var containerStyle = {
            display:"flex",
            flexDirection: "row",
            textAlign: "center",
            flexWrap: "wrap",
            justifyContent:"center",
            alignItems: "center"        
        }

        var optionsSt = {
            border:"2px solid navy",
            width:"4vw",
            height:"4vw",
            fontSize:"3vw",
            margin:"2px",
            background:"lightblue"
        }

      return(  
          
     
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Get question and build its equation with the number and sign buttons. <br/>           
           <button className="buttonGeneral" onClick={this.getNextQuestion}>Get Question</button><br/><br/>

           <div style={{fontSize:"3vw", background:"lightpink", padding:"5px", border:"2px solid navy"}}>{this.state.text}</div><br/><br/>

           <div style={containerStyle}>
               {/*}
                <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,0)}>0</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,1)}>1</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,2)}>2</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,3)}>3</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,4)}>4</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,5)}>5</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,6)}>6</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,7)}>7</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,8)}>8</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,9)}>9</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,"+")}>+</div>
               <div style={optionsSt} draggable onDragStart={(e) => this.handleDragStart(e,"-")}>-</div>               
            */}
                <button className="buttonOptions"  onClick={(e) => this.clickEl(e,0)}>0</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,1)}>1</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,2)}>2</button>
               <button className="buttonOptions" onClick={(e) => this.clickEl(e,3)}>3</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,4)}>4</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,5)}>5</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,6)}>6</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,7)}>7</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,8)}>8</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,9)}>9</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,"+")}>+</button>
               <button className="buttonOptions"  onClick={(e) => this.clickEl(e,"-")}>-</button> 
               <button onClick={this.resetEq}>Reset Equation</button> 
                </div>
            <br/>
            <div style={{background:"lightblue"}}>
                <div style={containerStyle}>
                    {/*}
                    <div style={optionsSt} onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "1")}>{this.state.drop1}</div>
                    <div style={optionsSt} onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "sign")}>{this.state.dropSign}</div>
                    <div style={optionsSt} onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "2")}>{this.state.drop2}</div>
                    <div style={optionsSt}>=</div>
                    <div style={optionsSt} onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e,"sol" )}>{this.state.dropSol}</div>
        */}
                    <div >{this.state.drop1}</div>
                    <div >{this.state.dropSign}</div>
                    <div >{this.state.drop2}</div>
                    <div >=</div>
                    <div >{this.state.dropSol}</div>
                    &nbsp; &nbsp;<div >{this.state.message}</div>
                </div>
            </div>
            <div style={containerStyle}>
                <span style={{fontSize:"2vw", border:"2px solid navy", width:"40vw", height:"4vw", cursor:"pointer", background:"lightblue", margin:"5px"}}  
                onClick={this.showEquation}>{this.state.equation}</span>
            </div>
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default PLusOrMinus;
