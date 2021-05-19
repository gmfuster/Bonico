
import React, {useState, useEffect} from "react";
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';



function MemoryCards () {           
                   
    window.scroll(0,0);
    
    let mainDiv = React.createRef();    

    let pathForCarsPics = process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images//CarImages/";
    let questionPic = process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images//clickme.svg";

    let elementsForPicsBeforeSorting = [pathForCarsPics + "darthmaul.svg", pathForCarsPics + "darthvader.svg", 
    pathForCarsPics + "lukepilot.svg", pathForCarsPics + "bb8.svg", pathForCarsPics + "falconnew.svg",
    pathForCarsPics + "clone.svg", pathForCarsPics + "pretorian.svg", pathForCarsPics + "hansolo.svg", 
    pathForCarsPics + "darthmaul.svg", pathForCarsPics + "darthvader.svg",  pathForCarsPics + "kyloren.svg", pathForCarsPics + "kyloren.svg",
    pathForCarsPics + "lukepilot.svg", pathForCarsPics + "bb8.svg", pathForCarsPics + "falconnew.svg",
    pathForCarsPics + "clone.svg", pathForCarsPics + "pretorian.svg", pathForCarsPics + "hansolo.svg",
    pathForCarsPics + "sithtrooper.svg", pathForCarsPics + "sithtrooper.svg", pathForCarsPics + "rebel.svg", pathForCarsPics + "rebel.svg", pathForCarsPics + "captainphasma.svg",pathForCarsPics + "captainphasma.svg"];    
    
    const [shownPics, setShownPics] = useState([questionPic,questionPic,questionPic,questionPic,questionPic,questionPic
      ,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,
      questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic]);
    const [playerScores, setPlayerScores] = useState([0,0]);

    //sort by default
    let elementsForPics = React.useRef(elementsForPicsBeforeSorting.sort(function(a, b){return 0.5 - Math.random()}));        
    const openCards = React.useRef([-1,-1]);    
    let needToUpdateCountersAndReset = React.useRef(true);    
    let playerScoresRef = React.useRef([0,0]);
    let currentPlayer = React.useRef(1);

    

    function imageClicked(number){

      if (shownPics[number] === questionPic){

        let auxArr = [...shownPics];
        needToUpdateCountersAndReset.current = true;
        if (openCards.current[0] === -1){       

          openCards.current[0] = number;        
          auxArr[number] = elementsForPics.current[number];
          setShownPics([...auxArr]);        

        }else if (openCards.current[1] === -1){        
          openCards.current[1] = number;
          auxArr[number] = elementsForPics.current[number];        
          setShownPics([...auxArr]);                
        }  

      }               
    }

    useEffect( () => {

      disableBodyScroll(mainDiv.current);

      if (needToUpdateCountersAndReset.current){
      
        //do not want to do this code again if this triggers the change state
        //not ideal but good for this.
        needToUpdateCountersAndReset.current = false;

        let auxArr = [...shownPics];
        if (openCards.current[0] !== -1 && openCards.current[1] !== -1){                                    

          if (shownPics[openCards.current[0]] === shownPics[openCards.current[1]]){
            //update countuers todo  

            openCards.current[0] = -1;
            openCards.current[1] = -1;

            if (currentPlayer.current === 1){              
              playerScoresRef.current = [playerScoresRef.current[0] + 1, playerScoresRef.current[1]];              
            }else{              
              playerScoresRef.current = [playerScoresRef.current[0] , playerScoresRef.current[1] + 1 ];    
            }                  

            setPlayerScores([...playerScoresRef.current]);
          }else{                                           
            auxArr[openCards.current[0]] = questionPic;
            auxArr[openCards.current[1]] = questionPic;          
            openCards.current[0] = -1;
            openCards.current[1] = -1;
            setTimeout( () => {            
              setShownPics([...auxArr]);
            }, 1000);
        
          }

          if (currentPlayer.current === 1){  
            currentPlayer.current = 2;
          }else {
            currentPlayer.current = 1;
          }
      }  
      
    
    
    
    }

    //for cleanup (will unmount)
    return function cleanup () {
      clearAllBodyScrollLocks();
    }   
  
  })
  
  function playAgain() {
    setShownPics([questionPic,questionPic,questionPic,questionPic,questionPic,questionPic
      ,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,
      questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic]);

    setPlayerScores([0,0]) ;
    elementsForPics.current = elementsForPicsBeforeSorting.sort(function(a, b){return 0.5 - Math.random()});  
    openCards.current[0] = -1;
    openCards.current[1] = -1;
    needToUpdateCountersAndReset.current = true;
    playerScoresRef.current = [0,0];    
  }

  var containerStyle = {                         
    display:"grid",        
    gridTemplateColumns: "repeat(6, 1fr)",    
    gridTemplateRows: "20vh 20vh 20vh 20vh"
}

  var itemStyle = {
    border:"2px solid navy",
    backgroundColor:"lightblue",   
  }
  var mainContainerSt = {
    position:"relative",
    display:"grid",
    width:"100vw",
    height:"85vh",
    gridTemplateColumns: "80vw 20vw"    
  }

    return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe" ref={mainDiv}>       
          <div style={mainContainerSt} > 
              
                <div style={containerStyle}>
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[0] } onClick= { () =>imageClicked(0) } /></div>
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[1] } onClick= { () =>imageClicked(1)} /></div>
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[2] } onClick= { () =>imageClicked(2) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[3] } onClick= { () =>imageClicked(3) }/></div>
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[4] } onClick= { () =>imageClicked(4) }/></div>
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[5] } onClick= { () =>imageClicked(5) }/></div>   

                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[6] } onClick= { () =>imageClicked(6) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[7] } onClick= { () =>imageClicked(7) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[8] } onClick= { () =>imageClicked(8) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[9] } onClick= { () =>imageClicked(9) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[10] } onClick= { () =>imageClicked(10) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[11] } onClick= { () =>imageClicked(11) }/></div>  

                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[12] } onClick= { () =>imageClicked(12) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[13] } onClick= { () =>imageClicked(13) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[14] } onClick= { () =>imageClicked(14) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[15] } onClick= { () =>imageClicked(15) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[16] } onClick= { () =>imageClicked(16) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[17] } onClick= { () =>imageClicked(17) }/></div>  

                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[18] } onClick= { () =>imageClicked(18) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[19] } onClick= { () =>imageClicked(19) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[20] } onClick= { () =>imageClicked(20) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[21] } onClick= { () =>imageClicked(21) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%" src={shownPics[22] } onClick= { () =>imageClicked(22) }/></div>  
                  <div style={itemStyle}><img alt="car " width="100%" height="100%"src={shownPics[23] } onClick= { () =>imageClicked(23) }/></div>  
                
              </div>

              <div style={{margin:"2px"}}>
                If 2 players, each player takes 1 turn.<br/>
                {/*<h1 style={{color:"gold"}}>Current Player: {currentPlayer.current}</h1><br/>*/}
                <h2 style={{ color:"blue"}}>Player 1:</h2>
                 <h2 style={{ color:"blue"}}>{playerScores[0]}</h2>
                <h2 style={{ color:"deeppink"}}>Player 2:</h2>
                <h2 style={{ color:"deeppink"}}>{playerScores[1]}</h2>
                <button className="buttonGeneral" onClick = { () => playAgain()}>Again</button>
              </div>
            </div>
        </div>
  
      </React.Fragment>)
  };  
  
  export default MemoryCards;
