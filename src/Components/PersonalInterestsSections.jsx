import React from "react";
import LandingPageCardComponent , {LandingPageCardComponentForHref} from "./LandingPageCardComponent";


function PersonalInterestsSections () {
            
        window.scrollTo(0,0);
        return(
    
        <React.Fragment>            

            <div className="TopMarginToDealWithNavBarAll">
                <div className="CenterMyBorder" style={{border:"0px"}}>
                Hello!! I'm Gemma, a software dev. who enjoys coding and learning.  
                Check out some of the things I have been doing here (besides this site) and some of my interests.<br/>                                                                                                                                           
                    
                I am interested in web development, .NET, data science / machine learning, open source.  And learning a bit of this and a bit of that.  I have a curious mind.
                </div>
                <br/>

                {/*}
                <div className="MainSectionContainerPersonalInterests">                            
                    <div className="MainSectionContainer  TopMarginToDealWithNavBar" id="" >        
                    <div className="CenterMe" >
                    <a href="https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" target="_new">
                            <img  style={{border:"3px solid navy", margin:"3px"}}  width="250" heigth="250px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"} alt="Jon and his mom talk about - Amazon"/>
                        </a>
                        
                        <a  margin="10px" href="https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" target="_new">
                            <img style={{border:"3px solid navy", margin:"3px"}} width="250" heigth="250px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"} alt="Jon and his mom talk about - Amazon"/>
                        </a>
                    </div>                                       
                    </div>
                </div>
                */}

                <div className="MainSectionContainerActivities MainSectionContainerPersonalInterests">  
                    <LandingPageCardComponentForHref href = "https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"}borderColorClass= "cardDivNavy"                  
                    text="I wrote about an Adoption story - bilingual (Amazon)"/>  

                    <LandingPageCardComponentForHref href = "https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"}borderColorClass= "cardDivNavy"                  
                    text="I wrote about a Kid and mom's talks (Amazon)"/>  

                    <LandingPageCardComponentForHref href = "https://www.freecodecamp.org/" fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/pencils.jpg"} borderColorClass= "cardDivNavy"                  
                        text="translation and some fixes for freecodecamp (crowdin, Ghost, GitHub))"/>  
                    
                    <LandingPageCardComponentForHref href = "https://gmfuster.medium.com/" fullPath = {process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/mediumLogo.png"} borderColorClass= "cardDivNavy"                  
                        text="Check out my Medium articles"/>  



                    <LandingPageCardComponent topic = "/ReadBackwards" imageSrc = "/images/MainItemCardImages/readBackwards.svg" borderColorClass= "cardDivNavy"                  
                    text="Reading backwards is good exercise."/>  
                    <LandingPageCardComponent topic = "/Chinese" imageSrc = "/images/MainItemCardImages/Chinese.svg" borderColorClass= "cardDivNavy"
                    text="Some Chinese symbols"/>                
                </div>

                <br/>                
                
            </div>
        </React.Fragment>
    );
}
export default PersonalInterestsSections;