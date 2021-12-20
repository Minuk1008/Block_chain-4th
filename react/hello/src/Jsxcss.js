import React, {useState} from "react";
import Hello from './Hello';
import './Jsxcss.css';

function Jsxcss() {
    let name = 'react';
    const myStyle = {
        backgroundColor : 'blue',
        color : 'white',
        fontSize : 24, // default == px
        padding : '1rem'
    }

    return (
        <>
        {/* 주석처리*/}
        /* 주석처리x */
            <Hello />
            <div style={myStyle}>{name}</div>
            <div className="Pink-box"></div>
        </>
    )
}

export default Jsxcss;