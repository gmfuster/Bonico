import React from "react";

function DescriptionSections () {
    
        return(
            <React.Fragment>
                <div className="DescriptionSectionText"> 
                    <mark>Learning is so  much fun!</mark> And it can go on forever and ever because there is so much to learn!<br/>   <br/>
                    We have some games and activities to practice what you learn in school (Starting with Kindergarten but will be adding up).  <br/><br/>
                    <mark>Look for these on some of the activities:</mark><br/><br/>
                   <img style = {{ height:"8%", width:"8%"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/requirestouch.svg'}  alt="Requires touch screen"  />                       
                   <img style = {{ height:"8%", width:"8%"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/requiresgrownup.svg'}  alt="Requires grown up"  />    
                    <br/><br/>You can also check out these books on Amazon:
                </div>

                
                <div style={{background:"lightyellow", margin:"6px", padding:"5px", border:"3px double deepskyblue"}}>                    
                    <div className="CenterMe" >
                        <a href="https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" target="_new">
                            <img  style={{border:"3px solid navy", margin:"3px"}}  width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"} alt="Jon and his mom talk about - Amazon"/>
                        </a>
                        
                        <a  margin="10px" href="https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" target="_new">
                            <img style={{border:"3px solid navy", margin:"3px"}} width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"} alt="Jon and his mom talk about - Amazon"/>
                        </a>
                    </div>                                        
                </div>
        
                <div className="DescriptionSectionText"> 
                <br/>
                <mark>Contact me</mark> on <a href="https://twitter.com/GMFuster" target="_new">Twitter</a> or <a href="https://gmfuster.medium.com/" target="_new">
                    Medium</a> and let me know what you would like to see added.  Or anything you want to say.
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;