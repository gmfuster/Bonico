import React, {Component} from "react";
import ShuffleCardsAndShow from "../../Components/ShuffleCardsAndShow";

class GreaterLessEqual extends Component {

    constructor()
    {
        super();                
        this.elementsForCard = ["<", ">", " = "]  ;
        this.elementsForCardNumbersPlayers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]  ;        
    }     

    getNewResults = () => {        
                
        this.refs.childPlayer1.roll();
        this.refs.childPlayer2.roll();
        this.refs.childComparison.roll();
                
    }
    /*UPDATE CANVAS END*/    


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
            <button className= "buttonGeneral" onClick={this.getNewResults}>Show Numbers</button>   <br/><br/>
            Player 1 and Player 2 get a number, whoever has the number that satisfies what the center card says wins.  If the center card says 
            equal, both players win if they both have the same number.  
            <br/><br/>
            <div style={cardStyles}>                
                <div style={{border:"solid navy 2px",  marginRight:20, marginTop:120}}>        
                    PLAYER 1 <br/>
                    <ShuffleCardsAndShow  ref="childPlayer1"
                        elementsForCard = {this.elementsForCardNumbersPlayers} myWidth="20vw" myHeight = "30vh" myFont="10vw" myColor="lightblue"
                    />  
                </div>

                <div>
                    SATISFY THIS! <br/>
                    <ShuffleCardsAndShow  ref="childComparison"
                    elementsForCard = {this.elementsForCard}     myWidth="20vw" myHeight = "25vh" myFont="10vw" myColor="lightpink"
                 />   
                </div>                
                <div style={{border:"solid navy 2px", marginLeft:20, marginTop:120} }>                
                    PLAYER 2<br/>
                    <ShuffleCardsAndShow  ref="childPlayer2"
                        elementsForCard = {this.elementsForCardNumbersPlayers}     myWidth="20vw" myHeight = "30vh" myFont="10vw" myColor="lightblue"
                    />  
                </div>        
            </div>       
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default GreaterLessEqual;
