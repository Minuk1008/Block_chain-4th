/*
    비동기 처리

    동기 처리
*/

// let a = 0;
// a(); // error :: a is not a function

//요즘 방식
//anync
function asyncTimeoutCheckAdult(age, timeout) {
    if(age >= 20){
        setTimeout(() => {
            console.log(`asyncTimeoutCheckAdult(${age})`);
            return age;
        }, timeout);
    } 
    else throw new Error(age);
}

//await 키워드 사용 함수의 종료를 기다리지 않고 다음 함수를 호출한다..
async function testAsyncAwaitFunc() {
    await asyncTimeoutCheckAdult(100, 2000);
}

testAsyncAwaitFunc();

////////////////////////////////////////////////////////////////
async function asyncCheckAdult(age) {
    if(age >= 20) return age;
    else throw new Error(age);
}

const promiseCheckAdult = asyncCheckAdult(10);
promiseCheckAdult.then((age) => {
    console.log(`${age} is adult`)
}).catch((age) => {
    console.log(`${age} is not adult`)
})

const promiseCheckAdult1 = asyncCheckAdult(28);
promiseCheckAdult1.then((age) => {
    console.log(`${age} is adult`)
}).catch((age) => {
    console.log(`${age} is not adult`)
})

// then이 성공했을때 , catch가 실패했을때
// resolve (성공)한 애들을 먼저 처리해줌 -> 그 다음 reject(실패)한 애들 처리



//옛날 방식
// function asyncCheckAdult(age) {
//     return new Promise((resolve, reject) => {
//         if(age >= 20) resolve(age);
//         else reject(age);
//     })
// }

// const promise = new Promise((resolve, reject) => {
    
// });


// new Promise 호츨과 동시에 비동기 처리 시작
const promise = new Promise((resolve, reject) => {
    // 시간이 오래 걸리는 실행문 ... 5초
    resolve();
    reject();
});

promise.then(() => {
    console.log("promise then called")
}).catch(() => {
    console.log("promise catch called")
}

);

function testFunc1() {
    console.log('testFunc1()');

    let startTime = new Date().getTime();
    while(new Date().getTime() - startTime < 3000); //딜레이주기

    testFunc2();
}

function testFunc2() {
    console.log('testFunc2()')
}

testFunc1();