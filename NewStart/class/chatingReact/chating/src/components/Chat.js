import {React, useState} from "react";
import '../css/chat.css'

function Chat() {
    const [msg, setMsg] = useState();
    let contentMessage = '';

    const onChange = (e) => {
        console.log(e.target.value);
        setMsg(e.target.value);
        console.log(msg);
    }
    
    const onClick = (e) => {
        console.log("클릭");

        contentMessage = msg;
        console.log(contentMessage);

        setMsg('');
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            console.log("엔터");

            onclick();
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