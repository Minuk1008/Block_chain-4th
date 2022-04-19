alert("start javaScript!!");


//var
console.log(varName); //undefined
var varName = "김민욱"; // var은 엔진은 잡지만 16번째줄 콘솔에서 runtime 하면서 사라짐
console.log(varName); // 김민욱

if(true) {
    var varName = "kim min wook";
}
console.log(varName); //kim min wook
======================================================================================

//let
let letName = "kmw";
console.log(letName); // kmw

if(true){
    let letName = "kmw2"
    console.log(letName); // kmw2
}

console.log(letName); // kmw
======================================================================================

//const
const constName = "MW"; // 값이 수정될 일이 없는 변수
constName = "KMW";
console.log(constName); // 변수를 초기화 할 수 없어서 에러뜸