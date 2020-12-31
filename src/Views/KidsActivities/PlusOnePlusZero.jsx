import React, {Component} from "react";
import ShuffleCardsAndShow from "../../Components/ShuffleCardsAndShow";

class PlusOnePlusZero extends Component {

    constructor()
    {
        //todo change deprecated and remove from state what not needed in state

        super();   
        //default is  1 or 0                         
        this.state = { result:"?", elementsForWhatToAdd:[0,1], elementsForWhatToAddTo: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] }             

        this.numberWeAddTo = 0;
        this.numberBeingAdded = 0;
        this.numberWeAddToRef = React.createRef();        
        this.numberBeingAddedRef = React.createRef();
    }     

    setOption = (optionString) => {
        if (optionString === "any"){
            this.setState({elementsForWhatToAdd:[1,2,3,4,5,6,7,8,9, 10], elementsForWhatToAddTo:[1,2,3,4,5,6,7,8,9, 10]});            
        }else{
            this.setState({elementsForWhatToAdd:[1,0], elementsForWhatToAddTo : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});            
        }
        this.forceUpdate();
    }

    getNewResults = () => {        
        this.setState({result: "?"}); 
        this.numberWeAddToRef.current.roll();
        this.numberBeingAddedRef.current.roll();                        
    }    

    storeResultNumberWeAddTo = (number) => {
        this.numberWeAddTo = number;    
    }
    storeResultNumberBeingAdded = (number) => {
        this.numberBeingAdded = number;
    }

    showResult = () => {
        this.setState({result: this.numberBeingAdded + this.numberWeAddTo});
    }

    render() {
        var cardStyles = {
            width:"100%",            
            textAlign: "center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            fontSize:"3vw",            
            alignItems:"flex-start"
        }
      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe"> 
            Choose  whether you want to add only 1 or 0 to a number or any numbers 1-10 (Default is 0 or 1).<br/>
            Click the button to get your numbers.<br/>
            Guess the result and click on the last square to see if you were right.<br/><br/>
            {/*todo set the default so it doesn't go back to it after first round*/}
            <div className="radio-toolbar">    
            <input type="radio" id="1or0" name="option" value="1or0" onChange = { () => this.setOption("1pr0")}/>
            <label htmlFor="1or0">Add 1 or 0 to Number</label>

            <input type="radio" id="any" name="option" value="any" onChange = { () => this.setOption("any")}/>
            <label htmlFor="any">Add any Numbers 1-10</label>
            </div>
            <button className= "buttonGeneral" onClick={this.getNewResults}>Get Numbers!</button>   <br/><br/>
            
            <br/><br/>
            <div style={cardStyles}>                
                <div >                            
                    <ShuffleCardsAndShow  ref={this.numberWeAddToRef}
                        elementsForCard = {this.state.elementsForWhatToAddTo} myWidth="15vw" myHeight = "25vh" myFont="10vw" myColor="lightblue" callbackFunction= {this.storeResultNumberWeAddTo}
                    />  
                </div>
                <div style={{  width: "15vw" , height:"25vh"}}>
                   <span style={{ fontSize:"10vw" }}>+</span>                 
                </div>                
                <div >                                   
                    <ShuffleCardsAndShow  ref={this.numberBeingAddedRef}
                        elementsForCard = {this.state.elementsForWhatToAdd} myWidth="15vw" myHeight = "25vh" myFont="10vw" myColor="lightblue" callbackFunction= {this.storeResultNumberBeingAdded}
                    />  
                </div>  
                <div style={{  width: "10vw", height:"25vh" }}>
                   <span style={{ fontSize:"10vw" }}>=</span>                 
                </div>      
                <div style={{  width: "15vw", border: "outset 5px black", height:"25vh", cursor:"pointer" }} onClick={this.showResult}>
                   <span style={{ fontSize:"10vw" }}>{this.state.result}</span>                 
                </div>   
            </div>       
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default PlusOnePlusZero;
