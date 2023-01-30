import React, {useEffect, useState} from "react";
import message from "../../components/Dialogs/Message/Message";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
        ws.addEventListener('message', (e) => {
            setMessages(JSON.parse(e.data))
        })
    }, [])

    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((m) => <Message key={m.userId} message={m}/>)}
    </div>
}

const AddMessageForm: React.FC = () => {
    return <div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Send</button>
        </div>
    </div>
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return <div>
        <img src={message.photo}/> <b>{message.userName}</b>
        <div>{message.message}</div>
    </div>
}
export default ChatPage
