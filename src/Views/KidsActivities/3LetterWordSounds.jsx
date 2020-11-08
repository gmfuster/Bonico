import React, {Component} from "react";

class ThreeLetterWordSounds extends Component {
    
  constructor(){
    super();      
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
        

      return(
  
        
        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMe">
                Read the words putting the sounds of their letters together.  Read the 2 letters first, then add the third one.  Also, ask the kid
                to identify the beginning and end sounds of the 3 letter word.<br/><br/>                                                             
                
                {/*use map, not foreach, map gets a new object that we show}*/}
                {arrayOfWordsAsLetters.map( (item, index) =>
                                   
                    <div>
                        <span className="letterCardsForReadingWorkds"> {item[1]}</span>
                        <span  className="letterCardsForReadingWorkds">{item[2]}</span>
                        <span  style={{color:"navy", fontSize:"20vh"}}>-</span>
                        <span className="letterCardsForReadingWorkds" style={{background:"lightpink"}}>{item[0]}</span>
                        <span  className="letterCardsForReadingWorkds">{item[1]}</span>
                        <span  className="letterCardsForReadingWorkds" >{item[2]}</span> 
                        <hr style={{height:"5px", backgroundColor:"navy" }}></hr>
                    </div>                        
                    
                    
                )}
                

                
            </div>        
        </div>
      </React.Fragment>)
  };
  }
  
  export default ThreeLetterWordSounds;