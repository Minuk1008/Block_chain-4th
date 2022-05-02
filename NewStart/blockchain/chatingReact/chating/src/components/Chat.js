import {React, useState} from "react";
import '../css/chat.css';
import $ from jQuery;

function Chat() {
    const [msg, setMsg] = useState();
    const [contentMessage, setContentMessage] = useState();

    const onChange = (e) => {
        console.log(e.target.value);
        setMsg(e.target.value);
        console.log(msg);
    }
    
    const onClick = () => {
        console.log("클릭");

        setContentMessage(msg);

        onCreate();
        setMsg('');
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            console.log("엔터");

            onClick();
        }
    }

    const onCreate = () => {
        let i = 1;
        $(document).ready(function() {
           $("button").click(function() {
               $(".chatlist").append("<div className='convers'>"+ i +"</div>");
               i++;
           }) 
        })
    }

    return(
        <>
            <div className="page">
                <div className="chatlist">
                    <input className="chatinput" onKeyDown={onKeyPress} onChange={onChange} value={msg}/>
                    <input type="button" className="sendmessage" value="전송" id="" onClick={onClick}/>
                    <div className="convers">{contentMessage}</div>
                </div>
            </div>
        </>
    )
}

export default Chat;