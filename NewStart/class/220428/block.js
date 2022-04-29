// 블록체인 관련 함수 구현
// 블록 구조 설계
/*
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (transaction)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성산 sha256값 (블록의 유일성)
    previousHash : 이전 블록의 해쉬 (이전 블록을 참조)
*/

import CryptoJS from 'crypto-js'

const nowTime = new Date().getTime() / 1000;

class Block {
    constructor(index, data, timestamp, hash, previousHash, difficulty, nonce)
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}

function getBlocks() {
    return blocks;
}

function calculateHash(index, data, timestamp, previousHash, difficulty, nonce) {
    return CryptoJS.SHA256((index + data + timestamp + previousHash + difficulty + nonce).toString()).toString(); 
    //return 을 해야 외부에서 갖다 쓸 수 있음
    //return CryptoJS.SHA256("100").toString();
}

// 0 하나로 시작하는 hash값을 만드는 매개변수(nonce)를 찾는다.
// 16진수 64자리 중 1자리는 2진수 4자리 256개의 0과 1로 표현 


// let testHash = calculateHash();
// console.log(testHash);

function createGenesisBlock() {
    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', nowTime, 0, 0, 0, 0);

    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash, genesisBlock.difficulty, genesisBlock.nonce);

    return genesisBlock;
}

function createBlock(blockData) {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextDifficulty = 100;
    const nextNonce = findNonce(nextIndex, blockData, nextTimestamp, previousBlock.hash, nextDifficulty);

    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash, nextDifficulty, nextNonce)
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash, nextDifficulty, nextNonce)

    if(isValidNewBlock(newBlock, previousBlock)){
        blocks.push(newBlock);
        return newBlock;
    }

    console.log("fail to create newblock");
    return null;
}

// 블록의 무결성 검증
/*
    블록의 인덱스가 이전 블록인덱스보다 1 크다.
    블록의 previousHash가 이전 블록의 hash이다.
    블록의 구조가 일치해야 한다.
*/

const isValidBlockStructure = (newBlock) => {
    if(typeof(newBlock.index) === 'number'
        && typeof(newBlock.data) === 'string'
        && typeof(newBlock.timestamp) === 'number'
        && typeof(newBlock.hash) === 'string'
        && typeof(newBlock.previousHash) === 'string'
        && typeof(newBlock.difficulty) === 'number'
        && typeof(newBlock.nonce) === 'number'){
            return true;
        }
        return false;
}

function isValidNewBlock(newBlock, previousBlock) {
    if(newBlock.index !== previousBlock.index + 1){
        console.log("invalid index")
        return false;
    } else if(newBlock.previousHash !== previousBlock.hash) {
        console.log("invalid previous hash");
        return false;
    } else if(isValidBlockStructure(newBlock) == false){
            console.log("invalid block structure")
            return false;
    }
    return true;
} 

// 문제 해결을 검사하는 함수
function hashMatchDifficulty(hash, difficulty){
    const binaryHash = hexToBinary(hash);
    const requiredPrefix = '0'.repeat(difficulty);

    return binaryHash.startsWith(requiredPrefix);
}

function hexToBinary(hex) {
    const lookupTable = {
        '0' : '0000','1' : '0001','2' : '0010','3' : '0011',
        '4' : '0100','5' : '0101','6' : '0110','7' : '0111',
        '8' : '1000','9' : '1001','a' : '1010','b' : '1011',
        'c' : '1100','d' : '1101','e' : '1110','f' : '1111'
    }

    //03cf -> 0000001111001111
    let binary = '';
    for(let i = 0; i < hex.length; i++) {
        if(lookupTable[ hex[i] ]){
            binary += lookupTable[ hex[i] ];
        }
        else {
            console.log('invalid hex : ', hex)
            return null;
        }
    }
    return binary;
}

function findNonce(index, data, timestamp, previousHash, difficulty) {
    let nonce = 0;

    while(true) {
        let hash = calculateHash(index, data, timestamp, previousHash, difficulty, nonce);

        if(hashMatchDifficulty(hash, difficulty)) {
            return nonce;
        } 
        nonce++;
    }
}

const blocks = [createGenesisBlock()];

export { getBlocks,createBlock }