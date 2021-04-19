import React from "react";

function DescriptionSections () {
    
        return(
            <React.Fragment>
                <div className="DescriptionSectionText">                                                         
                   <img style = {{ height:"8%", width:"8%"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/requirestouch.svg'}  alt="Requires touch screen"  />    
                   Look for these on some of the activities
                   <img style = {{ height:"8%", width:"8%"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/requiresgrownup.svg'}  alt="Requires grown up"  />    
                </div>

                <div style={{background:"lightyellow", margin:"15px", padding:"15px"}}>                    
                    <div className="CenterMe" >
                        <a href="https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" target="_new">
                            <img  style={{border:"3px solid navy", margin:"3px"}}  width="250" heigth="250px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"} alt="Jon and his mom talk about - Amazon"/>
                        </a>
                        
                        <a  margin="10px" href="https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" target="_new">
                            <img style={{border:"3px solid navy", margin:"3px"}} width="250" heigth="250px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"} alt="Jon and his mom talk about - Amazon"/>
                        </a>
                    </div>
                    

                    
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;