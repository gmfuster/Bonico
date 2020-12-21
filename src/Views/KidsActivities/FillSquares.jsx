import React, {Component} from "react";

class FillSquares extends Component {

    constructor()
    {
        super();          
        this.sliderMin = 0;
        this.sliderMax =10;     
        this.currentPink = 0;
        this.currentBlue = 10;    
        this.defaultClass = "MathSquareBlue";    
        this.state = {number1P:this.currentPink, number2B:this.currentBlue, squareClasses: [this.defaultClass, this.defaultClass,this.defaultClass,this.defaultClass,
            this.defaultClass,this.defaultClass,this.defaultClass,this.defaultClass,this.defaultClass,this.defaultClass]};
    }      

    getNextColorClass(colorClass){

        switch(colorClass){
            case "MathSquarePink":
                return "MathSquareBlue";                
            case "MathSquareBlue":
                return "MathSquarePink";
            case "MathSquareBlank": /*not used now*/
                return "MathSquarePink";
        }
    }

    squareClick = (sqr, index) => {        
                
        //sqr is the div
        let newColorClass = this.getNextColorClass(sqr.className)       ;        
        let currentClasses = this.state.squareClasses;
        switch(newColorClass){
            case "MathSquarePink":
                this.currentPink++;
                this.currentBlue--;
                break;
            case "MathSquareBlue":
                this.currentPink--;
                this.currentBlue++;
                break;
        }

        this.setState ({number1P:this.currentPink});
        this.setState ({number2B:this.currentBlue});
        currentClasses[index-1] = newColorClass;
        this.setState ({squareClasses: currentClasses});
        
        this.forceUpdate();
    }

    render() {                  
        var containerStyle = {
            display:"flex",
            flexDirection: "row",
            textAlign: "center",
            flexWrap: "wrap",
            justifyContent:"center",
            alignItems: "center"        
        }
        
      return(  
          
     
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">             
           Click on each square to change its color and see how it affects the equation.
           <div style={containerStyle}>
               <span style={{fontSize:"6vw"}}> 
                    <span style={{color:"deeppink"}}>{this.state.number1P} </span>+ <span style={{color:"skyblue"}}>{this.state.number2B}</span> = 10 
                </span>

               
           </div>
           <div style={containerStyle}>
                <div className={this.state.squareClasses[0]} onClick={ (e) => this.squareClick(e.currentTarget,1) }></div>
                <div className={this.state.squareClasses[1]} onClick={ (e) => this.squareClick(e.currentTarget,2)}></div>
                <div className={this.state.squareClasses[2]} onClick={ (e) => this.squareClick(e.currentTarget,3)}></div>
                <div className={this.state.squareClasses[3]} onClick={ (e) => this.squareClick(e.currentTarget,4)}></div>
                <div className={this.state.squareClasses[4]} onClick={ (e) => this.squareClick(e.currentTarget,5)}></div>
                <div className={this.state.squareClasses[5]} onClick={ (e) => this.squareClick(e.currentTarget,6)}></div>
                <div className={this.state.squareClasses[6]} onClick={ (e) => this.squareClick(e.currentTarget,7)}></div>
                <div className={this.state.squareClasses[7]} onClick={ (e) => this.squareClick(e.currentTarget,8)}></div>
                <div className={this.state.squareClasses[8]} onClick={ (e) => this.squareClick(e.currentTarget,9)}></div>
                <div className={this.state.squareClasses[9]} onClick={ (e) => this.squareClick(e.currentTarget,10)}></div>
           </div>
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default FillSquares;
