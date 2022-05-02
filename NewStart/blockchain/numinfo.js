//숫자형

/*
    10진수 (일상생활)
     -> 255
    2진수 (0b 11111111), 8진수(0o 377), 16진수(0x FF)
*/

// var num = 255;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// let randomNum = Math.random() * 10; // 0.0 ~ 1.0 사이의 랜덤한 값(난수)
// console.log(randomNum);

// console.log(Math.floor(randomNum)); // 버림
// console.log(Math.ceil(randomNum)); // 올림
// console.log(Math.round(randomNum)); // 반올림

/*
    -실습-
    프로그램이 3 ~ 10 사이의 랜덤한 값을 지정한다.
    값을 하나 입력 받아서 정답인지 아닌지 출력해준다.
    prompt 사용
*/
let ranNum = Math.floor(Math.random() * 10) + 3; // 3~13
if(ranNum > 10) {
    ranNum - 3;
} // [11, 12, 13] -> [8, 9, 10]
let cliNum = prompt("숫자를 입력해주세요");

if(ranNum == cliNum) {
    console.log("정답")
} else {
    console.log("오답")
}

console.log(ranNum);
console.log(cliNum);

=================================================
// 모범답안
let correctNum = Math.floor(Math.random() * 10) % 8 + 3; // 3 + 0 ~ 3 + 7
let inputNum = prompt("정답을 입력하세요.");

if(correctNum == inputNum) {
    console.log("정답")
    // alert("정답") 
    //원하는 표현 방식으로
} else {
    console.log("오답")
    // alert("오답")
}

console.log(correctNum);
console.log(inputNum);