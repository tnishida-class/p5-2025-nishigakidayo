// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0){
        fill (255)
      } else{
        fill (175)
        
      }
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      rect(size * i, size * j, size, size);
      if(((i + j) % 2 == 1) && (j <= 2)){
          fill(255, 0, 0);
          ellipse(size * i + size / 2, size * j + size / 2, size, size);
        }
      if(((i + j) % 2 == 1) && j >= 5){
        fill(0);
        ellipse(size * i + size / 2, size * j + size / 2, size, size);
      }
    }
  }
}