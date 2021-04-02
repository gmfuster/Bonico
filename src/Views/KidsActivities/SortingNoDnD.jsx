import React, {Component} from "react";
import { generateRandomNumber } from "../../commonJS";

class SortingNoDnD extends Component {

    constructor()
    {
        super();          
        this.options= {
            items: 'item',
            numbers: 'number'
        }
        this.sortingBy= {
            greatestToLeast: 'Greatest To Least ↘ ',
            leastToGreatest: 'Least To Greatest ↗ '
        }
        this.totalNumberToSort = 4; //if more, add more divs and els to state array
        this.optionChosen = this.options.numbers;  
        this.sortingBychosen = this.sortingBy.leastToGreatest;
        this.sourceElements = [];
        this.state = {sortBy:this.sortingBychosen, textToDisplay:[], textSortedByComputer:["","","",""]};
        
    }      

    switchSortBy = () => {
        (this.sortingBychosen === this.sortingBy.greatestToLeast)? 
        this.sortingBychosen = this.sortingBy.leastToGreatest: this.sortingBychosen = this.sortingBy.greatestToLeast;
        //set variable and then set state to make setStates easier to read.
        this.setState({sortBy:this.sortingBychosen, textToDisplay:[],  textSortedByComputer:[]});
    }
    

    //OK to get double numbers
    getThingsToSort = (option) => {
        //TODO to clean up and rename
        this.optionChosen = option;
        let randomNum = 0;
        let textArray = [];
        let stringToSet = "";
        if (this.optionChosen === this.options.items){
            for (let i = 1; i< this.totalNumberToSort+1; i++){
                randomNum = generateRandomNumber(10);                    
                if (randomNum === 0 ){ randomNum = 1};
                stringToSet = "";                                
                for (let j = 1; j < randomNum+1; j++){
                    stringToSet += " * ";
                }
                
                textArray.push(stringToSet);
            }
        }else{
            for (let i = 1; i< this.totalNumberToSort+1; i++){
                randomNum = generateRandomNumber(75);    //OK to use zero on this one            
                textArray.push(randomNum);
            }
        }
        this.sourceElements = textArray;
        this.setState({textToDisplay:textArray, textSortedByComputer:[], textSortedByKid:[]});   

    }
    showSolution = () => {

        let sortedArray =this.sourceElements.slice();         

        if (this.optionChosen === this.options.items){            
            if (this.sortingBychosen === this.sortingBy.leastToGreatest){
                sortedArray.sort((a,b) => a.length - b.length);
            }
            else{
                sortedArray.sort((a,b) => b.length - a.length);
            }
        }
        else{            
            if (this.sortingBychosen === this.sortingBy.leastToGreatest){
                sortedArray.sort( (a,b) => parseInt(a)  - parseInt(b));
            }
            else{
                sortedArray.sort((a,b) => parseInt(b) - parseInt(a));
            }
        }
        this.setState({textSortedByComputer: sortedArray});              

    }    

    goDown = (n) =>{

        let arrAux = this.state.textToDisplay.slice();

        if (n < (this.state.textToDisplay.length -1 )){
            let aux = this.state.textToDisplay[n+1];
            arrAux[n+1]  = this.state.textToDisplay[n];
            arrAux[n]= aux;

            this.setState({textToDisplay:arrAux});
            this.forceUpdate();
        }        
    }
    goUp = (n) =>{
        let arrAux = this.state.textToDisplay.slice();

        if (n > 0){
            let aux = this.state.textToDisplay[n-1];
            arrAux[n-1]  = this.state.textToDisplay[n];
            arrAux[n]= aux;

            this.setState({textToDisplay:arrAux});
            this.forceUpdate();
        }
    }

    render() {           

        var divHorContainer = {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            userSelect:"none"
        }
        var divVertContainer = {
            display:"flex",
            flexDirection:"Column",
            justifyContent:"center",            
            userSelect:"none",
            width:"30vw",
            height:"60vh",
            alignItems:"center",
            padding:"2vh"
        }
      return(  
               
      <React.Fragment>
         
        <div className="TopMarginToDealWithNavBarAll CenterMe">  
            Choose an options to sort by number of elements or by numbers.  Click the button to get things to sort and how.<br/>  
            <button className="buttonGeneral" onClick={ () => this.getThingsToSort(this.options.numbers)}>Get Numbers to sort!</button> 
            <button className="buttonGeneral" onClick={ () => this.getThingsToSort(this.options.items)}>Get *s to sort!</button>  
            &nbsp; &nbsp;  <button className="buttonGeneral" onClick={ this.switchSortBy}>Switch Sort By</button>   
            <br/>            
            <br/>
           
            <span style={{ fontSize:"2vw"}}> Sort by <strong>{this.state.sortBy}</strong></span>  
            <button onClick={this.showSolution} style={{margin:"5px"}}>Show Answer!</button>                                   
            <br/>

            {/*TODO if going to use something similar again, do a component instead*/}
            <div style={divHorContainer}>
                <div style={{border:"2px solid deeppink", fontSize:"2vw", color:"navy"}}>

                    <div style={divVertContainer}>  
                        <div style={{width:"80%", height:"15%", textAlign:"center", display:"flex", flexDirection:"row", justifyContent:"center" }}>
                            <button disabled ={true} >+</button>
                            <div style={{width:"80%", height:"100%", textAlign:"center",border:"2px darkblue solid"}}>                                
                                {this.state.textToDisplay[0]}
                            </div>
                            <button onClick={ () => this.goDown(0)}>-</button>
                        </div>
                        <br/>
                        <div style={{width:"80%", height:"15%", textAlign:"center", display:"flex", flexDirection:"row",justifyContent:"center" }}>
                            <button onClick={ () => this.goUp(1)}>+</button>
                            <div style={{width:"80%", height:"100%", textAlign:"center",border:"2px darkblue solid"}}>
                                {this.state.textToDisplay[1]}
                            </div>
                            <button onClick={ () => this.goDown(1)}>-</button>
                        </div>
                        <br/>
                        <div style={{width:"80%", height:"15%", textAlign:"center", display:"flex", flexDirection:"row",justifyContent:"center" }}>
                            <button onClick={ () => this.goUp(2)}>+</button>
                            <div style={{width:"80%", height:"100%", textAlign:"center",border:"2px darkblue solid"}}>
                                {this.state.textToDisplay[2]}
                            </div>
                            <button onClick={ () => this.goDown(2)}>-</button>
                        </div>
                        <br/>
                        <div style={{width:"80%", height:"15%", textAlign:"center",display:"flex", flexDirection:"row", justifyContent:"center" }}>                            
                            <button onClick={ () => this.goUp(3)}>+</button>
                            <div style={{width:"80%", height:"100%", textAlign:"center",border:"2px darkblue solid"}}>
                                {this.state.textToDisplay[3]}
                            </div>  
                            <button disabled ={true}>-</button>
                        </div>
                    </div>
                    
                </div>


                <div style={{border:"2px solid deeppink", fontSize:"2vw", color:"teal"}}>
                    <div style={divVertContainer}>                        
                        <div style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[0]}
                        </div>
                        <br/>
                        <div style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[1]}
                        </div>
                        <br/>
                        <div style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[2]}
                        </div>
                        <br/>
                        <div style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[3]}
                        </div> 
                    </div>
                </div>
            </div>
        </div>        
  
      </React.Fragment>)
  };
  }
  
  export default SortingNoDnD;
