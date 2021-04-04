import React, {Component} from "react";
import TextFieldWithButton from "../../Components/TextFieldWithButton";

class CanvasTrace extends Component {
        
    canvasX = 0;
    canvasY = 0;
    touchX=0;
    touchY=0;

    constructor()
    {
        super();
        this.state = {textForCanvas : ""};
        this.refToCanvas = React.createRef();          
        window.addEventListener('resize', this.handleResize);
    }
    componentDidMount(){
        this.getCanvasPosition();
        //need to reset this to get the accurate touch points
        this.refToCanvas.current.width = this.refToCanvas.current.clientWidth;
        this.refToCanvas.current.height = this.refToCanvas.current.clientHeight;    
        this.refToCanvas.current.addEventListener('touchstart', this.canvasTouchStart, {passive:false})    ;
        this.refToCanvas.current.addEventListener('touchmove', this.canvasTouchMove, {passive:false})    ;
    }
          
    handleResize = () => {        
        this.getCanvasPosition();
        //need to reset this to get the accurate touch points
        //changing the following resets the canvas contents
        this.refToCanvas.current.width = this.refToCanvas.current.clientWidth;
        this.refToCanvas.current.height = this.refToCanvas.current.clientHeight;        
    }
    //make sure there is no scrolling or can't use the canvas

    /*POSITIONING START*/
    GetOffset = (object, offset) => {
        
        if (!object)
            return;
        offset.x += object.offsetLeft;
        offset.y += object.offsetTop;
                
        this.GetOffset(object.offsetParent, offset);
    }
    GetScrolled = (object, scrolled) => {
        if (!object)
            return;
        scrolled.x += object.scrollLeft;
        scrolled.y += object.scrollTop;
        
        if (object.tagName.toLowerCase() !== "html") {
            this.GetScrolled(object.parentNode, scrolled);
        }        
    }
    getCanvasPosition = () => {    
        
        if (this.refToCanvas != null && this.refToCanvas.current != null)    
        {            
            var offset = { x: 0, y: 0 };            
            this.GetOffset(this.refToCanvas.current, offset);
        
            var scrolled = { x: 0, y: 0 };            
            this.GetScrolled(this.refToCanvas.current.parentNode, scrolled);            
        
            this.canvasX = offset.x - scrolled.x ;                        
            this.canvasY = offset.y - scrolled.y ;            
        }
    }
    getTouchPosition = (e, canvas) => {
        
        if (!e)
            return;
    
        if (e.touches) {    
            if (e.touches.length === 1) {                        
                var touch = e.touches[0];
                this.touchX = touch.pageX - this.canvasX;
                this.touchY = touch.pageY - this.canvasY;                  
            }    
        }
    }
    drawDot = (ctx) => {
            
        ctx.fillStyle = "red";
        ctx.beginPath();            
        ctx.fillRect(this.touchX,this.touchY, 10, 10);
        ctx.closePath();
        ctx.fill();
    
    } 
    /*POSITIONING END*/

    /*UPDATE CANVAS START*/
    updateCanvas = (txt) => {                   
        this.setState( {textForCanvas: txt}, this.setCanvasText);  
    }

    setCanvasText = () => {        
                
        var ctx = this.refToCanvas.current.getContext("2d");                 
        ctx.clearRect(0, 0, this.refToCanvas.current.width, this.refToCanvas.current.height);                
        //set size to biggest possible that will fit
        //using ratio of 150c/110f=> c => 150/110 => 1.36 => 0.73 ==> just a bit smaller
        var fonts = this.refToCanvas.current.height * 0.63;//default size
        //var fonts = this.refToCanvas.current.width * 0.40;        
        fonts = Math.round(fonts);        
        ctx.font = `${fonts}px Arial`;         
        // lower the font size until the text fits the canvas
        while(ctx.measureText(this.state.textForCanvas).width>this.refToCanvas.current.width){
            fonts--;
            ctx.font=`${fonts}px Arial`; 
        }      
        //once size is reduced to fit, make a bit smaller so it's not all the way to the edge
        fonts = fonts -25;
        ctx.font=`${fonts}px Arial`; 
        ctx.strokeText(this.state.textForCanvas, 50 , fonts); //50 so J and similar are not cut off.
                
    }
    /*UPDATE CANVAS END*/

