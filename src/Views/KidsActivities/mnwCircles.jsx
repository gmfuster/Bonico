import React, {Component} from "react";
import LetterCircleList from "../../Components/LetterCircleList.component";
import LanguagePagesCSS from '../KidsActivities/KidsPages.css'

class mnwCircles extends Component {
    
  constructor(){
    super();     
    this.state = {selectedLetter:""}      ;
    }
  
    generateRandomNumber = () => {
      return Math.floor(Math.random() * this.state.words.length);      
    }
    
    checkedLetter = (s) => {      
      this.setState({selectedLetter:s}, this.forceUpdateNow);           
    }

    forceUpdateNow(){
      this.forceUpdate();
    }
    

    render() {
      return(
  
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">

            <div className="radio-toolbar">          
                    <input type="radio" id="M" name="letter" value="M" onChange = { () => this.checkedLetter("M")}/>
                    <label htmlFor="M">M</label>

                    <input type="radio" id="N" name="letter" value="N" onChange = { () => this.checkedLetter("N")}/>
                    <label htmlFor="N">N</label>

                    <input type="radio" id="W" name="letter" value="W" onChange = { () => this.checkedLetter("W")}/>
                    <label htmlFor="W">W</label>                    
                </div>

                <LetterCircleList targetLetter = {this.state.selectedLetter} key={this.state.selectedLetter} letterGroup="mnw"/>    {/*give a key so it calls constructor also on rerendering*/}             
            </div>
        
        </div>
      </React.Fragment>)
  };
  }
  
  export default mnwCircles;