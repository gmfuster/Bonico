import React from "react";
import {Link as ReactLink} from 'react-router-dom';

function DescriptionSections () {
    
    const path = process.env.REACT_APP_FOR_PATH ;

        return(
            <React.Fragment>
                <div className="DescriptionSectionText">  
                    <br/>                  
                    <img style = {{ height:"30Vh", width:"90vw"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/validdevices.svg'}  alt="valid devices computer tablet"  />     <br/>                                                         
                    <br/><br/>
                    <img style = {{ height:"30Vh", width:"85vw"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/someactivities.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                
                <br/>
                
                <div style={{position:"relative"}}>
                    
                    <div style={{background:"teal", margin:"5vw", padding:"4vh", border:"5px double salmon", height:"400px" }}>    
                        <div style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end"}} >
                            <a href="https://www.amazon.com/dp/B092V2CRNF/ref=cm_sw_em_r_mt_dp_5VRHWY06VPRX9RT2QNZ2" target="_new" >
                                <img  style={{border:"3px solid navy", margin:"3px"}}  width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/howdidyougetme.jpg"} alt="How did you get me? - Amazon"/>
                                <br/>
                                <img style = {{ height:"50px", width:"50px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                            </a>
                            
                            <a  margin="10px" href="https://www.amazon.com/dp/B08JF5KNK8/ref=cm_sw_em_r_mt_dp_KJKC4PN7CP3HR4Z33DJR" target="_new">
                                <img style={{border:"3px solid navy", margin:"3px"}} width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/jonandhismomtalkabout.jpg"} alt="Jon and his mom talk about - Amazon"/>
                                <br/>
                                <img style = {{ height:"50px", width:"50px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                            </a>
                            <a  margin="10px" href="https://www.amazon.com/dp/B09MZXWQH8/ref=cm_sw_em_r_mt_dp_6RXHBN5RMYVHNW0J3WHD" target="_new">
                                <img style={{border:"3px solid navy", margin:"3px"}} width="175px" heigth="175px" src={process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images/gettingthere.jpg"} alt="I'm not enlightened but I'm getting there- Amazon"/>
                                <br/>
                                <img style = {{ height:"50px", width:"50px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/clickme.svg'}  alt="some activities require grown uptouch screen"  />                                                              
                            </a>
                        </div>                                                                                        
                    </div>

                    <br/>

                    <div style = {{position:"absolute", bottom:"0%"}} >
                        <img style = {{ height:"325px", width:"85vw"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/wewrote.svg'}  alt="what we wrote"  />                                                              
                    </div>
                    <br/>                    
                </div>
        
                <br/><br/>
                <div>
                    <ReactLink to= {path + "/MinorPrintables"}>
                        <img style = {{ height:"250px", width:"85vw"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/getPDFs.svg'}  alt="PDFs to print"  />                                                              
                    </ReactLink>  
                </div>
                <br/><br/>
                <div class="markClassCardWholeBlue" style={{marginLeft:"5vw", marginRight:"5vw"}}>Just for Fun</div>
                <div style={{marginLeft:"5vw", marginRight:"5vw", background:"teal",  border:"5px double salmon", height:"400px" }}>    
                    <br/>
                        <div style={{ display:"flex", flexDirection:"row", justifyContent:"center"}} >                            
                            <ReactLink to= {path + "/MemoryCards"} className="selectOnHover">
                                <img style = {{ height:"300px", width:"300px", border:"lightyellow solid 4px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/readbackwards.svg'}  alt="read backwardst"  />                                                              
                            </ReactLink>                                                                                      
                            <ReactLink to= {path + "/MinorPrintables"} className="selectOnHover">
                                <img style = {{ height:"300px", width:"300px", border:"lightyellow solid 4px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/memorycardgame.svg'}  alt="memry card game"  />                                                              
                            </ReactLink>                              
                        </div>                                                                                        
                    </div>


                <div className="DescriptionSectionText"> 
                <br/><br/>
                Go to the top menu to see what you can learn and practice.
                </div>
                </div>
            </React.Fragment>
        )
};
        

export default DescriptionSections;