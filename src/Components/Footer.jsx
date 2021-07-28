import React from 'react';
import {Link as ReactLink} from 'react-router-dom';

function FoorterInfo(props) {

    const pathPic = process.env.REACT_APP_FOR_PATH_FOR_PICS;
    const path = process.env.REACT_APP_FOR_PATH ;

    return (<div className="CenterMe">

            <div style={{width:"100vw", background:"skyblue", marginBottom:"5vh"}}>
                {/*}
                <a href="https://twitter.com/GMFuster" target="_new"><img alt="Twitter"
                                src= {pathPic + "/images/Twitter_Logo_Blue.svg"}
                                width="60px"
                                height="60px"
                                margin="5px"
                                className="rounded-circle d-inline-block align-top"
                            /> 
                </a>

                <a href="https://gmfuster.medium.com/" target="_new">
                    <img alt="Medium"
                                src= {pathPic + "/images/mediumLogo.png"}
                                width="60px"
                                height="60px"
                                margin="5px"
                                className="rounded-circle d-inline-block align-top"
                            /> 
                </a>
       {*/}         

                <a href="https://www.youtube.com/channel/UCRzxDsd0WvJza0BxaIRiQnA" target="_new">
                            <img alt="YouTube"
                                src= {pathPic + "/images/youtube_social_icon_red.png"}
                                width="60px"
                                height="60px"
                                margin="5px"
                                className="d-inline-block align-top"
                            /> 
                </a>
                 &nbsp;
                 {/*}
                <ReactLink to= {path + "/PersonalInterestsSection"} >
                    <img alt="About Me"
                                src= {pathPic + "/images/AboutMe.svg"}
                                width="60px"
                                height="60px"
                                margin="5px"
                                className="d-inline-block align-top"
                            /> </ReactLink>     
{*/}
            </div>

        </div>);
 }

 export default FoorterInfo;
