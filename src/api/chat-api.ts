let subscribes = [] as MassagesReceivedSubscriberType[]

let webSocket: WebSocket

const closeHadler = () => {
    console.log('CLOSE WS')
    setTimeout(createChanel, 3000)
};

export type MassagesReceivedSubscriberType =
    (messages: ChatMessageType[]) => void


const oneMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribes.forEach(s => s(newMessages));

};

function createChanel() {
    webSocket?.removeEventListener('close', closeHadler)
    webSocket?.close()
    webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    webSocket?.addEventListener('close', closeHadler)
}

export const chatApi = {
    subscribe(callback: MassagesReceivedSubscriberType) {
        subscribes.push(callback)
        return () => {
            subscribes = subscribes.filter(s => s !== callback)
        }
    },

    unsubscribe(callback: MassagesReceivedSubscriberType) {
        subscribes = subscribes.filter(s => s !== callback)
    }
}
type SubscriberType = (messages: ChatMessageType) => void

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}