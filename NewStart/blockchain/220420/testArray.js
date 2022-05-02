let testArray = [1, 2, 3, 4, 5]; // int 뿐만 아니라 javascript 는 string도 변수도 배열도 전부 한 배열속에 포함 가능하다.
let testArray2 = new Array(5);

testArray[0] = 100; //0번째 값에 접근 // 1 -> 100
testArray.forEach(function (number, index, arr){
    console.log("number : ", number, "index : ", index, "arr : ", arr);
})
//1번방법

testArray.push(30);
console.log(testArray); // (6) [100, 2, 3, 4, 5, 30]

testArray.pop();
console.log(testArray); // (5) [100, 2, 3, 4, 5]

testArray.unshift(300);
console.log(testArray); // (6) [300, 100, 2, 3, 4, 5]

testArray.shift();
console.log(testArray); // (5) [100, 2, 3, 4, 5]
//unshift 와 shift 는 새로운 메모리를 할당하여 새로운 배열을 만들기 때문에 느려질수도 있어서 사용 비추천

let arrayMultiple = testArray.map(x => x * 2);
console.log(arrayMultiple);

for(let i = 0; i < testArray.length; i++) {
    testArray[i];
}
//2번방법
// 2번 방법은 짝수나 홀수 처럼 i를 통해 특정 값을 추출해낼때 사용하면 좋음

// 여기서 220420.js 에 있는 ball 변수를 가져오고 싶다면 어떻게 해야하는가?