    /*LISTENER EVENTS START*/
    canvasTouchStart = (e) =>{            
                
        var ctx = this.refToCanvas.current.getContext("2d");            
        this.getTouchPosition(e, this.refToCanvas.current);               
        this.drawDot(ctx);                
        e.preventDefault();
    }
    canvasTouchMove = (e) => {
        
        var ctx = this.refToCanvas.current.getContext("2d");            
        //todo reorganize the code so I don't have to get the canvas and ctx each time
        this.getTouchPosition(e, this.refToCanvas.current);      
        this.drawDot(ctx, this.touchX, this.touchY, 12);        
        e.preventDefault();         
    }
    /*LISTENER EVENTS END*/


    printTheText=() =>{                          

        if (this.state.textForCanvas.length === 0 ){
            alert("Enter something in the canvas to print it");//make nicer pop up
            return;
        }          
        try {
            //let doc = document.implementation.createHTMLDocument("New Document");
            
            var newWindow = window.open();
            
            var linkF = newWindow.document.createElement("link");
            linkF.href = "https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap";
            linkF.rel = "stylesheet";
            newWindow.document.body.appendChild(linkF);

            var sheet = newWindow.document.createElement("style");
            //sheet.innerHTML = "p {color:lightblue; text-decoration: underline overline ; font-size: 45px; margin:15px; width:100vw}";
            sheet.innerHTML = "p {color:gray;  font-size: 50px; margin:15px; width:100vw; border-top-style: solid; border-bottom-style:solid; color-adjust: exact; font-family: 'Raleway Dots'}";
            newWindow.document.body.appendChild(sheet);

            var sheet2 = newWindow.document.createElement("style");
            //sheet.innerHTML = "p {color:lightblue; text-decoration: underline overline ; font-size: 45px; margin:15px; width:100vw}";
            sheet2.innerHTML = "span {color:deeppink;  font-size: 25px; margin:15px; width:100vw;  color-adjust: exact;}";
            newWindow.document.body.appendChild(sheet2);
            
            var desc = newWindow.document.createElement("span");            
            desc.innerHTML = "Print this page from your browser.";
            newWindow.document.body.appendChild(desc);

            var br = newWindow.document.createElement("br");                        
            newWindow.document.body.appendChild(br);            
            
            

            var p, brp;
            for (var i = 0; i<8; i++){
                p = newWindow.document.createElement("p"); 
                p.innerHTML = this.state.textForCanvas;
                newWindow.document.body.appendChild(p);    
                brp = newWindow.document.createElement("br");                        
                newWindow.document.body.appendChild(brp);
            }
            

           // body.innerHTML = '<p style="color:lightblue,text-decoration: line-through underline overline;">' + this.state.textForCanvas + "</p>";

        } catch(e) {
            console.log(e);
        }        
    
    }

    render() {
      return(
  
        //todo printable with middle line too, TODO use canvas element instead of having canvas code here.
      <React.Fragment>
         
         <div className="TopMarginToDealWithNavBarAll CenterMe">            
            Resizing will clear the contents. (Canvas has no scrolling).  Enter your text and click the button to put it on the canvas. <br/> 
            <img style = {{ height:"15%", width:"15%", position:"absolute", top:"35%", left:"0px"}} src={process.env.REACT_APP_FOR_PATH_FOR_PICS + '/images/requirestouch.svg'}  alt="cRequires touch screen"  /> 
            <TextFieldWithButton textForInput = "Enter you text" textForButton="To canvas!" functionToCall= {this.updateCanvas}/>
            <br/><br/>                                    
            <canvas className ="traceLetterCanvas"  
                    ref={this.refToCanvas}                     
                     />                
            
            
        </div>
  
      </React.Fragment>)
  };
  }
  
  export default CanvasTrace;
