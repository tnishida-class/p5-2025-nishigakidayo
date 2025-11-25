// 最終課題を制作しよう

let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(0, 255, 0);
  rect(0, height * 0.6, width / 2, height - groundY * 0.6);
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);
 
  // BLANK[1] キャラクターの左右移動
 if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown("A".charCodeAt(0))){ 
    if(keyIsDown(LEFT_ARROW)){ x -= 7.5; } 
    if(keyIsDown(RIGHT_ARROW)){ x += 7.5; }
  }
 // BLANK[2] 重力とジャンプ

  // 速くなりすぎないように制限
  vx = constrain(vx, -40, 20);
  vy = constrain(vy, -40, 20);
  if(x < width / 2){
    y = constrain(y, 0, groundY - 158);
  }else{
    y = constrain(y, 0, groundY - 48);
  }

  // 位置を更新
  x += vx;
  y += vy;
  vy += g;
  if(x > width / 2 && y > groundY - 48 && keyIsDown(" ".charCodeAt(0)) ){
    vy = -1 * vy;
  }else if(x < width / 2 && y > groundY - 158 && keyIsDown(" ".charCodeAt(0))){
    vy = -1 * vy;
  }

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);

  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }

}