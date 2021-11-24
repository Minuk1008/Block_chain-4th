for(var var_i = 0; var_i < 5; var_i++){}
console.log(var_i);
// 5 발생
// i++이 후처리 기능이라, 4에서 자동으로 break해서 나가면서 i++을 거치면서 5 가 출력

for(let var_i = 0; let_i < 5; let_i++){}
console.log(var_i);
// 에러 발생