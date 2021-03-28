import React, {Component} from "react";
import { generateRandomNumber } from "../commonJS";

class ShufflePicsAndShow extends Component {

    constructor(props)
    {
        super(props);        
        this.refToImg = React.createRef();   
        this.arrayOfPicPaths = this.props.elementsForPics;
        this.pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;             

        //set original pic, then get random from array passed, with genererate random number function
        this.state = {imageSrc: this.pathPic + "/images/clickme.svg" }  ;                
    }       
    
    componentDidMount = () => {       
        this.refToImg.current.addEventListener('animationend', this.animationEnded) ; 
    }   

   roll= () => {                                                                
        var maxNumber = this.arrayOfPicPaths.length;
        this.animationAndDisplay(maxNumber);        
   }    

   animationAndDisplay = (maxNumber) => {

       this.numberSelected = generateRandomNumber(maxNumber);        

       this.setState( {imageSrc:this.pathPic + "/images/waiting.svg"}); 

       if (this.refToImg.current !== undefined)   {
        this.refToImg.current.className = "cardsAnimation";              
       }
   }

   animationEnded = () => {
       /*
        this.setState( {value:this.props.elementsForCard[this.numberSelected]});
        this.refToImg.current.className = null;   
        if (this.props.callbackFunction !== undefined) {
            this.props.callbackFunction(this.props.elementsForCard[this.numberSelected]);        
        }*/
   }


    render() {      
          var picStyle = {                                                              
            width: this.props.myWidth,            
            height:this.props.myHeight ,
            userSelect:"none",
            border:"5px lightblue solid"   ,
            cursor:"pointer"
          };
      return(  
            
      <React.Fragment>                                                                                 
                <img style={picStyle} ref={this.refToImg} src={this.state.imageSrc} onClick={this.roll}></img>             
      </React.Fragment>)
  };
  }
  
  export default ShufflePicsAndShow;
