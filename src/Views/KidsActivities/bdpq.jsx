import React, {Component} from "react";

class bdpq extends Component {
    
  constructor(){
    super();    
    this.state = { selectedWord:"dog", 
                    words : ["dog", "pig", "pot", "dice", "dad", "dean", "done", "dare", "dunes", "pay", "put", "pie", "plant", "boy", "ball", "bed", "big", "queen",
                    "quiet", "question", "double", "distance", "delay", "dinner", "doer", "digital", "demo", "diamond", "decide", "document", "desert",
                    "put", "prison", "purse", "protest", "private", "puppy", "pondering", "peptide", "primal", "profession", "pirate", "post", "prototype",
                    "bribe", "baby", "bottle", "battle", "binary", "best", "boost", "bilingual", "border", "quest", "quarantine", "quarter"]};    
    this.refToCorrectImage = React.createRef();   
    this.refToIncorrectImage = React.createRef();       
    }
  
    generateRandomNumber = () => {
      return Math.floor(Math.random() * this.state.words.length);      
    }
    getAWordFromArray = () => {

      this.refToCorrectImage.current.style.visibility="hidden" 
      this.refToIncorrectImage.current.style.visibility="hidden" 
        var index = this.generateRandomNumber();
        var word = this.state.words[index];                
        if (word === this.state.selectedWord)
        {
          word = (index < this.state.words.length - 1)? this.state.words[index+1] : this.state.words[0];          
        }
        this.setState({selectedWord:word});     
        this.forceUpdate();                   
    }

    clickLetter = (l) => {
      var correctLetter = this.state.selectedWord[0];
      if (correctLetter === l){
        this.refToCorrectImage.current.style.visibility="visible"  
        this.refToIncorrectImage.current.style.visibility="hidden"  
      }
      else{
        this.refToCorrectImage.current.style.visibility="hidden"  
        this.refToIncorrectImage.current.style.visibility="visible"  
      }
    }

    render() {

      const path = process.env.REACT_APP_FOR_PATH ;

      return(
  
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">

              <button title="Get Word" onClick={this.getAWordFromArray} className="buttonGeneral">Get Word</button><br/>
              <br/>Choose the letter that matches the beginning of the word shown.<br/>
              <img src= {path + "/images/Language/correct.svg"} className="pbdqImages" ref={this.refToCorrectImage} style={{visibility: 'hidden'}} /> 
              {/*<button className="pbdqButton"><img src="../images/Language/P.svg" onClick={() => this.clickLetter("p")} className="pbdqImages"></img></button>*/}
              <button className="pbdqButton" onClick={() => this.clickLetter("p")} >p</button>
              <button className="pbdqButton" onClick={() => this.clickLetter("b")} >b</button>
              <button className="pbdqButton" onClick={() => this.clickLetter("q")} >q</button>
              <button className="pbdqButton" onClick={() => this.clickLetter("d")} >d</button>
              {/*}
              <button className="pbdqButton"><img src="../images/Language/b.svg" onClick={() => this.clickLetter("b")} className="pbdqImages"></img></button>
              <button className="pbdqButton"><img src="../images/Language/q.svg" onClick={() => this.clickLetter("q")} className="pbdqImages"></img></button>
              <button className="pbdqButton"><img src="../images/Language/d.svg" onClick={() => this.clickLetter("d")} className="pbdqImages"></img></button>
            */}
              <img src= {path + "/images/Language/incorrect.svg"} className="pbdqImages" ref={this.refToIncorrectImage} style={{visibility:'hidden'}}/> 
              <br/>               
              <label className="correctLetterLabel">{this.state.selectedWord[0]}</label>
              <label className="LabelBDPQ">{this.state.selectedWord.substr(1,this.state.selectedWord.length-1)}</label>              
            </div>
        
        </div>
      </React.Fragment>)
  };
  }
  
  export default bdpq;