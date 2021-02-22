import React, {Component} from "react";

class Prefixsuffix extends Component {
    
    constructor(){
        super();            
        //should be hardcoded with all lowercase but code is checking anwaway
        this.rootWords = ["build", "view","friendly", "fear", "color", "welcome", "try", "like", "paint","school", "do", "buy", "order", "odor", "play", "walk"];
        this.state = {currentWord:this.rootWords[0].toUpperCase(), prefix:"", suffix:""};                
    }        

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    next = () => {
        
        let word = this.state.currentWord.toLowerCase();
        let i = this.rootWords.findIndex( item => item.toLowerCase() === word.toLowerCase());        

        
        this.setState({currentWord:this.rootWords[i+1].toUpperCase(), prefix:"", suffix:""})
        
    }        

    prefixsuffix = (text, ps) => {
        let prefix = "";
        let suffix = "";
        (ps.toUpperCase() === "P")? prefix = text : suffix=text;            
        this.setState({suffix:suffix, prefix:prefix});        
    }
    render() {
                                         
        var buttonStylesPre = {
            width:"8vw",
            heigth:"8vh",
            fontSize:"3vw" ,
            background:"lightgreen"           
        }
        var buttonStylesSuf = Object.assign({}, buttonStylesPre, {background:"yellow"});          

        var wordStylesPre = {                       
            fontSize:"12vh",                                 
            background:"lightblue",
            borderTop:"5px solid navy",
            borderBottom:"5px solid navy",
            background:"lightgreen"
        }
        var wordStylesClick = Object.assign({}, wordStylesPre, {cursor:"pointer", background:"lightblue"});    
        var wordStylesSuf = Object.assign({}, wordStylesPre, {background:"yellow"});    

      return(          
        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">
                Click on each prefix or sufix to see how they change the root word.  Click on the root to get a new word.              
                <div className="myContentsAreFlex">
                    <button className="buttonOptions" style={buttonStylesPre} onClick= { () => this.prefixsuffix("RE", "P")}>RE</button>
                    <button className="buttonOptions" style={buttonStylesPre} onClick= { () => this.prefixsuffix("PRE", "P")}>PRE</button>
                    <button className="buttonOptions" style={buttonStylesPre} onClick= {() => this.prefixsuffix("DIS", "P")}>DIS</button>
                    <button className="buttonOptions" style={buttonStylesPre} onClick= {() => this.prefixsuffix("UN", "P")}>UN</button>

                    <button className="buttonOptions" style={buttonStylesSuf} onClick= {() => this.prefixsuffix("FUL", "S")}>FUL</button>
                    <button className="buttonOptions" style={buttonStylesSuf} onClick= {() => this.prefixsuffix("LESS", "S")}>LESS</button>
                    <button className="buttonOptions" style={buttonStylesSuf} onClick= {() => this.prefixsuffix("ED", "S")}>ED</button>
                </div>
                
            <div className="CenterMe">
                <span style={wordStylesPre}>{this.state.prefix}</span>
                <span style={wordStylesClick} onClick={this.next}>{this.state.currentWord}</span>
                <span style={wordStylesSuf}>{this.state.suffix}</span>
                    
            </div>   
               
                

                
            </div>        
        </div>
      </React.Fragment>)
  };
  }
  
  export default Prefixsuffix;