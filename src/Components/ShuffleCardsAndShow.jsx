import React, {Component} from "react";
import CSSAnimation from '../Views/KidsActivities/KidsPages.css'

class ShuffleCardsAndShow extends Component {

    constructor(props)
    {
        super(props);        
        this.refToDiv = React.createRef();   
        this.state = {value:"?"}        
        this.numberSelected = null;
    } 
  
    componentDidMount = () => {
        this.refToDiv.current.addEventListener('animationend', this.animationEnded) ; 
    }
    generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);      
    }

   roll= () => {                                                                
        var maxNumber = this.props.elementsForCard.length;
        this.animationAndDisplay(maxNumber);        
   }    

   animationAndDisplay = (maxNumber) => {

       this.numberSelected = this.generateRandomNumber(maxNumber);        
       this.setState( {value:"?"});       
       this.refToDiv.current.className = "cardsAnimation";              
   }
   animationEnded = () => {
        this.setState( {value:this.props.elementsForCard[this.numberSelected]});
        this.refToDiv.current.className = null;    
        this.props.callbackFunction(this.props.elementsForCard[this.numberSelected]);        
   }


    render() {      
          var cardStyle = {                          
            background:this.props.myColor,
            fontFamily:"Times New Roman",   
            fontSize:this.props.myFont,
            width: this.props.myWidth,            
            height:this.props.myHeight 
          };
      return(  
            
      <React.Fragment>                                                                      
           <div style={cardStyle}>
                <div ref={this.refToDiv}>{this.state.value}</div>
            </div>        
  
      </React.Fragment>)
  };
  }
  
  export default ShuffleCardsAndShow;
