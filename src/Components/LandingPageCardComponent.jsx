import React from "react";
import {Link} from 'react-router-dom';

function LandingPageCardComponent (props) {

    const path = process.env.REACT_APP_FOR_PATH;   
    const pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;
    const topic = props.topic
    const imgSrc = props.imageSrc;
    
    var classN = "";//this used to be cardDiv but not used anymore, leave here in case I change it back
    
    if (props.borderColorClass !== undefined){
        classN = classN + props.borderColorClass;
    }
    
    classN += " forHoverEffect";

    var st =  {
        display:"flex",
        flexDirection: "row",           
    }
        
    return(
        <div className= {classN}  style={{margin:"1vw"}}>

            <Link to= {path  + topic } style={{ textDecoration:"none"}}  >     
                <div style={st}>
                    <div className="cardDivNoHover">                                                                   
                            <img src= {pathPic + imgSrc} className="MainSectionItemImage" alt={topic}></img>                                      
                    </div >
                    <div className="cardDiv2" style={{display: "flex", justifyContent: "center", alignItems:"center", margin:"2px", fontSize:"2.5vh"}}>
                        <div >
                            {props.text}
                        </div>
                    </div>
                </div>   
            </Link>    
            {/*}
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
            {*/}


        </div>
    )

}

function LandingPageCardComponentForHref(props){

    const path = process.env.REACT_APP_FOR_PATH;   
    const pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;
    const href = props.href
    const fullPath = props.fullPath;
    
    var classN = "";//this used to be cardDiv but not used anymore, leave here in case I change it back
    
    if (props.borderColorClass !== undefined){
        classN = classN + props.borderColorClass;
    }
    
    classN += " forHoverEffect";

    var st =  {
        display:"flex",
        flexDirection: "row",           
    }
        
    return(
        <div className= {classN}  style={{margin:"1vw"}}>

            <a href= {href } style={{ textDecoration:"none"}} target="_new" >     
                <div style={st}>
                    <div className="cardDivNoHover" >                                                                   
                            <img src= {fullPath} className="MainSectionItemImage" alt={href} ></img>                                      
                    </div >
                    <div className="cardDiv2" style={{display: "flex", justifyContent: "center", alignItems:"center", margin:"2px", fontSize:"2.5vh"}}>
                        <div >
                            {props.text}
                        </div>
                    </div>
                </div>   
            </a>                

        </div>
    )
}

export {LandingPageCardComponentForHref};
export default LandingPageCardComponent;
