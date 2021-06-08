
import React, {useState, useEffect} from "react";
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { generatePathForMatrixFromStartToEnd , generateRandomNumber} from "../../commonJS";
import MathOperationComponent from '../../Components/MathOperationComponent';


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
        obj.result = Math.abs(obj.first + obj.second + generateRandomNumber(10) );
        return obj;
    }


    function fillMatrix(){
        
        let path = generatePathForMatrixFromStartToEnd(5);   

        for(var x=0; x<5; x++) {            
            for(var y=0; y<5; y++) {                
                if (path.some( obj => obj.i === x && obj.j === y) ){                                                 
                    valuesMatrix.current[x][y] = getTrueResult();
                }else{                                     
                    valuesMatrix.current[x][y] = getFalseResult();                    
                }               
            }
        }                  
    }    

    fillMatrix();

    //don't forget to include slice so the refresh works
    const [row1, setRow1] = useState(valuesMatrix.current[0].slice());
    const [row2, setRow2] = useState(valuesMatrix.current[1].slice());
    const [row3, setRow3] = useState(valuesMatrix.current[2].slice());
    const [row4, setRow4] = useState(valuesMatrix.current[3].slice());
    const [row5, setRow5] = useState(valuesMatrix.current[4].slice());          

    const [idkey, setIdKey] = useState("1");     
    
   
    function goAgain(){
      
      fillMatrix();      

      setRow1(valuesMatrix.current[0].slice());
      setRow2(valuesMatrix.current[1].slice());
      setRow3(valuesMatrix.current[2].slice());
      setRow4(valuesMatrix.current[3].slice());
      setRow5(valuesMatrix.current[4].slice());

     setIdKey(idkey+1);//just used to update the background on resetting
      
      
    }

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

  let itemFont = "5vh";

  return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe" ref={mainDiv} >       
                <div style={{ width:"90%", marginLeft:"5%", marginRight:"5%"}}>
                    Click on the correct equations to move, down and right.<button className="buttonGeneral" onClick={ () => goAgain()}>Go Again</button>
                </div>
               
                <div style={containerStyle} >

                  <div style={itemStyleFixed}>START</div>
                  <div style={itemStyle}><MathOperationComponent number1= {row1[1].first} number2={row1[1].second} operator="+" result={row1[1].result} size={itemFont} key={idkey}/></div>
                  <div style={itemStyle}><MathOperationComponent number1= {row1[2].first} number2={row1[2].second} operator="+" result={row1[2].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row1[3].first} number2={row1[3].second} operator="+" result={row1[3].result} size={itemFont} key={idkey}/></div>
                  <div style={itemStyle}><MathOperationComponent number1= {row1[4].first} number2={row1[4].second} operator="+" result={row1[4].result} size={itemFont} key={idkey}/></div>
                  

                  <div style={itemStyle}><MathOperationComponent number1= {row2[0].first} number2={row2[0].second} operator="+" result={row2[0].result} size={itemFont} key={idkey}/></div>   
                  <div style={itemStyle}><MathOperationComponent number1= {row2[1].first} number2={row2[1].second} operator="+" result={row2[1].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row2[2].first} number2={row2[2].second} operator="+" result={row2[2].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row2[3].first} number2={row2[3].second} operator="+" result={row2[3].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row2[4].first} number2={row2[4].second} operator="+" result={row2[4].result} size={itemFont} key={idkey}/></div>
                  

                  <div style={itemStyle}><MathOperationComponent number1= {row3[0].first} number2={row3[0].second} operator="+" result={row3[0].result} size={itemFont} key={idkey}/></div>   
                  <div style={itemStyle}><MathOperationComponent number1= {row3[1].first} number2={row3[1].second} operator="+" result={row3[1].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row3[2].first} number2={row3[2].second} operator="+" result={row3[2].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row3[3].first} number2={row3[3].second} operator="+" result={row3[3].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row3[4].first} number2={row3[4].second} operator="+" result={row3[4].result} size={itemFont} key={idkey}/></div>
                  

                  <div style={itemStyle}><MathOperationComponent number1= {row4[0].first} number2={row4[0].second} operator="+" result={row4[0].result} size={itemFont} key={idkey}/></div>   
                  <div style={itemStyle}><MathOperationComponent number1= {row4[1].first} number2={row4[1].second} operator="+" result={row4[1].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row4[2].first} number2={row4[2].second} operator="+" result={row4[2].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row4[3].first} number2={row4[3].second} operator="+" result={row4[3].result} size={itemFont} key={idkey}/></div>
                  <div style={itemStyle}><MathOperationComponent number1= {row4[4].first} number2={row4[4].second} operator="+" result={row4[4].result} size={itemFont} key={idkey}/></div>

                  <div style={itemStyle}><MathOperationComponent number1= {row5[0].first} number2={row5[0].second} operator="+" result={row5[0].result} size={itemFont} key={idkey}/></div>   
                  <div style={itemStyle}><MathOperationComponent number1= {row5[1].first} number2={row5[1].second} operator="+" result={row5[1].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row5[2].first} number2={row5[2].second} operator="+" result={row5[2].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyle}><MathOperationComponent number1= {row5[3].first} number2={row5[3].second} operator="+" result={row5[3].result} size={itemFont} key={idkey}/></div>  
                  <div style={itemStyleFixed}>END</div>
                                        
                
              </div>

              
            </div>        
  
      </React.Fragment>)
  };  
  
  export default AdditionMaze;
