/*
    canvas
    document
    context : 화면에 무엇인가를 그릴때
*/

/*
    -실습-
    동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동

    -실습2-
    동그라미에 속도 붙히기

    -실습3-
    동그라미를 대각선으로 이동
*/

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const arcRadius = 20;

let arcPosX = canvas.width / 2 + 100;
let arcPosY = canvas.height / 2;

let arcMoveDirX = -1; // 왼쪽으로
let arcMoveDirY = 1; //아래로
let arcMoveSpd = 1;

let ball = {
    left:0, right:0, top:0, bottom:0
};

const barWidth = 100;
const barHeight = 20;
let rectBarX = canvas.width/2 - barWidth/2;
let rectBarY = canvas.height - barHeight;
let rectMoveSpd = 10;

let paddle = {
    left:0, right:0, top:0, bottom:0
}

document.addEventListener('keydown', keyDownEventHandler); //특정 event (클릭, 마우스 올리기 등)가 발생 시 그것을 들어주는 기능
document.addEventListener('keyup', keyUpEventHandler);

function keyDownEventHandler(event) {
    if(event.key == 'ArrowRight') {
        // 바를 오른쪽으로 이동
        // alert("오른쪽") // 콘솔처럼 확인
        if(rectBarX + barWidth < canvas.width){
            rectBarX += rectMoveSpd;
        }
    } else if(event.key == 'ArrowLeft') {
        // 바를 왼쪽으로 이동
        // alert("왼쪽") // 콘솔처럼 확인
        if(rectBarX > 0){
            rectBarX -= rectMoveSpd;
        }
    }
    paddle.left = rectBarX;
    paddle.right = rectBarX + barWidth;
    paddle.top = rectBarY;
    paddle.bottom = rectBarY + barHeight;
}

function keyUpEventHandler(event) {

}

function drawRect() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clearRect : 화면을 네모난 모양으로 정리(clear)해주는 것 
    context.beginPath(); //그리기 시작

    context.rect(rectBarX, rectBarY, barWidth, barHeight); // /2 는 canvas 기준으로 가운데
    context.fillStyle = 'red';
    context.fill();

    context.closePath(); //그리기 종료
}

//위 : 네모 , 아래 : 동그라미

function drawArc() {
    context.beginPath(); //그리기 시작

    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();

    context.closePath(); //그리기 종료
}

function draw() {
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 다른 도형 그리기
    drawRect();
    drawArc();
}

function update() {
    //데이터 수정 (도형의 위치 이동)
    if(arcPosX - arcRadius < 0) {
        arcMoveDirX = 1;
    } else if(arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1;
    }

    if(arcPosY - arcRadius < 0) {
        arcMoveDirY = 1;
    } else if(arcPosY + arcRadius > canvas.height){
        arcMoveDirY = -1;
    }

    arcPosX += arcMoveDirX * arcMoveSpd;
    arcPosY += arcMoveDirY * arcMoveSpd;

    ball.left = arcPosX - arcRadius;
    ball.right = arcPosX + arcRadius;
    ball.top = arcPosY - arcRadius;
    ball.bottom = arcPosY + arcRadius;

    //충돌확인
    if(isCollisionRectToRect(ball, paddle)) {
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }
}

function isCollisionRectToRect(rectA, rectB) {
    // a의 왼쪽과 b의 오른쪽
    // a의 오른쪽과 b의 왼쪽
    // a의 아래쪽과 b의 위쪽
    // a의 위쪽과 b의 아래쪽
    if(rectA.left > rectB.right ||
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top) //안겹치는 경우의 수
        {
            return false; //안겹쳤다
        } 
    return true; //겹쳤다
}

setInterval(update, 10);
setInterval(draw, 10);