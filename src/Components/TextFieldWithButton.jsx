import React,  {Component}  from 'react';

class TextFieldWithButton extends Component {        
    constructor(props)
    {
        super(props);    
        this.refToInput = React.createRef();    
    }

    sendTheText = () => {                
        this.props.functionToCall(this.refToInput.current.value);
    }
    sendTheTextBlank = () => {    
        this.refToInput.current.value = "";            
        this.props.functionToCall("");
    }

    render() {
      return(
  
      <React.Fragment>      
            <div style ={{ border:"3px solid navy", borderRadius:"5px", marginLeft:"5%", marginRight:"5%"}}>
                <input type="search" placeholder={this.props.textForInput} className="inputText" ref={this.refToInput}/>                                    
                <button onClick={this.sendTheText} className="buttonInputWithButtons">{this.props.textForButton}</button>
                <button onClick={this.sendTheTextBlank} className="buttonInputWithButtons">Reset</button>                                        
            </div>                          
      </React.Fragment>)
  };
  }
  
  export default TextFieldWithButton;