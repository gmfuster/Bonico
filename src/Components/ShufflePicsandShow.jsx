import React, {Component} from "react";
import { generateRandomNumber } from "../commonJS";

class ShufflePicsAndShow extends Component {

    constructor(props)
    {
        super(props);        
        this.refToImg = React.createRef();   
        this.refToContainingDiv = React.createRef();   
        this.arrayOfPicPaths = this.props.elementsForPics.slice();        
        this.pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;   
        this.numberSelected = 0;         
        this.repeatItems = this.props.repeatItems;

        //set original pic, then get random from array passed, with genererate random number function
        this.state = {imageSrc: this.pathPic + "/images/clickme.svg" }  ;                
    }       
    
    componentDidMount = () => {       
        this.refToContainingDiv.current.addEventListener('animationend', this.animationEnded) ; 
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
       
        if (this.refToContainingDiv.current !== undefined)   {           
            this.refToContainingDiv.current.className = null;                          
        }            
            
        if (this.numberSelected < 0){
            this.setState( {imageSrc:this.pathPic + "/images/clickme.svg"});            
        }else{            
            this.setState( { imageSrc: this.arrayOfPicPaths[this.numberSelected]});
            if (this.repeatItems === "false"){
                this.arrayOfPicPaths.splice(this.numberSelected, 1);
            }
        }                
   }

   reset = () => {
        this.arrayOfPicPaths =  this.props.elementsForPics.slice();  
        this.setState( {imageSrc:this.pathPic + "/images/clickme.svg"});    
   }

    render() {      
          var picStyle = {                                                              
            width: this.props.myWidth,            
            height:this.props.myHeight ,
            userSelect:"none",
            border:"10px lightblue solid"   ,
            borderRadius: "50%",
            cursor:"pointer"
          };
      return(  
            
      <React.Fragment>   
                <div>
                    <div ref={this.refToContainingDiv}>
                        <img style={picStyle} ref={this.refToImg} src={this.state.imageSrc} onClick={this.roll} alt="Images for rolling"/>                           
                    </div>    <br/>                            
                    <button className="buttonGeneral" onClick={this.reset}>Start Over</button>                                                                  
                </div>  
      </React.Fragment>)
  };
  }
  
  export default ShufflePicsAndShow;
