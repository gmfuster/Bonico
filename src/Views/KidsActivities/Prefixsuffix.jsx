import React, {Component} from "react";

class Prefixsuffix extends Component {
    
    constructor(){
        super();            
        this.rootWords = ["build", "view","friendly", "fear", "color", "welcome", "try", "like", "school", "do", "buy", "order", "odor"];
        this.state = {currentWord:this.rootWords[0].toUpperCase(), prefix:"", suffix:""};                
    }        

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    next = () => {
        let i = this.rootWords.findIndex(this.state.currentWord);
        if (i < this.rootWords.length - 1 ){
            this.setState({currentWord:this.rootWords[i+1].toUpperCase()})
        } else{
            this.setState({currentWord:this.rootWords[0].toUpperCase()})
        }
    }        

    prefixsuffix = (text, ps) => {
        let prefix = "";
        let suffix = "";
        (ps.toUpperCase() === "P")?prefix = text : suffix=text;            
        this.setState({suffix:suffix, prefix:prefix});        
    }
    render() {
                                         
        var buttonStyles = {
            width:"8vw",
            heigth:"6vh",
            fontSize:"5vh"
        }
        var wordStyles = {
            width:"12vw",
            heigth:"10vh",
            fontSize:"8vh",            
            padding:"3px",            
            background:"lightblue"
        }
        var wordStylesClick = Object.assign({}, wordStyles, {cursor:"pointer", background:"lightpink"});            

      return(          
        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">
                Click on each prefix or sufix to see how they change the root word.  Click on the root to get a new word.              
                <div className="myContentsAreFlex">
                    <button className="buttonOptions" style={buttonStyles} onClick= { () => this.prefixsuffix("RE", "P")}>RE</button>
                    <button className="buttonOptions" style={buttonStyles} onClick= { () => this.prefixsuffix("PRE", "P")}>PRE</button>
                    <button className="buttonOptions" style={buttonStyles} onClick= {() => this.prefixsuffix("DIS", "P")}>DIS</button>
                    <button className="buttonOptions" style={buttonStyles} onClick= {() => this.prefixsuffix("UN", "P")}>UN</button>

                    <button className="buttonOptions" style={buttonStyles} onClick= {() => this.prefixsuffix("FUL", "S")}>FUL</button>
                    <button className="buttonOptions" style={buttonStyles} onClick= {() => this.prefixsuffix("LESS", "S")}>LESS</button>
                </div>
                
            <div className="CenterMe">
                <span style={wordStyles}>{this.state.prefix}</span>
                <span style={wordStylesClick} onClick={this.next}>{this.state.currentWord}</span>
                <span style={wordStyles}>{this.state.suffix}</span>
                    
            </div>   
               
                

                
            </div>        
        </div>
      </React.Fragment>)
  };
  }
  
  export default Prefixsuffix;