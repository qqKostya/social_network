import React, {useEffect, useState} from "react";


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
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    useEffect(() => {

        function createChanel() {
            let webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            webSocket?.addEventListener('close', () => {
                console.log('CLOSE WS')
                createChanel()
            })
            setWsChannel(webSocket)
        }

        createChanel()

    }, [])

    return <div>
        <Messages wsChannel={wsChannel}/>
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
}

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel?.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [wsChannel])

    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((m) => <Message key={m.userId} message={m}/>)}
    </div>
}


const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return <div>
        <img style={{width: '30px'}} src={message.photo} alt="photo"/> <b>{message.userName}</b>
        <div>{message.message}</div>
    </div>
}

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        wsChannel?.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [wsChannel])
    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel?.send(message)
        setMessage('')
    }
    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={wsChannel == null || readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
        </div>
    </div>
}

export default ChatPage
