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
                    <input type="search" placeholder={this.props.textForInput} className="inputText" ref={this.refToInput}/>                                    
                    <button onClick={this.sendTheText} className="buttonInputWithButtons">{this.props.textForButton}</button>
                    <button onClick={this.sendTheTextBlank} className="buttonInputWithButtons">Reset</button>                                        
      </React.Fragment>)
  };
  }
  
  export default TextFieldWithButton;