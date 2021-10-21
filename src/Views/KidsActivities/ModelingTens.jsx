import React, {Component} from "react";

class ModelingTens extends Component {

    constructor(props)
    {
        super(props);                  
        this.pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;
        this.state = {number:10, numberBuilt:0, arrayOfImages:[]}
        this.numberBuilt = 0;
        this.arrayOfImages = [];           
        this.sizeOfLine = "225px";
        this.sizeOfOne = "30px";
    }      

    generateRandomNumber = () => {
        return Math.floor(Math.random() * 120);      
    }
    
    /*addToArrayAndNumber = (img, n) => {       
        this.arrayOfImages.push(img);
        this.numberBuilt += n;
        this.setState( {numberBuilt:this.numberBuilt, arrayOfImages: this.arrayOfImages} );        
    }*/
    addLine = () => {        
        //let img = new Image();
        //img.src = this.pathPic + "images/ModelingTensLine.svg"        
        //img.addEventListener('onload', this.addToArrayAndNumber(img, 10));                              
        let obj = {
            imgSrc:"",
            imgSize:""
        }
        obj.imgSrc =  this.pathPic + "/images/ModelingTensLine.svg" ;
        obj.imgSize = this.sizeOfLine;
        this.arrayOfImages.push(obj);        
        this.numberBuilt += 10;
        this.setState( {numberBuilt:this.numberBuilt, arrayOfImages: this.arrayOfImages} ); 
        this.forceUpdate();        
    }
    addOne = () => {
        let obj = {
            imgSrc:"",
            imgSize:""
        }
        obj.imgSrc =  this.pathPic + "/images/ModelingTensOne.svg" ;
        obj.imgSize = this.sizeOfOne;
        this.arrayOfImages.push(obj);        
        this.numberBuilt += 1;
        this.setState( {numberBuilt:this.numberBuilt, arrayOfImages: this.arrayOfImages} ); 
        this.forceUpdate();
    }
    next = () =>{
        let num = this.generateRandomNumber();        
        this.setState({number:num});
        this.reset();
    }
    reset = () => {
        this.numberBuilt = 0;
        this.arrayOfImages = [];    
        this.setState({numberBuilt:this.numberBuilt, arrayOfImages:this.arrayOfImages});
    }
    render() {           

        var divHorContainer = {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            userSelect:"none",
            margin:"15px"
        }        
      return(  
               
      <React.Fragment>
         
        <div className="TopMarginToDealWithNavBarAll CenterMe">  
            Click on the "ten line" button or the "one" button to make the blocks for the number shown.  Click Next for another number.<br/>  
            
            <button className="buttonGeneral" onClick={ this.addLine}>
                <img src={this.pathPic + "/images/ModelingTensLine.svg"} width={this.sizeOfLine} height="25px" alt="line"/>
            </button> 
            <button className="buttonGeneral" onClick={ this.addOne}>
                <img src={this.pathPic + "/images/ModelingTensOne.svg"} width={this.sizeOfOne} height="25px" alt="one"/>
            </button> 

            <button className="buttonGeneral" onClick={ this.next}>Next!</button>  
            <button className="buttonGeneral" onClick={ this.reset}>Reset!</button>  
            
            <br/>                                                           
            <br/>

            <div style={divHorContainer}>
                <div style={{width:"25vw", height:"60vh", border:"3px solid navy", fontSize:"15vw"}}>
                    {this.state.number}
                </div>

                <div style={{width:"65vw", height:"60vh", border:"3px solid navy", padding:"5px",  overflow:"scroll"}}>
                        {this.state.arrayOfImages.map( (item, index) =>   
                        <div key={index} style={{marging:"3px"}}>                            
                            <img src={item.imgSrc} width={item.imgSize} alt={item.imgSrc}/>                                                
                        </div>                                    
                )}
                    
                </div>
                <div style={{width:"8vw", height:"60vh", border:"3px solid navy", fontSize:"6vw"}}>
                    {this.state.numberBuilt}
                </div>
            </div>
        </div>        
    </React.Fragment>
      )
  };
}


export default ModelingTens;