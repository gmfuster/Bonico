import React, {Component} from "react";
import ShuffleCardsAndShow from "../../Components/ShuffleCardsAndShow";

class PlusOnePlusZero extends Component {

    constructor()
    {        
        super();   
        //default is  1 or 0                         
        this.state = { result:"?", elementsForWhatToAdd:[0,1], elementsForWhatToAddTo: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 
        checked1:"checked", checked2 : "" }             

        this.numberWeAddTo = 0;
        this.numberBeingAdded = 0;
        this.numberWeAddToRef = React.createRef();        
        this.numberBeingAddedRef = React.createRef();        
    }     

    setOption = (optionString) => {
        if (optionString === "any"){
            this.setState({elementsForWhatToAdd:[1,2,3,4,5,6,7,8,9, 10], elementsForWhatToAddTo:[1,2,3,4,5,6,7,8,9, 10,11,12,13,14,15], checked1:"", checked2:"checked"});            
        }else{
            this.setState({elementsForWhatToAdd:[1,0], elementsForWhatToAddTo : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], checked2:"", checked1:"checked"});            
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
    var resultSt = {        
        width: "15vw",
        border: "outset 5px black",
        height:"25vh", 
        cursor:"pointer",        
        position:"relative"
    }

      return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
            <div className="radio-toolbar">    
                <input type="radio" id="1or0" name="option" value="1or0" checked={this.state.checked1} onChange = { () => this.setOption("1pr0")}/>
                <label htmlFor="1or0">Add 1 or 0 to Number</label>

                <input type="radio" id="any" name="option" value="any" checked={this.state.checked2} onChange = { () => this.setOption("any")}/>
                <label htmlFor="any">Add any Numbers 1-10</label>
            </div>
            <br/>
            <button className= "buttonGeneral" style={{ width:"80%", marginLeft:"10%", marginRight:"10%"}} onClick={this.getNewResults}>Get Numbers!</button>   <br/><br/>
                        
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

                <div style={resultSt} onClick={this.showResult}>
                   <span style={{ fontSize:"10vw"}}  >{this.state.result}</span>   
                   <img style = {{ height:"35%", width:"35%", position:"absolute", bottom:"0px", right:"0px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="click to see result"  />          
                </div>   
            </div>       
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default PlusOnePlusZero;
