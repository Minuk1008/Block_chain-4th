// 웹에 명령어를 입력해서 내 노드를 제어하는 서버

import express, { response, Router } from 'express'; // import 는 딱 필요한 애들만 데려옴 (속도나 크기가 좀 더 원활)
// const express = require('express)
import bodyParser from 'body-parser';
import fs from 'fs';

import { createBlock, getBlocks } from './block.js';
import { connectionToPeer, getPeer, sendMessage } from './p2pServer.js';

// 초기화 함수 
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    const port = 6001;

    // app.use('view engine', 'ejs');
    // app.engine('html', require('ejs').renderFile);

    app.get('/', (req, res) => {
        fs.readFile('chating.html', function(err, data) {
            if(err) {
                res.send("html error")
            } else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                res.end();
            }
        });
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
        console.log(req.body)
        const {ipAddress, port} = req.body;
        console.log(ipAddress, port)

        let fullAddress = "ws://" + ipAddress + ":" + port;
        console.log(fullAddress)
        // res.send(connectionToPeer(fullAddress));
    })

    app.get('/getPeer', (req, res) => {
        res.send(getPeer());
    })

    app.post('/sendMessage', (req, res) => {
        let data = {
            "message" : req.body.msg,
            "type" : parselnt(req.body.type)
        }
        sendMessage(data);
    })

    app.listen(myHttpPort, () => {
        console.log(`listening httpServer at ${myHttpPort}`);
    })
};

export { initHttpServer }