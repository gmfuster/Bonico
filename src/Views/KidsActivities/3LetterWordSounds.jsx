import React, {Component} from "react";

class ThreeLetterWordSounds extends Component {
    
    constructor(){
        super();            
        this.state = { letter0:"", letter1:"", letter2:""}  ;
        this.letter0Index=0;  
        this.letter1Index=0;  
        this.letter2Index=0;        

        this.arrayOfWordsAsLettersInterChange =  [ ["B","E","D"], ["B", "A", "N"] , ["B","E","G"], ["B","E","T"], ["B","O","X"], ["C","A","P"], ["D","I","D"],  
        ["F","A","N"], ["F","O","R"], ["F","U","N"], ["G","U","M"], ["H","A","M"], ["H","I","M"], ["H","O","P"], ["J","O","G"], ["L","E","T"], ["L","O","G"], 
        ["M","A","C"], ["M","A","N"], ["M","E","N"], ["N","A","P"], ["P","A","D"], ["P","A","N"], ["P","E","N"], ["P","E","T"], ["P","I","C"], ["P","I","N"], 
        ["P","O","P"], ["R","O","T"], ["R","U","N"], ["S","A","G"], ["S","A","T"], ["S","I","P"], ["S","I","T"], ["S","U","N"], ["T","A","N"], ["Y","E","S"] , 
        ["Y","E","T"], ["W","I","G"], ["W","E","T"], ["W","E","B"], ["W","A","S"], ["V","E","T"], ["T","U","B"], ["T","O","P"], ["T","A","X"], ["T","A","P"], 
        ["T","A","G"], ["S","O","N"], ["S","I","X"], ["S","E","T"], ["S","E","C"], ["S","A","D"], ["R","E","D"], ["R","A","T"], ["R","A","M"], 
        ["P","O","T"], ["P","O","D"], ["P","A","T"], ["P","A","L"], ["N","E","T"], ["M","I","X"], ["M","E","T"], ["M","E","D"], ["M","A","T"], 
        ["M","A","P"], ["M","A","D"], ["L","O","T"], ["L","I","P"], ["K","I","D"], ["J","O","B"], ["H","O","T"], ["H","I","P"], ["H","A","S"], ["G","O","D"], 
        ["F","O","X"], ["F","I","X"], ["F","A","R"], ["D","O","C"], ["C","A","R"],  ["B","A","D"],  
        ["B","A","G"], ["B","A","T"], ["B","I","G"], ["B","O","B"], ["B","U","T"], ["C","A","B"], ["B","I","T"], 
        ["C","A","N"], ["C","A","T"], ["C","O","D"], ["C","U","B"], ["C","U","P"], ["D","A","D"], ["D","O","G"], ["D","I","G"], ["D","O","T"], 
        ["F","A","T"], ["F","E","D"], ["F","O","G"], ["G","A","S"], ["G","O", "T"], ["H","A","D"], ["H","A","T"], ["H","E","N"], ["H","I","D"], 
        ["H","I","S"], ["H","U","G"], ["J","A","R"], ["J","E","T"], ["L","I","D"], ["L","O","W"], ["M","A","X"], ["M","O","M"], ["N","O","D"],  ["N","O","T"], 
        ["P","I","G"], ["P","U","P"], ["R","U","B"], ["S","U","M"], ["T","O","N"], ["V","A","N"], ["W","I","N"], ["W","O","N"] ];       
    }        

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    
    getLetter0 = () => {
        this.getLetter(0);
    }
    getLetter1 = () => {
        this.getLetter(1);
    }
    getLetter2 = () => {
        this.getLetter(2);
    }

    getNextDifferentLetter = (letterPositionInWord) => {
                
        let currentLetter = "";     
        let newLetter = "";  
        let newIndex = 0; 
        let foundDifferentLetter =  false;        
        let currentRowIndex = null;
        
        switch(letterPositionInWord){
            case 0:
                currentRowIndex = this.letter0Index;
                break;
            case 1:
                currentRowIndex = this.letter1Index;
                break;
            case 2:                
                currentRowIndex = this.letter2Index;
                break;
            default:
                break;
        }

        currentLetter =  this.arrayOfWordsAsLettersInterChange[currentRowIndex][letterPositionInWord];
        while (!foundDifferentLetter){
            (currentRowIndex === this.arrayOfWordsAsLettersInterChange.length -1 )? newIndex =0 : newIndex = currentRowIndex++; 
            newLetter =  this.arrayOfWordsAsLettersInterChange[newIndex][letterPositionInWord];
            if (newLetter !== currentLetter){
                foundDifferentLetter = true;
            }
        }  

        switch(letterPositionInWord){
            case 0:
                this.letter0Index = newIndex;
                break;
            case 1:
                this.letter1Index = newIndex;
                break;
            case 2:                
                this.letter2Index = newIndex;
                break;
            default:
                break;
        }        
        
        return newLetter;
    }

    getLetter = (letterNumber) => {                                        

        let nextLetter = "";        
        switch(letterNumber){
            case 0:
                {      
                    nextLetter = this.getNextDifferentLetter(0);
                    this.setState({letter0:nextLetter });                                             ;                                      
                    break;
                }
            case 1:
                {                   
                    nextLetter = this.getNextDifferentLetter(1);
                    this.setState({letter1:nextLetter });                                             ;                                      
                    break;
                }
            case 2:
                {                   
                    nextLetter = this.getNextDifferentLetter(2);
                    this.setState({letter2:nextLetter });                                             ;                                      
                    break;
                }
            default:
                break;
        }
                
    }

