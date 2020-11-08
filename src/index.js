import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './index.css';
import './Views/KidsActivities/KidsPages.css';

import LandingPage from "./Views/LandingPage/LandingPage";
import NavBar from "./Components/NavBar.js";


//additional pages
import bdpq from "./Views/KidsActivities/bdpq";
import bdpqCircles from "./Views/KidsActivities/bdpqCircles";
import mnwCircles from "./Views/KidsActivities/mnwCircles";
import CanvasTrace from "./Views/KidsActivities/CanvasTrace";
import GreaterLessEqual from "./Views/KidsActivities/greaterLessEqual";
import ThreeLetterWordSounds from "./Views/KidsActivities/3LetterWordSounds";
import BeginEndSounds from "./Views/KidsActivities/BeginEndSounds";
import ThreeLetterRhymes from "./Views/KidsActivities/3LetterRhymes";
import PlusOnePlusZero from "./Views/KidsActivities/PlusOnePlusZero";
import MinorPrintables from "./Views/KidsActivities/minorPrintables";

import CSSAnimations from "./Views/SoftwareNotes/cssanimations";
import CSSPositioning from "./Views/SoftwareNotes/csspositioning";
import ReactNotes1 from "./Views/SoftwareNotes/reactnotes1";
import ReadBackwards from "./Views/PersonalInterests/ReadBackwards";


/*change to common page for all circle letters if adding any more*/

const routing = (
    <React.Fragment>   
        <div className="fragmentContainer"> {/*use for some styling only*/}
        
        <NavBar/>           
        
         <Router>
            <div>
                <Switch>
                    <Route exact path = "/" component={LandingPage}/>
                    <Route exact path = "/bdpq" component={bdpq}/>
                    <Route exact path = "/bdpqCircles" component={bdpqCircles}/>
                    <Route exact path = "/mnwCircles" component={mnwCircles}/> 
                    <Route exact path = "/CanvasTrace" component={CanvasTrace}/>                      
                    <Route exact path = "/GreaterLessEqual" component={GreaterLessEqual}/>  
                    <Route exact path = "/threeLetterWordSounds" component={ThreeLetterWordSounds}/>  
                    <Route exact path = "/threeLetterRhymes" component={ThreeLetterRhymes}/>  
                    <Route exact path = "/BeginEndSounds" component={BeginEndSounds}/>  
                    <Route exact path = "/PlusOnePlusZero" component={PlusOnePlusZero}/>  
                    <Route exact path = "/MinorPrintables" component={MinorPrintables}/>  

                    <Route exact path = "/CSSAnimations" component={CSSAnimations}/>  
                    <Route exact path = "/CSSPositioning" component={CSSPositioning}/>  
                    <Route exact path = "/ReactNotes1" component={ReactNotes1}/>  
                    
                    <Route exact path = "/ReadBackwards" component={ReadBackwards}/>                      
                    
                </Switch>              
            </div>
        </Router> 
        
        </div>   
    </React.Fragment>
    
)



ReactDOM.render(           
        routing ,      
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
