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
                        <iframe type="text/html" className="cardDiv" frameBorder="0"   title="jonandhismomtalkabout"                    
                            src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>     
                    </div>
                    

                    
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;