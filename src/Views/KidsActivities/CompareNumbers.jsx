import React, {useState, useEffect} from "react";

function CompareNumbersComponent (props) {     
               
    const [line1, setLine1] = useState(<span>&nbsp;&nbsp;1   2   3   4   5   6   7   8   9  10</span>);    
    const [line2, setLine2] = useState(<span>&nbsp;&nbsp;11  12  13  14  15  16  17  18  19  20</span>); 
    const [line3, setLine3] = useState(<span>&nbsp;&nbsp;21  22  23  24  25  26  27  28  29  30</span>); 
    const [line4, setLine4] = useState(<span>&nbsp;&nbsp;31  32  33  34  35  36  37  38  39  40</span>); 
    const [line5, setLine5] = useState(<span>&nbsp;&nbsp;41  42  43  44  45  46  47  48  49  50</span>); 
    const [line6, setLine6] = useState(<span>&nbsp;&nbsp; 51  52  53  54  55  56  57  58  59  60</span>); 
    const [line7, setLine7] = useState(<span>&nbsp;&nbsp;61  62  63  64  65  66  67  68  69  70</span>); 
    const [line8, setLine8] = useState(<span>&nbsp;&nbsp;71  72  73  74  75  76  77  78  79  80</span>); 
    const [line9, setLine9] = useState(<span>&nbsp;&nbsp;81  82  83  84  85  86  87  88  89  90</span>); 
    const [line10, setLine10] = useState(<span>&nbsp;&nbsp; 91  92  93  94  95  96  97  98  99 100</span>); 
    const [line11, setLine11] = useState(<span>&nbsp;&nbsp;101 102 103 104 105 106 107 108 109 110</span>); 

    //let item = React.useRef("");       
    //let size = React.useRef(props.size);     

    //item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;        
      
/*
    useEffect( () => {
        
        item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[color] )

    useEffect( () => {
        
        item.current =  <div  style={{ width:"100%", height:"100%", background:initColor , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[props.key] )
    */

   function setUpTable(x,y) {
    //todo
   }

    var divHorContainer = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        userSelect:"none",
        margin:"15px"
    }      

    return(
  
      
        <React.Fragment>
             <div className="TopMarginToDealWithNavBarAll CenterMe">  
                <div style={divHorContainer}>
                    <div width="30vw">
                        {line1}<br/>
                        {line2}<br/>
                        {line3}<br/>
                        {line4}<br/>
                        {line5}<br/>
                        {line6}<br/>
                        {line7}<br/>
                        {line8}<br/>
                        {line9}<br/>
                        {line10}<br/>
                        {line11}<br/>
                    </div>
                </div>
             </div>
        </React.Fragment>)
    };  
        

export default CompareNumbersComponent;