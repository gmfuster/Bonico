import React from "react";


function ModelWindowWithText (props) {
    
    let posTop = ( 100/2 - (30/2)); //leaving like this to show the thinking
    let posLeft = ( 100/2 - (30/2)); //leaving like this to show the thinking
    
    let modalStyle = {
        width:"30vw",
        height:"30vh",
        position:"absolute",
        top:posTop+"vh",
        left:posLeft+"vw",
        background:"lightblue",
        border:"solid navy 5px",
        borderRadius:"4%" ,
        display:"flex",
        flexDirection:"column"        
    }


    
    return(
        <React.Fragment>
            <div style={modalStyle}>
                <div style={{ position:"absolute", right:"0px"}}><button onClick={ () => { props.callbackFunction();} }>X</button></div>
                <div style={{ margin:"8%"}}>{props.text}</div>
            </div>
        </React.Fragment>
    )
}

export default ModelWindowWithText;

