import React, {Component} from "react";

class  ReadBackwards extends Component {
  //add radiot buttons for other options since rss may stop working soon, since other rss don't authorize.  Maybe an API for twitter or news.
  constructor(){
    super();               
    this.state = { url:"https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",titleDesc:[] }        
       
    this.getRssFeed();    
    }
       
    async getRssFeed(){         
      let url = this.state.url;         
      let response = await fetch(url);      
      let xmlText = "";   
      var xmlDoc = ""      
                  
      xmlText = await response.text();      
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlText, "text/xml");                 
      
      let arrayOfNews = [];            
      for (var i=0; i< 20; i++){    
        let obj = {title:"", desc:""};    
        try{
          obj.title = xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
          obj.desc = xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue;          
        }catch{          
          obj.title = "";
          obj.desc = "";
        }
        arrayOfNews.push(obj);
      }            
      this.setState( {titleDesc:arrayOfNews} )      
    }
   
    render() {      
      var revStyleTitle = {              
        transform: "scale(-1, 1)",
        color:"deeppink",
        fontFamily:"Times New Roman",               
        fontSize: "50px",
        
      };
      var revStyleDesc = {        
        transform: "scale(-1, 1)",
        fontFamily:"Arial",            
        fontSize: "40px",       
      };
      var revStyleOrig = {                
        fontFamily:"Times New Roman",            
        fontSize: "15px",       
        color:"green"
      };
      return(        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMyBorder" >
                <strong>Reading backwards is good for you!</strong><br/>
                Direction is right to left and the letters are rotated. <br/> I chose the NYT feed because it works and I didn't want to call an API that needs a key,
                which is pretty much all of them.  It this feed stops working then I'll think of something else.
                <br/><br/>     
                
                <span style={revStyleOrig}>{this.state.url}</span>
                {this.state.titleDesc.map( (obj, index) =>  
                        <div key={index}>
                          <div style={revStyleTitle}>{obj.title}</div>  
                          <div style={revStyleOrig}>{obj.title}</div>          
                          <div style={revStyleDesc}>{obj.desc}</div>
                          <div style={revStyleOrig}>{obj.desc}</div>
                          <hr/>
                          <br/>
                        </div>                
                                          
                )};                   
            </div>
        
        </div>
      </React.Fragment>)
  };
}

export default ReadBackwards;

