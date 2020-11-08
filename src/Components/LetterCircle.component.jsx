import React, {Component} from "react";
import LanguagePagesCSS from '../Views/KidsActivities/KidsPages.css'

class LetterCircle extends Component {     
    
    constructor(props){   
        super(props);               
        this.state = {backgroundColor:"w"};                
    }
    

    setColor = () => {            
        //(this.props.letter == this.props.targetLetter)? this.setState({backgroundColor:"g"}) : this.setState({backgroundColor:"r"}); 
        if (this.props.letter == this.props.targetLetter)
        {
            this.setState({backgroundColor:"g"})
            this.props.functionToCallBack();
        }
        else{
            this.setState({backgroundColor:"r"}); 
        }
    }
    
    render() {
        
        let button = "";
        switch (this.state.backgroundColor) {
            case 'w':
                button = <div className= "circleWhite" onClick={this.setColor}  >{this.props.letter}</div>;
                break;
            case 'g':
                button = <div className= "circleGreen" onClick={this.setColor}  >{this.props.letter}</div>;
                break;
            case 'r':
                button = <div className= "circleRed" onClick={this.setColor}  >{this.props.letter}</div>;
                break;
            default:
                button = <div className= "circleWhite" onClick={this.setColor}  >{this.props.letter}</div>;
        }
    
        return(
        <React.Fragment>            
            {button}            
        </React.Fragment>
        )
    };
}

export default LetterCircle;