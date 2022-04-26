/* let brick = {
    left : 0, right : 0, top : 0, bottom: 0,
    column : 0, row : 0  
}
벽돌 left, top, right, bottom, col, row, pos + 움직이는 기능
*/

// 클래스로 객체의 설계도를 만든다.
// 명사로 지칭되는 객체를 설계한다. (자동차, 책, 몬스터, 사람 ...)
class Brick {
    constructor(left, top, right, bottom, color) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.display = true;
        this.color = color;
    }

    draw() {
        if(this.display == true) {
            context.rect(this.left, this.top, brickWidth, brickHeight)
            context.fillStyle = this.color;
            context.fill();
        }
    }
}

class MovingBrick extends Brick {
    // constructor(left, top, right, bottom) {
    //     this.left = left;
    //     this.top = top;
    //     this.right = right;
    //     this.bottom = bottom;
    // }
    // 코드 중복을 위해 상속을 받음

    movingAction(){
        this.left++;
        console.log("내가 움직이고 있어")
    }
}

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//볼
const arcRadius = 20;

let arcPosX = canvas.width / 2 + 100;
let arcPosY = canvas.height / 2;

let arcMoveDirX = -1; // 왼쪽으로
let arcMoveDirY = 1; //아래로
let arcMoveSpd = 10;

let ball = {
    left:0, right:0, top:0, bottom:0
};

//벽돌
const brickColumn = 5;
const brickRow = 4;
const brickWidth = 50; // 간격 10
const brickHeight = 25; //  간격 5

// let bricks = []; //갯수가 정해져있다면 new Array(갯수)
let bricks;

let brickCount = brickRow * brickColumn;

//장애물
const obsBrickWidth = 50;
const obsBrickHeight = 20;
let obsBrickX = canvas.width/2 - obsBrickWidth/2;
let obsBrickY = canvas.height/2;

let obstacle = {
    left:0, right:0, top:0, bottom: 0
}

let obsMoveDir = 1;

//패들
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
    // paddle.left = rectBarX;
    // paddle.right = rectBarX + barWidth;
    // paddle.top = rectBarY;
    // paddle.bottom = rectBarY + barHeight;
}

function keyUpEventHandler(event) {

}

// 볼 생성
function drawArc() {
    context.beginPath(); //그리기 시작

    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();

    context.closePath(); //그리기 종료
}

// 벽돌 생성
function drawBricks() {
    context.beginPath();
    for(let i = 0; i < brickRow; i ++) {
        for(let j = 0; j < brickColumn; j++) 
        {
            // if(bricks[i][j].display == true) {
            //     context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight)
            //     context.fillStyle = 'purple';
            //     context.fill();
            // }
            bricks[i][j].draw();
        }
    }
    context.closePath();
}

// 장애물 생성
function drawObsBrick() {
    context.beginPath();

    context.rect(obsBrickX, obsBrickY, obsBrickWidth, obsBrickHeight);
    context.fillStyle = 'black';
    context.fill();

    context.closePath();
}

// 패들 생성
function drawRect() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clearRect : 화면을 네모난 모양으로 정리(clear)해주는 것 
    context.beginPath(); //그리기 시작

    context.rect(rectBarX, rectBarY, barWidth, barHeight); // /2 는 canvas 기준으로 가운데
    context.fillStyle = 'red';
    context.fill();
    
    context.closePath(); //그리기 종료
}

// 도형들 그리기
function draw() {
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 다른 도형 그리기
    drawRect();
    drawArc();
    drawBricks();
    drawObsBrick();
}

function update() {
    ballMove();
    autoMove();
    //데이터 수정 (도형의 위치 이동)
    ball.left = arcPosX - arcRadius;
    ball.right = arcPosX + arcRadius;
    ball.top = arcPosY - arcRadius;
    ball.bottom = arcPosY + arcRadius;

    paddle.left = rectBarX;
    paddle.right = rectBarX + barWidth;
    paddle.top = rectBarY;
    paddle.bottom = rectBarY + barHeight;

    obstacle.left = obsBrickX;
    obstacle.right = obsBrickX + obsBrickWidth;
    obstacle.top = obsBrickY;
    obstacle.bottom = obsBrickY + obsBrickHeight;

    if(iscollisionBallToObs(ball, obstacle)){
        arcMoveDirY = -1 *arcMoveDirY;
        arcMoveDirX = -1 *arcMoveDirX;
        if(obsMoveDir == arcMoveDirX) arcPosX += obsMoveDir * (arcMoveSpd+1);
        else arcPosX -= obsMoveDir * (arcMoveSpd+1);
        
    }

    //패들과 볼 _ 충돌확인
    if(isCollisionRectToRect(ball, paddle)){
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }

    //볼과 canvas높이 _ 충돌확인 (gameover)
    if(iscollisionBallToEnd(ball, canvas)){
        // window.location.reload();

        // alert("gameover")
    }

    //벽돌과 볼 _ 충돌확인
    for(i = 0; i < brickRow; i++) {
        for(j = 0; j < brickColumn; j++) {
            if(isCollisionRectToRect(ball, bricks[i][j])){
                if(bricks[i][j].display == true){
                    bricks[i][j].display = false;
                    arcMoveDirY = 1;
                    brickCount--;
                    gameWin(2000);
                    break;
                }
            }
        }
    }
}

// obstacle brick auto move
function autoMove() {
    if(obsBrickX + obsBrickWidth > canvas.width) 
    {
        obsMoveDir = -1;
    }
    else if(obsBrickX - obsBrickWidth < 0)
    {
        obsMoveDir = 1;        
    }
    obsBrickX += obsMoveDir;
}

// ball auto move
function ballMove() {
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
}

// gameclear
async function gameWin(timeout) {
    if(brickCount == 0) {
        setTimeout(() => {
            window.location.reload();

            alert("gameclear");
        }, timeout)
    }
    // else throw new Error("error");
}

// gameover
function iscollisionBallToEnd(ball, end){
    if(ball.bottom == end.height){
        return true;
    } return false;
}

function iscollisionBallToObs(ball, obs){
    if(ball.bottom < obs.top ||
        ball.top > obs.bottom ||
        ball.left > obs.right ||
        ball.right < obs.left){
            return false;
    }
    return true;
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

function setBricks() {
    bricks = [];
    for(let i = 0; i < brickRow; i ++) {
        bricks[i] = [];
        for(let j = 0; j < brickColumn; j++) {
            // TODO : right : left + 50 해보기
            // bricks[i][j] = {
            //     left: 55 + j * (brickWidth + 10), 
            //     right: 55 + j * (brickWidth + 10) + 50, 
            //     top:30 + i * (brickHeight + 5), 
            //     bottom:30 + i * (brickHeight + 5) + 25,
            //     column : i, row : j,
            //     display : true
            // }

            bricks[i][j] = new Brick(55 + j * (brickWidth + 10), 30 + i * (brickHeight + 5),
                                     55 + j * (brickWidth + 10) + 50, 30 + i * (brickHeight + 5) + 25, "orange");
        }
    }
}

setBricks();
setInterval(update, 10);
setInterval(draw, 10);