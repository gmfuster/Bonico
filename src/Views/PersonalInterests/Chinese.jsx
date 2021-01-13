import React from "react";

const Chinese =(props) => {

    var styleCont = {
        display:"flex",
        flexDirection: "row",
        textAlign: "center",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center"  ,
        marginTop:"12vh"
    }
    var styleSymbol = {
        fontSize:"4vw"
    }    
    var styleSymTrans = {
        border:"2px solid navy",
        margin:"3px",
        padding:"3px"
    }    
    var symbolsArray =[{sym:"中国", trans:"China", read:"Zhōngguó"}, {sym:"一", trans:"One", read:"Yī"}, {sym:"二", trans:"Two", read:"Èr"},{sym:"三", trans:"Three", read:"Sān"},
                        {sym:"四", trans:"Four", read:"Sì"}, {sym:"五", trans:"Five", read:"Wǔ"},{sym:"六", trans:"Six", read:"Liù"}, {sym:"七", trans:"Seven", read:"Qī"},
                        {sym:"八", trans:"Eight", read:"Bā"}, {sym:"九", trans:"Nine", read:"Jiǔ"}, {sym:"十", trans:"Ten", read:"Shí"},
                        {sym:"人", trans:"person", read:"Rén"}, {sym:"夫",trans:"husband",read:"Fū"}, {sym:"入口",trans:"entrance",read:"Rùkǒu"},
                        {sym:"出口",trans:"exit",read:"Chūkǒu"}, {sym:"出",trans:"out",read:"Chū"}
    ];
    
    return (
        <React.Fragment>
            <div style={styleCont} className="TopMarginToDealWithNavBar">   
               
                {symbolsArray.map( (item, index) =>   
                    <div style={styleSymTrans} key={index}>                           
                        <span  style={styleSymbol}>{item.sym}</span><br/>         
                        <span style={{fontWeight:"bold"}}>{item.trans}</span>  <br/>  
                        <hr/>
                        <span>{item.read}</span>        
                    </div>                  
                )}
            </div>
        </React.Fragment>
        )
}
export default Chinese;
