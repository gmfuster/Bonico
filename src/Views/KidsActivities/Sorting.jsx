import React, {Component} from "react";

class Sorting extends Component {

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
        this.state = {sortBy:this.sortingBychosen, textToDisplay:[], textSortedByKid:["", "", "", ""], textSortedByComputer:["","","",""]};
        
    }      

    switchSortBy = () => {
        (this.sortingBychosen === this.sortingBy.greatestToLeast)? 
        this.sortingBychosen = this.sortingBy.leastToGreatest: this.sortingBychosen = this.sortingBy.greatestToLeast;
        //set variable and then set state to make setStates easier to read.
        this.setState({sortBy:this.sortingBychosen, textToDisplay:[], textSortedByKid:[], textSortedByComputer:[]});
    }
    

    //todo maybe have a file for the functions used often and import it.
    generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);      
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
                randomNum = this.generateRandomNumber(10);    
                //TODO have a file with math function and have more configurable random funcs  
                //could return zero so set to 1
                if (randomNum === 0 ){ randomNum = 1};
                stringToSet = "";                                
                for (let j = 1; j < randomNum+1; j++){
                    stringToSet += " ♥ ";
                }
                
                textArray.push(stringToSet);
            }
        }else{
            for (let i = 1; i< this.totalNumberToSort+1; i++){
                randomNum = this.generateRandomNumber(75);    //OK to use zero on this one            
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
    handleDragStart(e, el) {
               
        e.dataTransfer.setData("sourceElement", el);
    }
    

    handleDrop(e, element ) {

        const sourceElement = e.dataTransfer.getData("sourceElement");       

        let a = this.state.textSortedByKid.slice(); 
        a[element] = this.state.textToDisplay[sourceElement];   

        let source = this.state.textToDisplay.slice();
        source[sourceElement] = "";
        this.setState({textSortedByKid: a, textToDisplay: source});                    
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
            <button className="buttonGeneral" onClick={ () => this.getThingsToSort(this.options.items)}>Get ♥s to sort!</button>  
            &nbsp; &nbsp;  <button className="buttonGeneral" onClick={ this.switchSortBy}>Switch Sort By</button>   
            <br/>            
            <br/>
           
            <span style={{ fontSize:"2vw"}}> Sort by <strong>{this.state.sortBy}</strong></span>                       
            
            <br/>

            <div style={divHorContainer}>
                <div style={{border:"2px solid deeppink", fontSize:"2vw", color:"navy"}}>
                    <div style={divVertContainer}>
                        DRAG
                        <br/>
                        <div draggable onDragStart={(e) => this.handleDragStart(e,0)} style={{border:"2px darkblue solid", width:"80%", height:"15%", textAlign:"center"}}>
                            {this.state.textToDisplay[0]}</div>
                        <br/>
                        <div draggable onDragStart={(e) => this.handleDragStart(e,1)} style={{border:"2px darkblue solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textToDisplay[1]}</div>
                        <br/>
                        <div draggable onDragStart={(e) => this.handleDragStart(e,2)} style={{border:"2px darkblue solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textToDisplay[2]}</div>
                        <br/>
                        <div draggable onDragStart={(e) => this.handleDragStart(e,3)}style={{border:"2px darkblue solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textToDisplay[3]}</div>  
                    </div>
                </div>

                <div style={{border:"2px solid deeppink", fontSize:"2vw", color:"deeppink"}}>
                    <div style={divVertContainer}>
                        DROP
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "0")} style={{border:"2px deeppink solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByKid[0]}
                        </div>
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "1")} style={{border:"2px deeppink solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByKid[1]}
                        </div>
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "2")} style={{border:"2px deeppink solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByKid[2]}
                        </div>
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "3")} style={{border:"2px deeppink solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByKid[3]}
                        </div> 
                    </div>
                </div>

                <div style={{border:"2px solid deeppink", fontSize:"2vw", color:"teal"}}>
                    <div style={divVertContainer}>
                        <button onClick={this.showSolution}>Show Answer!</button>  
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "1")} style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[0]}
                        </div>
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "2")} style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[1]}
                        </div>
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "3")} style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[2]}
                        </div>
                        <br/>
                        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.handleDrop(e, "4")} style={{border:"2px teal solid", width:"80%", height:"15%",textAlign:"center"}}>
                            {this.state.textSortedByComputer[3]}
                        </div> 
                    </div>
                </div>
            </div>
        </div>        
  
      </React.Fragment>)
  };
  }
  
  export default Sorting;
