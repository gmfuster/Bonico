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
            greatestToLeast: 'Greatest To Least',
            leastToGreatest: 'Least To Greatest'
        }
        this.totalNumberToSort = 4; //if more, add more divs
        this.optionChosen = this.options.numbers;  
        this.sortingBychosen = this.sortingBy.leastToGreatest;

        this.state = {sortBy:this.sortingBychosen};
        
    }      

    

    //todo maybe have a file for the functions used often and import it.
    generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);      
    }

    checkedOption = (op) =>{
        this.optionChosen = op;   
    }

    handleDragStart(e, num) {
       
        e.dataTransfer.setData("number", num);
    }
    

    handleDrop(e, element ) {
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
            Choose an options to sort by number of elements or by numbers.  Click the button to get things to sort and how.<br/>
            <span style={{ fontSize:"2vw"}}> Sort by <strong>{this.state.sortBy}</strong></span>
            <div className="radio-toolbar">          
                <input type="radio" id="items" name="itemNumberOption" value="item" onChange = { () => this.checkedOption(this.options.items)}/>
                <label htmlFor="item">Items</label>

                <input type="radio" id="items" name="itemNumberOption" value="number" onChange = { () => this.checkedOption(this.options.numbers)}/>
                <label htmlFor="number">Numbers</label>                                  
            </div>                
            <button className="buttonGeneral">Get things to sort!</button> 
            <br/>

            <div style={divHorContainer}>
                <div style={{border:"2px solid deeppink", width:"40vw", height:"40vh"}}>
                    <span>put 1 here</span><span>put 2 here</span><br/>
                    <span>put 3 here</span><span>put 3 here</span>
                </div>
                <div style={{border:"2px solid deeppink", width:"40vw", height:"40vh"}}>
                    put the tower with the 4 options to drop into here.  todo, how to reject if not in the right place or wait till the end and validate at tend with button?
                </div>
            </div>
        </div>        
  
      </React.Fragment>)
  };
  }
  
  export default Sorting;
