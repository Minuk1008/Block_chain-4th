// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws'
import { WebSocketServer } from 'ws';
import { getBlocks, getLatestBlock } from './block.js'

const MessageType = {
    // RESPONCE_MESSAGE : 0,
    // SEND_MESSAGE : 1

    // 최신 블록 요청
    QUERY_LASTEST : 0,
    // 모든 블록 요청
    QUERY_ALL : 1,
    // 블록 전달
    RESPONSE_BLOCKCHIAN : 2
}

const sockets = [];

const getPeer = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {  //나의 p2p 서버 주소
    const server = new WebSocketServer({port:p2pPort});
    server.on('connection', (ws) => {
        initConnection(ws);
        console.log("peer success");
    })
    
    console.log(`listening P2PServer Port at ${p2pPort} `)
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);
}

const connectionToPeer = (newPeer) => {
    const ws = new WebSocket(newPeer);
    ws.on('open', () => {
        initConnection(ws);
        console.log('Connect peer : ', newPeer);
        sockets.push(ws);
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
            // case MessageType.SEND_MESSAGE: // 메세지를 보낼 때
            // console.log(message.message)
            // break;
            case MessageType.QUERY_LASTEST:
                break;
            case MessageType.QUERY_ALL:
                break;
            case MessageType.RESPONSE_BLOCKCHIAN:
                break;
        }
    })
}

const queryLatestMessage = () => { // 요청을 보내는 json 형태
    return (
        { 
            "type" : MessageType.QUERY_LASTEST,
            "data" : null
        }
    )
}

const queryAllMessage = () => {  // 여기도 요청을 보냄
    return (
        { 
            "type" : MessageType.QUERY_ALL,
            "data" : null
        }
    )
}

const responseLatestMessage = () => { // 여기가 응답 
    return (
        { 
            "type" : MessageType.RESPONSE_BLOCKCHIAN,
            "data" : JSON.stringify(/* 내가 가지고 있는 체인의 마지막 블록 */ getLatestBlock())
        }
    )
}

const responseAllMessage = () => { // 여기가 응답 
    return (
        { 
            "type" : MessageType.RESPONSE_BLOCKCHIAN,
            "data" : JSON.stringify(/* 내가 가지고 있는 체인의 전체 블록 */ getBlocks())
        }
    )
}

const write = (ws, message) => {
    // console.log("확인 " + ws)
    console.log('write()', message);
    ws.send(JSON.stringify(message));
}

const sendMessage = (message) => {
    // console.log(message);
    sockets.forEach( (socket) => {
        write(socket, message);
        // console.log(socket)
    });
}


export {initP2PServer, connectionToPeer, getPeer, sendMessage, queryLatestMessage, queryAllMessage, responseLatestMessage, responseAllMessage} 