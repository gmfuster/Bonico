import React, {useState, useEffect} from "react";




function MemoryCards () {           
                   
    window.scroll(0,0);

    let pathForCarsPics = process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images//CarImages/";
    let questionPic = process.env.REACT_APP_FOR_PATH_FOR_PICS + "/images//clickme.svg";

    let elementsForPicsBeforeSorting = [pathForCarsPics + "darthmaul.svg", pathForCarsPics + "darthvader.svg", 
    pathForCarsPics + "lukepilot.svg", pathForCarsPics + "bb8.svg", pathForCarsPics + "falconnew.svg",
    pathForCarsPics + "clone.svg", pathForCarsPics + "pretorian.svg", pathForCarsPics + "hansolo.svg", 
    pathForCarsPics + "darthmaul.svg", pathForCarsPics + "darthvader.svg",  pathForCarsPics + "kyloren.svg", pathForCarsPics + "kyloren.svg",
    pathForCarsPics + "lukepilot.svg", pathForCarsPics + "bb8.svg", pathForCarsPics + "falconnew.svg",
    pathForCarsPics + "clone.svg", pathForCarsPics + "pretorian.svg", pathForCarsPics + "hansolo.svg"];    
    
    const [shownPics, setShownPics] = useState([questionPic,questionPic,questionPic,questionPic,questionPic,questionPic
      ,questionPic,questionPic,questionPic,questionPic,questionPic,questionPic,
      questionPic,questionPic,questionPic,questionPic,questionPic,questionPic]);
    
  

    //sort by default
    const elementsForPics = React.useRef(elementsForPicsBeforeSorting.sort(function(a, b){return 0.5 - Math.random()})).current;        
    const openCards = React.useRef([-1,-1]);    
    const needToUpdateCountersAndReset = React.useRef(true);    

    var containerStyle = {                         
            display:"grid",           
            gridTemplateColumns:"auto auto auto auto auto auto",               
            backgroundColor:"lightblue",
            padding:"5px",
            margin:"5px"
    }

    var itemStyle = {
      border:"2px solid navy"
    }

    function imageClicked(number){

      if (shownPics[number] === questionPic){
        let auxArr = [...shownPics];
        needToUpdateCountersAndReset.current = true;
        if (openCards.current[0] === -1){       

          openCards.current[0] = number;        
          auxArr[number] = elementsForPics[number];
          setShownPics([...auxArr]);        

        }else if (openCards.current[1] === -1){        
          openCards.current[1] = number;
          auxArr[number] = elementsForPics[number];        
          setShownPics([...auxArr]);                
        }   
      }               
    }

    useEffect( () => {

      if (needToUpdateCountersAndReset.current){
      
        needToUpdateCountersAndReset.current = false;//do not want to do this code again if this triggers the change state
        let auxArr = [...shownPics];
        if (openCards.current[0] !== -1 && openCards.current[1] !== -1){                                    

          if (shownPics[openCards.current[0]] === shownPics[openCards.current[1]]){
            //update countuers todo  

            openCards.current[0] = -1;
            openCards.current[1] = -1;
          }else{                                           
            auxArr[openCards.current[0]] = questionPic;
            auxArr[openCards.current[1]] = questionPic;          
            openCards.current[0] = -1;
            openCards.current[1] = -1;
            setTimeout( () => {            
              setShownPics([...auxArr]);
            }, 1000);
        
          }
      }     
    }
  
  })
      

    return(
  
      
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">            
            <div style={containerStyle}>

              <div style={itemStyle}><img width="100%" src={shownPics[0] } onClick= { () =>imageClicked(0) } /></div>
              <div style={itemStyle}><img width="100%" src={shownPics[1] } onClick= { () =>imageClicked(1)} /></div>
              <div style={itemStyle}><img width="100%" src={shownPics[2] } onClick= { () =>imageClicked(2) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[3] } onClick= { () =>imageClicked(3) }/></div>
              <div style={itemStyle}><img width="100%" src={shownPics[4] } onClick= { () =>imageClicked(4) }/></div>
              <div style={itemStyle}><img width="100%" src={shownPics[5] } onClick= { () =>imageClicked(5) }/></div>   

              <div style={itemStyle}><img width="100%" src={shownPics[6] } onClick= { () =>imageClicked(6) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[7] } onClick= { () =>imageClicked(7) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[8] } onClick= { () =>imageClicked(8) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[9] } onClick= { () =>imageClicked(9) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[10] } onClick= { () =>imageClicked(10) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[11] } onClick= { () =>imageClicked(11) }/></div>  

              <div style={itemStyle}><img width="100%" src={shownPics[12] } onClick= { () =>imageClicked(12) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[13] } onClick= { () =>imageClicked(13) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[14] } onClick= { () =>imageClicked(14) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[15] } onClick= { () =>imageClicked(15) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[16] } onClick= { () =>imageClicked(16) }/></div>  
              <div style={itemStyle}><img width="100%" src={shownPics[17] } onClick= { () =>imageClicked(17) }/></div>  

            </div> 
        </div>
  
      </React.Fragment>)
  };  
  
  export default MemoryCards;
