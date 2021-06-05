import React, {useState, useEffect} from "react";

function MathOperationComponent (props) {     
            

    const [color, setColor] = useState("lightblue");
    let item = React.useRef("");       
    let size = React.useRef(props.size); 

    function checkForColor ()  {            
               
        if (props.operator === "+")
        {
            if (props.number1 + props.number2 === props.result){                
                setColor("green");
            }else{
                setColor("red");                
            }
        }        
        else if (props.operator === "-") {
            if (props.number1 - props.number2 === props.result){
                setColor("green");
            }else{
                setColor("red");
            }
        }
        
    }
        
    item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;    

    useEffect( () => {
        item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[color] )

    return(
  
      
        <React.Fragment>
          {item.current}
        </React.Fragment>)
    };  
        

export default MathOperationComponent;