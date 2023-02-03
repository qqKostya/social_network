import React from "react";
import {ChatMessagesApiType} from "../../api/chat-api";

export const Message: React.FC<{ message: ChatMessagesApiType }> = React.memo(({message}) => {
    console.log(">>>>>>Message")
    return <div>
        <img src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})
