import React, {Component} from "react";

class CanvasComponent extends Component {

    canvasX = 0;
    canvasY = 0;
    touchX=0;
    touchY=0;

    constructor(props)
    {
        //should get whatever the canvas needs to display by default.
        super(props);        
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
        //TODO in the future add whether the default should be erased on reset or not, for now, it is not.
        this.setCanvasDefault(); 
    }
          
    handleResize = () => {        
        this.getCanvasPosition();
        //need to reset this to get the accurate touch points
        //changing the following resets the canvas contents
        this.refToCanvas.current.width = this.refToCanvas.current.clientWidth;
        this.refToCanvas.current.height = this.refToCanvas.current.clientHeight;  
        this.setCanvasDefault(); //todo see why not redoing the image on resize
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
            
        ctx.fillStyle = "green";
        ctx.beginPath();            
        ctx.fillRect(this.touchX,this.touchY, 10, 10);
        ctx.closePath();
        ctx.fill();
    
    } 
    /*POSITIONING END*/

    /*UPDATE CANVAS START*/    

    setCanvasDefault = () => {

        var ctx = this.refToCanvas.current.getContext("2d");                 
        ctx.clearRect(0, 0, this.refToCanvas.current.width, this.refToCanvas.current.height);  
        
        if (this.props.IsThisText == "true"){            
            //set size to biggest possible that will fit
            //using ratio of 150c/110f=> c => 150/110 => 1.36 => 0.73 ==> just a bit smaller
            var fonts = this.refToCanvas.current.height * 0.63;//default size
            var fonts = this.refToCanvas.current.width * 0.40;        
            fonts = Math.round(fonts);        
            ctx.font = `${fonts}px Arial`;         
            // lower the font size until the text fits the canvas
            while(ctx.measureText(this.props.DefaultDisplay).width>this.refToCanvas.current.width){
                fonts--;
                ctx.font=`${fonts}px Arial`; 
            }      
            //once size is reduced to fit, make a bit smaller so it's not all the way to the edge
            fonts = fonts -25;
            ctx.font=`${fonts}px Arial`; 

            ctx.strokeText(this.props.DefaultDisplay, 50 , fonts); //50 so J and similar are not cut off.
        }
        //we are not getting the image but the image path
        if (this.props.IsThisAnImage == "true") {              
            let img = new Image();
            img.src = this.props.DefaultDisplay;

            let imgW = this.refToCanvas.current.width;
            let imgH = this.refToCanvas.current.height;
            
            img.onload = function(ev) {                                
                ctx.drawImage(img,0,0, imgW, imgH);
            }            
        }
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

    resetCanvas =() =>{
        this.defaultDisplay();
    }
    render() {
        
        var canvasStyle = {           
            width: this.props.canvasWidth,
            height:this.props.canvasHeight,
            border: "solid 2px navy",
            padding:"5px"
          }

        return(
            <React.Fragment>
                                                                                                            
                    <canvas style ={canvasStyle} ref={this.refToCanvas}       />                                        
          
            </React.Fragment>
        )};
}

export default CanvasComponent;