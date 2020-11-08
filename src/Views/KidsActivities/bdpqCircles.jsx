import React, {Component} from "react";
import LetterCircleList from "../../Components/LetterCircleList.component";

class bdpqCircles extends Component {
    
  constructor(){
    super();     
    this.state = {selectedLetter:""}      ;
    }
  
    generateRandomNumber = () => {
      return Math.floor(Math.random() * this.state.words.length);      
    }
    
    checkedLetter = (s) => {      
      //this.setState({selectedLetter:s}, () => {this.forceUpdateNow()});           
      this.setState({selectedLetter:s});           
    }    


    render() {
      return(
  
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">

            <div className="radio-toolbar">          
                    <input type="radio" id="b" name="letter" value="b" onChange = { () => this.checkedLetter("b")}/>
                    <label htmlFor="b">b</label>

                    <input type="radio" id="p" name="letter" value="p" onChange = { () => this.checkedLetter("p")}/>
                    <label htmlFor="p">p</label>

                    <input type="radio" id="d" name="letter" value="d" onChange = { () => this.checkedLetter("d")}/>
                    <label htmlFor="d">d</label> 

                    <input type="radio" id="q" name="letter" value="q" onChange = { () => this.checkedLetter("q")}/>
                    <label htmlFor="q">q</label> 
                </div>

                <LetterCircleList targetLetter = {this.state.selectedLetter} key={this.state.selectedLetter} letterGroup="bdpq"/> {/*give a key so it calls constructor also on rerendering*/}             
            </div>
        
        </div>
      </React.Fragment>)
  };
  }
  
  export default bdpqCircles;