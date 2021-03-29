import React, {Component} from "react";
import { generateRandomNumber } from "../commonJS";

class ShufflePicsAndShow extends Component {

    constructor(props)
    {
        super(props);        
        this.refToImg = React.createRef();   
        this.refToContainingDiv = React.createRef();   
        this.arrayOfPicPaths = this.props.elementsForPics;
        this.pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;   
        this.numberSelected = 0;         

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

       this.setState( {imageSrc:this.pathPic + "/images/emptyfill.svg"}); 

       if (this.refToContainingDiv.current !== undefined)   {           
            this.refToContainingDiv.current.className = "picsAnimation";              
       }
   }

   animationEnded = () => {
       
        if (this.numberSelected <= 0){
            this.setState( {imageSrc:this.pathPic + "/images/clickme.svg"});
            return;
        }else{
            this.setState( { imageSrc: this.arrayOfPicPaths[this.numberSelected]});
        }
        
        this.refToImg.current.className = null;                  
   }


    render() {      
          var picStyle = {                                                              
            width: this.props.myWidth,            
            height:this.props.myHeight ,
            userSelect:"none",
            border:"5px lightblue solid"   ,
            borderRadius: "50%",
            cursor:"pointer"
          };
      return(  
            
      <React.Fragment>     
                <div ref={this.refToContainingDiv}>
                    <img style={picStyle} ref={this.refToImg} src={this.state.imageSrc} onClick={this.roll} alt="Images for rolling"/>                           
                </div>                                                                            
      </React.Fragment>)
  };
  }
  
  export default ShufflePicsAndShow;
