// 웹에 명령어를 입력해서 내 노드를 제어하는 서버

import express from 'express'; // import 는 딱 필요한 애들만 데려옴 (속도나 크기가 좀 더 원활)
// const express = require('express)
import bodyParser from 'body-parser';

import { createBlock, getBlocks } from './block.js';
import { connectionToPeer, getPeer, sendMessage } from './p2pServer.js';

// 초기화 함수 
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('Hi');
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/getBlockData', (req, res) => {
        res.send(createBlock(req.body.data));
        console.log(req.body.data);
        console.log("data income");
    })

    app.post('/addPeer', (req, res) => {
        res.send(connectionToPeer(req.body.data));
    })

    app.get('/getPeer', (req, res) => {
        res.send(getPeer());
    })

    app.post('/sendMessage', (req, res) => {
        console.log(req.body.data)
        res.send(sendMessage(req.body.data));
    })

    app.listen(myHttpPort, () => {
        console.log(`listening httpServer at ${myHttpPort}`);
    })
};

export { initHttpServer }