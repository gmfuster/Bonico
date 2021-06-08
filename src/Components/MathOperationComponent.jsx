import React, {useState, useEffect} from "react";

function MathOperationComponent (props) {     
            
    let initColor =  React.useRef("lightblue");
    const [color, setColor] = useState(initColor);
    let item = React.useRef("");       
    let size = React.useRef(props.size);     

    item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;        
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

    useEffect( () => {
        
        item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[color] )

    useEffect( () => {
        
        item.current =  <div  style={{ width:"100%", height:"100%", background:initColor , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[props.key] )


    return(
  
      
        <React.Fragment>
          {item.current}
        </React.Fragment>)
    };  
        

export default MathOperationComponent;