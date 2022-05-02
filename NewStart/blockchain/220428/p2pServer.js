// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws'
import { WebSocketServer } from 'ws';

const MessageType = {
    RESPONCE_MESSAGE : 0,
    SEND_MESSAGE : 1

    // 최신 블록 요청
    // 모든 블록 요청
    // 블록 전달
}

const sockets = [];

const getPeer = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort});
    server.on('connection', (ws) => {
        initConnection(ws);
        console.log("confirm");
    })
    
    console.log(`listening P2PServer Port at ${p2pPort} `)
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);
}

const connectionToPeer = (newPeer) => { console.log(newPeer);
    const ws = new WebSocket(newPeer);
    ws.on('open', () => {
        initConnection(ws);
        console.log('Connect peer : ', newPeer);
        sockets.push(newPeer);
        return true;
    })
    ws.on('error', () => {
        console.log('Fail to Connection peer : ', ws.remoteAddress);
        return false;
    })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);

        switch(message.type) {
            case MessageType.RESPONCE_MESSAGE: //메세지를 받았을 때
                break;
            case MessageType.SEND_MESSAGE: // 메세지를 보낼 때
                write(ws, message);
                break;
        }
    })
}

const write = (ws, message) => {
    console.log('write()' + message)
    ws.send(JSON.stringify(message));
}

const sendMessage = (message) => {
    sockets.forEach( (socket) => {
        write(socket, message);
    });
}

export {initP2PServer, connectionToPeer, getPeer, sendMessage} 