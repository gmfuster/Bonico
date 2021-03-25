import React from "react";

function DescriptionSections () {
    
        return(
            <React.Fragment>
                <div className="DescriptionSectionText">                                      
                    Canvas requires a touch screen.  Not designed for phone size.<br/>                                                
                </div>

                <div style={{background:"lightyellow", margin:"15px", padding:"15px"}}>
                    Contact me on <a href="https://twitter.com/GnMFuster" target="_new">Twitter</a> or <a href="https://gnmfuster.medium.com/" target="_new">Medium</a>.  
                    <br/>Check out my book on Amazon:<br/><br/>
                    <div className="CenterMe" >
                        <iframe type="text/html" className="cardDiv" frameBorder="0"   title="jonandhismomtalkabout"                    
                            src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>     
                    </div>
                    

                    
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;