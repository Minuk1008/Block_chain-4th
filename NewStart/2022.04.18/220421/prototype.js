function Brick(left, top, right, bottom){
    this.left = left,
    this.right = right,
    this.top = top,
    this.bottom = bottom
}

//prototype : 시연, 테스트 용으로 기능 구현을 해보는 것
Brick.prototype.movingAction = function () {
    this.left++;
}

for(let i = 0; i < 20; i++) {
    let tempBrick = new Brick(0, 0, 10, 10);
    tempBrick.movingAction();
}
