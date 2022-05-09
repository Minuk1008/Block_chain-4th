import CryptoJS from 'crypto-js'
import _ from 'lodash'
import { getPublicKeyFromWallet } from './wallet.js';

const COINBASE_AMOUNT = 50;

let transactionPool = [];
const getTransactionPool =() => {
    return _.cloneDeep(tracnactionPool);
}

let unspentTxOuts = []; // UnspentTxOut []

class UnspentTxOut {
    constructor(txOutId, txOutIndex, address, amount) {
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}

// 코인을 어디로 얼만큼 보냈는가
class TxOut {
    constructor(address, amount) {
        this.address = address; // string
        this.amount = amount; // int
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIn {
    constructor(txOutId, txOutIndex, sign){
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex; // int
        this.sign = sign; // string
    }
}

class Transcation {
    constructor(id, txIns, txOuts) {
        this.id = id; // string
        this.txIns = txIns; // TxIn[]
        this.txOuts = txOuts; // TxOut[]
    }
}

// transcation id
const getTransactionId = (transcation) => {
    // txIns에 있는 내용들을 하나의 문자열로 만든다.
    const txInsContent = transcation.txIns.map((txIn) => {
        (txIn.txOutId + txIn.txOutIndex).reduce((a, b) => {
            a + b, ''
        })
    })
    const txOutsContent = transcation.outs.map((txOut) => {
        (txOut.address + txOut.amount).reduce((a, b) => {
            a + b, ''
        })
    })

    return CryptoJS.SHA256(txInsContent + txOutsContent).toString();

    // txOut에 있는 내용들을 하나의 문자열로 만든다.

    // 위의 두 내용을 다 합해서 hash처리한다.
}

const signTxIn = (transcation, txInIndex, privateKey) => {
    // const txIn = transcation.txIns[txInIndex];

    // TODO : sign 코드 검증
    const signature = toHexString(privateKey, transcation.id).toDER();
    return signature;
}

// coinbase Transcation
const getCoinbaseTransaction = (address, blockIndex) => {
    const tr = new Transcation();
    const txIn = new TxIn();
    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;

    const txOut = new TxOut();
    txOut.address = address;
    txOut.amount = COINBASE_AMOUNT;

    tr.txIns = [txIn];
    tr.txOuts = [txOut];
    tr.id = getTransactionId(tr);

    return tr;
}

const sendTransaction = (address, amount) => {
    // 1. 트랜잭션 생성
    // 2. 트랜잭션 풀에 추가
    // 3. 주변 노드에 전파

    return tx;
}

const createTranscation =() => {
    // 1. 아직 처리되지 않았지만 트랜잭션 풀에 올라가 있는 내용을 확인
    const myAddress = getPublicKeyFromWallet();
    const myUnspentTxOuts = unspentTxOuts.filter((uTxO) => uTxO.address === myAddress);

    filterTxPoolTxs(myUnspentTxOuts);

    // 2. 거래에 사용되지 않은 TxOuts을 구성, 트랜잭션에 필요한 코인을 확인

    // 내가 보유한 TxOuts 10, 15, 20, 40
    // 내가 지금 만들고 싶은 트랜잭션 코인 60 ==== 85 (25)
    // 넘기는 금액은 다시 나한테 전달

    // 3. 서명 전의 TxIns로 구성
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    const txIns = _(transactionPool)
                .map((tx) => tx.txIns)
                .flatten()
                .value();

    console.log('풀 : ', transactionPool);
    console.log('풀 안에 inputs : ', txIns);

    const removable = [];
    for(const unspentTxOuts of myUnspentTxOuts) {
        const findTxIn = _.find(txIns, (txIn) => {
            return txIn.txOutIndex === unspentTxOuts.txOutIndex &&
            txIn.txOutId === unspentTxOuts.txOutId;
        })

        if(findTxIn === undefined) {

        } else {
            removable.push(unspentTxOuts);
        }
    }

    return _.without(myUnspentTxOuts, ...removable);
}