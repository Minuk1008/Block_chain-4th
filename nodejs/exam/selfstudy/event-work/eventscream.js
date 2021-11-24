const events = require('events');
const eventEmitter = new events.EventEmitter();

//myEventHandler 작동 ! => 익명함수 발생 => 결과 추출 (나 비명소리를 들었어!)
var myEventHandler = function() {
    console.log("I hear a scream!!");
};

// 채널 on, 이제 "scream"이 나오면 myEventHandler라는 변수가 작동한다 !!!
eventEmitter.on("scream", myEventHandler);


//"scream" 발생 !!
eventEmitter.emit("scream");