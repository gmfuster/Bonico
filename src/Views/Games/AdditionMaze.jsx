
import React, {useState, useEffect} from "react";
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { generateRandomNumber } from "../../commonJS";


function AdditionMaze () {           
                   
    window.scroll(0,0);
    
    let mainDiv = React.createRef();    

    //just set something up so it's not undefined.  Always have only 5*5
    let mat = [];
    for(var i=0; i<5; i++) {
        mat[i] = [];
        for(var j=0; j<5; j++) {
          mat[i][j] = 0;
        }
    }

    let valuesMatrix = React.useRef(mat);    
    
    function getTrueResult(){
        let obj = { first : generateRandomNumber(10), second : generateRandomNumber(10),result: 0 }        ;
        obj.result = obj.first + obj.second;
        return obj;
    }

    function getFalseResult(){
        let obj = { first : generateRandomNumber(10), second : generateRandomNumber(10),result: 0 }        ;
        obj.result = Math.abs(obj.first + obj.second + generateRandomNumber(10) - generateRandomNumber(5));
        return obj;
    }

    function getInitialPositionAndTrueEq(){
        //get whether we start on column on row
        let number = generateRandomNumber(2);
        let obj = getTrueResult();

        if (number === 1){
            //cell to the right
            valuesMatrix.current[0,1] = obj;
            return [0,1]
        } else{
            //cell to the bottom
            valuesMatrix.current[1,0] = obj;
            return [1,0];
        }        
    }

    function createMatrixPath(){

        let initPos = getInitialPositionAndTrueEq();

        //get random numbers for the addition
        let number1 = generateRandomNumber(10);  
        let number2 = generateRandomNumber(10);  


        console.log(valuesMatrix.current);
    }
    function fillMatrix(){
        //once we have the path, just fill the other cells with invalid equations.
    }
        

    createMatrixPath();

    useEffect( () => {

        disableBodyScroll(mainDiv.current);
        //setPlayerScores([...playerScoresRef.current]);         
        //for cleanup (will unmount)
        return function cleanup () {
            clearAllBodyScrollLocks();
        }     
    })
  

  var containerStyle = {                         
    display:"grid",        
    gridTemplateColumns: "repeat(5, 1fr)",    
    gridTemplateRows: "15vh 15vh 15vh 15vh 15vh"
}

  var itemStyle = {
    border:"2px solid navy",
    backgroundColor:"lightblue",   
  }
  var itemStyleFixed = {
    border:"2px solid navy",
    backgroundColor:"deeppink", 
    color:"white"  ,
    fontSize:"7vh"
  }  

    return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe" ref={mainDiv}>       
                <div style={{ width:"90%", marginLeft:"5%", marginRight:"5%"}}>
                    Follow the correct equations to get to the END (Up Down Left Right only)<button className="buttonGeneral" >Go Again</button>
                </div>
               
                <div style={containerStyle}>

                  <div style={itemStyleFixed}>START</div>
                  <div style={itemStyle}></div>
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>
                  <div style={itemStyle}></div>

                  <div style={itemStyle}></div>   
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  

                  <div style={itemStyle}></div>   
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div> 

                  <div style={itemStyle}></div>   
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div> 

                  <div style={itemStyle}></div>   
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyle}></div>  
                  <div style={itemStyleFixed}>END</div>          
                
              </div>

              
            </div>        
  
      </React.Fragment>)
  };  
  
  export default AdditionMaze;
