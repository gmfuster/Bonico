import React, {Component} from "react";
import LetterCircle from "./LetterCircle.component";
import ModelWindowWithText from "./ModelWindowWithText";

class LetterCircleList extends Component {     
     /*TODO change so we can show message when they have all been found*/   
    constructor(props){     
        super(props);        
        this.state = {theList:[], newList:[], numberPerLetter:5, containerForModal : null};
        this.numberOfLettersFound = 0;
                
        if (this.props.targetLetter === "undefined" || this.props.targetLetter === null || this.props.targetLetter === "")
            return;
        //todo add check for letterGroup being undefined and set default for it        
        if (this.props.letterGroup === "bdpq"){
            for (var i=0; i<this.state.numberPerLetter; i++){
                this.state.theList.push({id:i, value:"b"})
            }
            for (i=this.state.numberPerLetter; i< (this.state.numberPerLetter * 2); i++){
                this.state.theList.push({id:i, value:"d"})
            }
            for (i=this.state.numberPerLetter * 2; i<this.state.numberPerLetter * 3; i++){
                this.state.theList.push({id:i, value:"q"})
            }
            for (i=this.state.numberPerLetter * 3; i<this.state.numberPerLetter *4; i++){
                this.state.theList.push({id:i, value:"p"})
            }
        }else if (this.props.letterGroup === "mnw"){
            for (i=0; i<this.state.numberPerLetter; i++){
                this.state.theList.push({id:i, value:"M"})
            }
            for (i=this.state.numberPerLetter; i<this.state.numberPerLetter * 2; i++){
                this.state.theList.push({id:i, value:"N"})
            }
            for (i=this.state.numberPerLetter * 2; i<this.state.numberPerLetter * 3; i++){
                this.state.theList.push({id:i, value:"W"})
            }
        }
               
        let allDone = false;
        let theListCopy = [...this.state.theList];
        while (!allDone && theListCopy.length > 0 ){
            let index = this.generateRandomNumber(theListCopy.length);
            let newItem = {...theListCopy[index]};           
            if (!this.state.newList.find(it => it.id === newItem.id && it.value === newItem.value)){
                this.state.newList.push(newItem);  
                theListCopy.splice(index, 1)              ;
            }
            else{
                if (this.state.theList.length === this.state.newList.length){
                    allDone = true;
                }
            }
        }               
    }
       
    generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);      
    }
    
    removeModal = () => {
        this.setState( {containerForModal :null});
    }

    checkIfAllHaveBeenFound = () => {

        this.numberOfLettersFound++;
      
        if (this.numberOfLettersFound === this.state.numberPerLetter){
            this.setState( {containerForModal : <ModelWindowWithText text="Awesome! Great Job!" callbackFunction = {this.removeModal} /> }); 
        }
    }
    render() {        
        return(            
        <React.Fragment>         
            Click on one of the letters and find the <strong style={ {color:"deeppink"}}>{this.state.numberPerLetter} </strong>letters that match the selected letter. <br/>
            <div className="myContentsAreGrid1">                
                {this.state.newList.map( (circle, index) =>                  
                        <LetterCircle key={circle.id} letter={circle.value} targetLetter={this.props.targetLetter} functionToCallBack = {this.checkIfAllHaveBeenFound}/>                   
                )}    
                {this.state.containerForModal}                                                            
            </div>
        </React.Fragment>
        )
    };
}

export default LetterCircleList;