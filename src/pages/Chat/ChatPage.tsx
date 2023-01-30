import React, {useEffect, useState} from "react";
import message from "../../components/Dialogs/Message/Message";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return <Chat/>
}

const Chat: React.FC = () => {

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((m) => <Message key={m.userId} message={m}/>)}
    </div>
}


const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return <div>
        <img style={{width: '30px'}} src={message.photo}/> <b>{message.userName}</b>
        <div>{message.message}</div>
    </div>
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const sendMessage = () => {
        if(!message) {
            return
        }
        wsChannel.send(message)
        setMessage('')
    }
    return <div>
        <div>
            <textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
}

export default ChatPage
