import React from "react";
import {Link} from 'react-router-dom';

function LandingPageCardComponent (props) {

    const path = process.env.REACT_APP_FOR_PATH;   
    const pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;
    const topic = props.topic
    const imgSrc = props.imageSrc;
    var classN = "cardDiv";
    
    if (props.borderColorClass !== undefined){
        classN = "cardDiv " + props.borderColorClass;
    }
    

    var st =  {
        display:"flex",
        flexDirection: "row",        
    }
    return(
        <div className= {props.borderColorClass}  style={{margin:"1vw", borderLeft:"0px", borderRadius:"25px", }}>
            <div style={st}>
                <div className={classN}>
                    <Link to= {path  + topic } className= "CardTextLink" >                                                    
                        <img src= {pathPic + imgSrc} className="MainSectionItemImage" alt={topic}></img>   
                    </Link>                   
                </div >
                <div className="cardDiv2" style={{display: "flex", justifyContent: "center", alignItems:"center", margin:"2px", fontSize:"2.5vh"}}>
                    <div >
                        {props.text}
                    </div>
                </div>
            </div>            
        </div>
    )

}

export default LandingPageCardComponent ;