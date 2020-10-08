import React from 'react';
import logo from "../../img/Udemy_logo.png";



const Logo = () => {
    let style={
        height:"80px",
        
    }
    return (
        <div style={{textAlign:"center"}}>
            <img id="udmey" src={logo} style={style}/>
        </div>
    );
};

export default Logo;