    render() {

        var arrayOfWordsAsLetters  = [ ["B","E","D"], ["B", "A", "N"] , ["B","E","G"], ["B","E","T"], ["B","O","X"], ["C","A","P"], ["D","I","D"], ["E","G","G"], 
        ["F","A","N"], ["F","O","R"], ["F","U","N"], ["G","U","M"], ["H","A","M"], ["H","I","M"], ["H","O","P"], ["J","O","G"], ["L","E","T"], ["L","O","G"], 
        ["M","A","C"], ["M","A","N"], ["M","E","N"], ["N","A","P"], ["P","A","D"], ["P","A","N"], ["P","E","N"], ["P","E","T"], ["P","I","C"], ["P","I","N"], 
        ["P","O","P"], ["R","O","T"], ["R","U","N"], ["S","A","G"], ["S","A","T"], ["S","I","P"], ["S","I","T"], ["S","U","N"], ["T","A","N"], ["Y","E","S"] , 
        ["Y","E","T"], ["W","I","G"], ["W","E","T"], ["W","E","B"], ["W","A","S"], ["V","E","T"], ["T","U","B"], ["T","O","P"], ["T","A","X"], ["T","A","P"], 
        ["T","A","G"], ["S","P","A"], ["S","O","N"], ["S","I","X"], ["S","E","T"], ["S","E","C"], ["S","A","D"], ["R","E","D"], ["R","A","T"], ["R","A","M"], 
        ["P","O","T"], ["P","O","D"], ["P","A","T"], ["P","A","L"], ["O","D","D"], ["N","E","T"], ["M","I","X"], ["M","E","T"], ["M","E","D"], ["M","A","T"], 
        ["M","A","P"], ["M","A","D"], ["L","O","T"], ["L","I","P"], ["K","I","D"], ["J","O","B"], ["H","O","T"], ["H","I","P"], ["H","A","S"], ["G","O","D"], 
        ["F","O","X"], ["F","I","X"], ["F","A","R"], ["D","O","C"], ["C","O","W"], ["C","A","R"],  ["B","A","D"], ["A","R","M"], ["A","R","C"], ["A","R","T"], 
        ["A","P","P"], ["A","R","E"], ["A","R","T"], ["B","A","G"], ["B","A","T"], ["B","I","G"], ["B","O","B"], ["B","U","T"], ["C","A","B"], ["B","I","T"], 
        ["C","A","N"], ["C","A","T"], ["C","O","D"], ["C","O","W"], ["C","U","B"], ["C","U","P"], ["D","A","D"], ["D","O","G"], ["D","I","G"], ["D","O","T"], 
        ["E","N","D"], ["F","A","T"], ["F","E","D"], ["F","O","G"], ["G","A","S"], ["G","O", "T"], ["H","A","D"], ["H","A","T"], ["H","E","N"], ["H","I","D"], 
        ["H","I","S"], ["H","U","G"], ["J","A","R"], ["J","E","T"], ["L","I","D"], ["L","O","W"], ["M","A","X"], ["M","O","M"], ["N","O","D"],  ["N","O","T"], 
        ["P","I","G"], ["P","U","P"], ["R","U","B"], ["S","U","M"], ["T","O","N"], ["V","A","N"], ["W","I","N"], ["W","O","N"] ];                                

        var cardStyles = {
            width:"100%",            
            textAlign: "center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",          
            alignItems:"flex-start",                            
            userSelect: "none"
        }

      return(
  
        
        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">
                Scroll down to to see a list of words you can copy paste print.<br/><br/>
                Click on a square to uncover a new letter.  It is recommended to try to make the sounds of the last 2 letters first, then add the first sound to it.<br/><br/>

                <div style={cardStyles}>                
                    <div style={{  background:"lightpink", width: "20vw", border: "outset 5px black", height:"20vw", cursor:"pointer" }} onClick={this.getLetter0}>
                    <span style={{ fontSize:"10vw" }}>{this.state.letter0}</span>                 
                    </div>   
                    <div style={{ background:"lightblue", width: "20vw", border: "outset 5px black", height:"20vw", cursor:"pointer" }} onClick={this.getLetter1}>
                    <span style={{ fontSize:"10vw" }}>{this.state.letter1}</span>                 
                    </div>   
                    <div style={{ background:"lightblue", width: "20vw", border: "outset 5px black", height:"20vw", cursor:"pointer" }} onClick={this.getLetter2}>
                    <span style={{ fontSize:"10vw" }}>{this.state.letter2}</span>                 
                    </div>                              
                   
                </div>   

                <br/><br/>
                <br/><br/>                                                             
                
                {/*use map, not foreach, map gets a new object that we show}*/}
                {arrayOfWordsAsLetters.map( (item, index) =>
                    <div>               
                        <div  style={cardStyles}>
                            <span className="letterCardsForReadingWords"> {item[1]}</span>
                            <span  className="letterCardsForReadingWords">{item[2]}</span>
                            <span  style={{color:"navy", fontSize:"10vw"}}>-</span>
                            <span className="letterCardsForReadingWords" style={{background:"lightpink"}}>{item[0]}</span>
                            <span  className="letterCardsForReadingWords">{item[1]}</span>
                            <span  className="letterCardsForReadingWords" >{item[2]}</span>                                                 
                            {/*<hr style={{height:"5px", backgroundColor:"navy" }}></hr>*/}
                        </div>                        
                        <br/>
                    </div>
                    
                    
                )}
                

                
            </div>        
        </div>
      </React.Fragment>)
  };
  }
  
  export default ThreeLetterWordSounds;