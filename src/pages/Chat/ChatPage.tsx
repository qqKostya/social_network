import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer'
import {AppStateType} from '../../redux/redux-store'
import {ChatMessagesApiType} from "../../api/chat-api";
import {Messages} from "./Messages";
import {AddMessageForm} from "./AddMessageForm";


const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()


    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        // @ts-ignore
        dispatch(startMessagesListening())
        return () => {
            // @ts-ignore
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    </div>
}

export default ChatPage