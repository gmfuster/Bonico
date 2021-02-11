import React from "react";

function DescriptionSections () {
    
        return(
            <React.Fragment>
                <div className="DescriptionSectionText">
                    LEARNING IS AWESOME! <br/> 
                    Some activities require a touch screen.  <br/>
                    Not designed for older browsers or phone size. <br/>        
                    <br/>
                    This site is mainly for kids activities.   
                </div>

                <div style={{background:"lightyellow", margin:"15px", padding:"15px"}}>
                    You can contact me on  <a href="https://twitter.com/GnMFuster" target="_new">Twitter</a>.  You could also check out my book on Amazon:<br/><br/>
                    <div className="CenterMe" >
                    <iframe type="text/html" className="cardDiv" frameBorder="0"   title="jonandhismomtalkabout"                    
                            src="https://read.amazon.com/kp/card?asin=B08JH9GXJ9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_tKpFFbQZZHSP4" ></iframe>     
                    </div>
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;