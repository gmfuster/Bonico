import React, {Component} from "react";

import ShuffleCardsAndShow from "../../Components/ShuffleCardsAndShow";
import { generateRandomNumber } from "../../commonJS";

class NextNumber extends Component {

    constructor(props)
    {
        super(props);   
        this.childPlayer1Ref = React.createRef();  
        this.elementsForCard = [25, 27, 34, 15, 66, 10, 20, 30, 40, 55, 71, 83, 94, 99,53,74,89,61,26,14,11,42];
        this.state = {plusOption1:"?", plusOption2:"?", tenOption1:"?", tenOption2:"?"}
    }      

    rollNumber = () => {
        this.childPlayer1Ref.current.roll();
    }
    
    showOptionsForSelectedNumber = (number) => {
        
        let positionFirst = generateRandomNumber(2);
        let plus1=0;
        let plus2=0;
        let plus10_1=0;
        let plus10_2 = 0;
        
        plus1= number+1;
        plus2 = generateRandomNumber(90);
        plus10_1 = number +10;
        plus10_2 = number + 12;

        if (positionFirst > 1){
            this.setState({plusOption1: plus1, plusOption2: plus2, tenOption1:plus10_1, tenOption2:plus10_2});
        }else{
            this.setState({plusOption1: plus2, plusOption2: plus1, tenOption1:plus10_2, tenOption2:plus10_1});
        }

    }

    render() {           

        var divHorContainer = {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            userSelect:"none",
            margin:"15px"
        }   
        var number = {
            background:"lightgreen",
            width:"10vw",
            height:"10vw",
            marginLeft:"5px",
            textAlign:"center",
            userSelect:"none",
            fontSize:"6vw"
        }        
      return(  
               
      <React.Fragment>
         
        <div className="TopMarginToDealWithNavBarAll CenterMe">  
            <span><button className="buttonGeneral" onClick={this.rollNumber}>Click</button> to get a number.  Choose the correct Next number and number + 10</span>
            <div style={divHorContainer} >                  
                <ShuffleCardsAndShow  ref={this.childPlayer1Ref}
                        elementsForCard = {this.elementsForCard} myWidth="10vw" myHeight = "10vw" myFont="6vw" myColor="lightblue"
                        callbackFunction= {this.showOptionsForSelectedNumber}
                    />  
                    <div style ={{border: "3px solid lightgreen", marginLeft:"5px"}}>
                        Choose what comes next
                        <div style={divHorContainer}>
                            <div style={number}>{this.state.plusOption1}</div>
                            <div style={number}>{this.state.plusOption2}</div>                
                        </div>                
                    </div>
                    <div style ={{border: "3px solid lightgreen", marginLeft:"5px"}}>
                        Number + 10?
                        <div style={divHorContainer}>
                            <div style={number}>{this.state.tenOption1}</div>        
                            <div style={number}>{this.state.tenOption1}</div>                         
                        </div>                
                    </div>
            </div>
        </div>        
    </React.Fragment>
      )
  };
}


export default NextNumber;