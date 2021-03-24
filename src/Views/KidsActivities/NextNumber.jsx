import React, {Component} from "react";

import ShuffleCardsAndShow from "../../Components/ShuffleCardsAndShow";
import { generateRandomNumber } from "../../commonJS";

class NextNumber extends Component {

    constructor(props)
    {
        super(props);   
        this.childPlayer1Ref = React.createRef();  
        this.elementsForCard = [25, 27, 34, 15, 66, 10, 20, 30, 40, 55, 71, 83, 94, 99,53,74,89,61,26,14,11,42];
        this.state = {plusOption1:"?", plusOption2:"?", tenOption1:"?", tenOption2:"?", border1:"", border2:""}
        this.selectedNumber = null;
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
        
        this.selectedNumber = number;
        plus1= number+1;
        plus2 = generateRandomNumber(90);
        plus10_1 = number + 10;
        plus10_2 = number + 12;        

        if (positionFirst > 1){            
            this.setState({plusOption1: plus1, plusOption2: plus2, tenOption1:plus10_1, tenOption2:plus10_2});
        }else{            
            this.setState({plusOption1: plus2, plusOption2: plus1, tenOption1:plus10_2, tenOption2:plus10_1});
        }
        this.setState({border2: ""}) ;  
        this.setState({border1: ""}) ;  
    }

    clickPlus1 = (value) => {
                
        let border = ""
        if (value === this.selectedNumber +1){
            border = "3px solid lightgreen";
        }
        else{
            border = "3px solid red";
        }           
        this.setState({border1: border}) ;             
    }
    clickPlus10 = (value) => {
                
        let border = ""
        if (value === this.selectedNumber +10){
            border = "3px solid lightgreen";
        }
        else{
            border = "3px solid red";
        }           
        this.setState({border2: border}) ;             
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
            fontSize:"6vw",
            cursor:"pointer"
        }     
        
        this.group1Contents = <div>
                                Choose what comes next
                                <div style={divHorContainer}>
                                    <div style={number} onClick={ ()=> this.clickPlus1(this.state.plusOption1)}>{this.state.plusOption1}</div>
                                    <div style={number} onClick={ ()=> this.clickPlus1(this.state.plusOption2)}>{this.state.plusOption2}</div>                
                                </div>
                            </div>;

        this.groupForPlus1 = <div style ={{border: this.state.border1, marginLeft:"5px"}}>
                                {this.group1Contents}
                             </div>   ;             
    
        this.group2Contents = <div>
                                Number + 10?
                                <div style={divHorContainer}>
                                    <div style={number} onClick={ ()=> this.clickPlus10(this.state.tenOption1)}>{this.state.tenOption1}</div>        
                                    <div style={number} onClick={ ()=> this.clickPlus10(this.state.tenOption2)}>{this.state.tenOption2}</div>                         
                                </div> 
                            </div>

        this.groupForPlus10 = <div style ={{border: this.state.border2, marginLeft:"5px"}}>
                                    {this.group2Contents}
                                 </div>   ;

      return(  
               
      <React.Fragment>
         
        <div className="TopMarginToDealWithNavBarAll CenterMe">  
            <span><button className="buttonGeneral" onClick={this.rollNumber}>Click</button> to get a number.  Choose the correct Next number and number + 10</span>
            <div style={divHorContainer} >                  
                <ShuffleCardsAndShow  ref={this.childPlayer1Ref}
                        elementsForCard = {this.elementsForCard} myWidth="12vw" myHeight = "12vw" myFont="6vw" myColor="lightblue"
                        callbackFunction= {this.showOptionsForSelectedNumber}
                    />  
                    {this.groupForPlus1}
                    {this.groupForPlus10}
            </div>
        </div>        
    </React.Fragment>
      )
  };
}


export default NextNumber;