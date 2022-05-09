import ecdsa from 'elliptic';
import fs from 'fs';

const ec = new ecdsa.ec('secp256k1');
const privateKeyLocation = 'wallet/' + (process.env.PRIVATE_KEY || 'default' );
const privateKeyFile = privateKeyLocation + '/private_key';

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();

    // console.log(privateKey);
    // console.log(privateKey.toString(16)); //얘로 public key 를 생성함

    return privateKey.toString(16)
}

const initWallet = () => {
    // 이미 만들어져 있을 때
    if(fs.existsSync(privateKeyFile)) {
        console.log('이미 있는 비밀키 입니다.')
        return;
    }

    if(!fs.existsSync('wallet/')){
        fs.mkdirSync('wallet/');
    }

    if(!fs.existsSync(privateKeyLocation)){
        fs.mkdirSync(privateKeyLocation);
    }
    
    const privateKey = createPrivateKey();
    fs.writeFileSync(privateKeyFile, privateKey);
}

const getPrivateKeyFromWallet = () => {
    const buffer = fs.readFileSync(privateKeyFile, 'utf-8');
    return buffer.toString();
}

const getPublicKeyFromWallet = () => {
    const privateKey = getPrivateKeyFromWallet();
    const publicKey = ec.keyFromPrivate(privateKey, 'hex');

    return publicKey.getPublic().encode('hex');
    //046af4e0a681de11e12bdc1aa242b0e2aead20512e73c4768e07dd2f19ccc51c28d127925887c8497e100b1a6ad41668afd76f6a33160533b15e8d9742230a6637
}

export {getPublicKeyFromWallet, initWallet};