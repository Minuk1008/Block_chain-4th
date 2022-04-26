// 캔버스 그리기 ============================

// 타일 canvas 그리기
const canvas = document.getElementById('Canvas');
const context = canvas.getContext('2d');

// hp, gold 그리기 & 
const canvasState = document.getElementById('Canvas1');
const context1 = canvasState.getContext('2d');

let HP = "( ﾉ ﾟｰﾟ)ﾉ  " + "50";
let GOLD = "( ﾉ ﾟｰﾟ)ﾉ  " + "100";

context1.font = "30pt Fira";
context1.strokeText("HP", 0, 40);
context1.font = "20px Gulim";
context1.strokeText(HP, 0, 85);
context1.font = "30pt Fira";
context1.strokeText("GOLD", 0, 135);
context1.font = "20px Gulim";
context1.strokeText(GOLD, 0, 180);


// 가위바위보 게임 그리기
const canvasGame = document.getElementById('Canvas2');
const context2 = canvasGame.getContext('2d');

// 변수 선언==========================

// 타일
let tiles = [];
let lasttile;
let montile;

const tileRow = 10;
const tileColumn = 10;
const tileWidth = 60;
const tileHeight = 60;

// 유저
let user = {left:0, right:0, top:0, bottom:0};

const userWidth = 60;
const userHeight = 60;

let userX = 0
let userY = 0

// 탈출구
let esc = {left:0, right:0, top:0, bottom:0};

const escapeWidth = 60;
const escapeHeight = 60;

// 몬스터
class Monster{
    constructor(left, right, top, bottom, color)
    {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.color = color;
    }
}

let monsters = [];
const countMonster = Math.floor(10 + Math.random() * 10);

let mon = {left:0, right:0, top:0, bottom:0};

const monWidth = 60;
const monHeight = 60;

let gameState = 0;

// 함수 선언==========================

// 타일 생성
function setTiles() {
    tiles = [];
    for(i = 0; i < tileRow; i++) {
        tiles[i] = [];
        for(j = 0; j < tileColumn; j++) {
            tiles[i][j] = {
                left : j * (tileWidth + 1),
                right : j * (tileWidth + 1) + 60,
                top : i * (tileHeight + 1),
                bottom : i * (tileHeight + 1) + 60,
                column : i , row : j
            }
        }
    }
    lasttile = tiles[5+Math.floor(Math.random()*5)][1+Math.floor(Math.random()*9)];
}

function drawTiles() {
    context.beginPath();

    for(let i = 0; i < tileRow; i++) {
        for(let j = 0; j < tileColumn; j++) {
                context.rect(tiles[i][j].left, tiles[i][j].top, tileWidth, tileHeight)
                context.fillStyle = 'white';
                context.fill();
        }
    }
    context.closePath();
}

// 유저 생성
function drawUser() {
    context.beginPath();

    context.rect(userX, userY, userWidth, userHeight);
    context.fillStyle = "blue"
    context.fill();

    context.closePath();
}

// 탈출구 생성
function drawEscape() {
    context.beginPath();

    context.rect(lasttile.left, lasttile.top, escapeWidth, escapeHeight);
    context.fillStyle = "white"
    context.fill();

    context.closePath();
}

// 몬스터 생성
function setMonster() {
    for(i = 0; i < countMonster; i++) {
        montile = tiles[1+Math.floor(Math.random()*9)][1+Math.floor(Math.random()*9)];
        monsters[i] = new Monster(montile.left, montile.right, montile.top, montile.bottom, "green");
    }

    for(i = 0; i < countMonster; i++) {
        if(lasttile.left == monsters[i].left &&
            lasttile.right == monsters[i].right &&
            lasttile.top == monsters[i].top &&
            lasttile.bottom == monsters[i].bottom) 
            {
                lasttile = tiles[5+Math.floor(Math.random()*5)][1+Math.floor(Math.random()*9)]
            }
    }
}

function drawMonster() {
    context.beginPath();
    // console.log(monsters.length);

    for(i = 0; i < monsters.length; i++) {
        context.rect(monsters[i].left, monsters[i].top, monWidth, monHeight)
        context.fillStyle = monsters[i].color;
        context.fill();
    }
    // console.log(monsters[0]);

    context.closePath();
}

// 이벤트작동
document.addEventListener('keydown', keyDownEventHandler); 
function keyDownEventHandler(e) {
    if(e.key == 'ArrowRight'){
        if(userX + userWidth < canvas.width && gameState == 0){
            userX += tileWidth + 1
        }
    } else if(e.key == 'ArrowLeft'){
        if(userX > 0 && gameState == 0){
            userX -= tileWidth + 1
        }
    } else if(e.key == 'ArrowUp'){
        if(userY > 0 && gameState == 0){
            userY -= tileHeight + 1
        }
    } else if(e.key == 'ArrowDown'){
        if(userY + userHeight < canvas.height && gameState == 0){
            userY += tileHeight + 1 
        }
    }
}

// 게임 작동
function rspGm() {
    if(confirm("몬스터 출현 ! \n싸우시겠습니까 ?")) {
        gameState = 2;
    } else {
        gameState = 0;
    }
}



// 탈출구 충돌
function gameclear(a, b) {
    if(a.left == b.left &&
        a.right == b.right &&
        a.top == b.top &&
        a.bottom == b.bottom) 
        {
            return true;
        } 
        return false;
}

// 몬스터 충돌
function meetMonster(a, b) {
    if(a.left == b.left &&
        a.right == b.right &&
        a.top == b.top &&
        a.bottom == b.bottom)
        {
            // if()   \
            gameState=1;
            rspGm();
            return true;
        } 
        return false;
}

// 종합 데이터 수정
function update(){
    user.left = userX;
    user.right = userX + userWidth;
    user.top = userY;
    user.bottom = userY + userHeight;

    esc.left = lasttile.left;
    esc.right = lasttile.right;
    esc.top = lasttile.top;
    esc.bottom = lasttile.bottom;

    for(i = 0; i < monsters.length; i++){
        mon.left = monsters[i].left;
        mon.right = monsters[i].right;
        mon.top = monsters[i].top;
        mon.bottom = monsters[i].bottom;
        
        if(meetMonster(user, mon)){
            gameState = 0;
        }
    }
    
    // console.log(mon);

    if(gameclear(user, esc)){
        window.location.reload();
        
        alert("escape !")
    }
    // console.log(esc)
    // console.log(lasttile) +50
    // console.log(user)
}

// 호출==========================

function draw() {
    context.clearRect(0,0,canvas.clientWidth, canvas.height);

    drawTiles();
    drawMonster();
    drawEscape();
    drawUser();
}

setTiles();
setMonster();
setInterval(() => {
    if(gameState == 0) {update()}}, 10);
setInterval(draw, 10);
