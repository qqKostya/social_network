

const subscribes = [] as SubscriberType[]

let webSocket: WebSocket

let closeHadler = () => {
    console.log('CLOSE WS')
    setTimeout(createChanel, 3000)
};


function createChanel() {
    webSocket?.removeEventListener('close', closeHadler)
    webSocket?.close()
    webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    webSocket?.addEventListener('close', closeHadler)
}

export const chatApi = {
    subscribe(callback: SubscriberType) {
        subscribes.push(callback)
    }
}
type SubscriberType = (messages: ChatMessageType) => void

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}