import React, {useState} from "react";

function Jsxtest() {
    const name = 'My name is React !';
    
    return (
        <>
            <div>
                <h1>Hello World !</h1>
            </div>
            <div>
                <h1>Hello React !</h1>
                <h2>{name}</h2>
            </div>
            <input />
            <br />
            <label>Hello Label !</label>
        </> //여러개의 div를 사용하고 싶으면 frogment <>를 꼭 넣어줘야한다
         // input || br 사용하려면 뒤에 /> 이렇게 꼭 닫아줘야함 (이게 바로 Jsx 형식)
    )
}

export default Jsxtest;