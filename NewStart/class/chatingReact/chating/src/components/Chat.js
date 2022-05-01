import {React, useState} from "react";
import '../css/chat.css'

function Chat() {
    const [msg, setMsg] = useState();
    const [contentMessage, setContentMessage] = useState();

    const onChange = (e) => {
        console.log(e.target.value);
        setMsg(e.target.value);
        console.log(msg);
    }
    
    const onClick = (e) => {
        console.log("클릭");

        setContentMessage(msg);

        setMsg('');
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            console.log("엔터");

            onClick();
        }
    }

    return(
        <>
        <div className="page">
            <div className="background">
                <input className="chatinput" onKeyDown={onKeyPress} onChange={onChange} value={msg}/>
                <input type="button" className="sendmessage" value="전송" id="" onClick={onClick}/>
                <div className="convers">{contentMessage}</div>
            </div>
        </div>
        </>
    )
}

export default Chat;