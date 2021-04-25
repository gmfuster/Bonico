import React from "react";
import LandingPageCardComponent from "./LandingPageCardComponent";

function PersonalInterestsSections () {
            
        window.scrollTo(0,0);
        return(
    
        <React.Fragment>            

            <div className="TopMarginToDealWithNavBarAll">
                <div className="CenterMyBorder">
                Hello! I am a software dev. but I can't work full time at the moment.  I love programming though so during this time I am: <br/>                                
                    <ul>
                        <li>Adding activities to this little site (first web dev I do, never got to do it at work)</li>
                        <li>Writing children's books.
                            <ul>
                                <li>
                                    <a href="https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_7K52TBWB3SSPMTB418EX" target="_new">Jon and his mom talk about...</a>
                                </li>
                                <li>
                                    <a href="https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" target="_new">How did you get me?</a>
                                </li>
                            </ul>
                        </li>
                        <li>Learning/relearning with <a href="https://www.freecodecamp.org/" target="_new">www.freecodecamp.org/.</a></li>
                        <li>Helping translate curriculum and articles into Spanish for freecodecamp (mentioned above). </li>
                        <li>Writing some of my notes on <a href="https://gmfuster.medium.com/" target="_new">https://gmfuster.medium.com/</a> </li>
                        
                    </ul>
                    I am interested in web development, .NET, and data science, and a few more things.  Scroll down to see.
                </div>
                <br/>

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
                <div className="MainSectionContainerActivities MainSectionContainerPersonalInterests">  
                    {/*the component already has the cardDiv class, send only the one that sets the color: cardDivAll, cardDivLang}  TODO use better names for the color class*/}
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