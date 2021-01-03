import React, {Component} from "react";
import {Link} from 'react-router-dom';

//for grown ups - 
class PersonalInterestsSections extends Component {
    render() {

        const path = process.env.REACT_APP_FOR_PATH;

        return(
    
        <React.Fragment>            

            <div className="MainSectionContainerPersonalInterests">
                <h1 className="sectionHeaderBlue" id="PersonalInterestsSection">Hobbies</h1>
                <div className="MainSectionContainer  TopMarginToDealWithNavBar" id="" >        
                    <div >                                        
                        <iframe type="text/html" className="cardDiv" frameBorder="0"                      
                        src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>                
                    </div>
                
            
                    <div className="cardDiv">                    
                        <a href="https://www.instagram.com/feedforpositivity/" target="_new" >
                            <img src= {path +"/images/MainItemCardImages/feedforpositivity.png"} className="MainSectionItemImagePng" alt="feed for positivity"></img>    
                        </a>
                    </div>  
               

                    <div className="cardDiv">
                        <Link to= {path + "/ReadBackwards"} className="CardTextLink">
                            <img src= {path + "/images/MainItemCardImages/readBackwards.svg"} className="MainSectionItemImage" alt="Read backwards"></img>    
                        </Link>
                     </div> 

                     <div className="cardDiv">
                        <Link to= {path + "/Chinese"} className="CardTextLink">
                            <img src= {path + "/images/MainItemCardImages/Chinese.svg"} className="MainSectionItemImage" alt="Some Chinese symbols"></img>    
                        </Link>
                     </div> 
                 </div>
            </div>

            <div className="MainSectionContainerPersonalInterests">
                <h1 className="sectionHeaderBlue" id="">Programming</h1>
                <div className="MainSectionContainer  TopMarginToDealWithNavBar" id="" >  
                    <div className="cardDiv">
                        <Link to= {path + "/RemoveDupPics"} className="CardTextLink">
                         <img src= {path + "/images/MainItemCardImages/RemoveDupPics.svg"} className="MainSectionItemImage" alt="Remove duplicate pictures"
                         title="C# code to create a utility to identify duplicate images in 2 different folders"></img>    
                        </Link>
                    </div>  
                </div>               
             </div>    

        </React.Fragment>
        )};


}
export default PersonalInterestsSections;