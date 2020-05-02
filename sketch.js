let kmeans;
let points = [];
let r=40, randomPts = true, train=false, lines=true;
let colors = {
  'null': [255, 255, 255],
  0: [255, 0, 0],   1: [255, 127, 0],   2: [255, 255, 0],
  3: [127, 255, 0], 4: [0, 255, 0], 5: [0, 255, 127],
  6: [0, 255, 255], 7: [0, 127, 255], 8: [0, 0, 255]
};

function setup() {
  myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  helper = createDiv("Click to Add: <br>(k=3)");
  helper.class("helper");
  kmeans = new KMeans();
  stroke(255);
  background(0, 184, 148);
}

function draw() {
  background(0, 184, 148);
  frameRate(30);
  stroke(255);
  for(let p of kmeans.points){
    p.show();
    if (lines)
      p.drawLines();
  }
  if (train){
    frameRate(4);
    kmeans.findCentroids();
    kmeans.updateCentroids();
    kmeans.showCentroids();
  }
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
  if (x >= 0 && x < width && y >= 0 && y < height) {
    if (randomPts) {
      for (let i = 0; i < 10; i++) {
        let pt = new Point(x + random(-r, r), y + random(-r, r));
        kmeans.addPoint(pt);
      }
    } else {
      kmeans.addPoint(new Point(x, y));
    }
  }
}
function keyPressed() {
  switch (keyCode) {
    case 49:
      kmeans.setK(1);
      helper.html("Click to Add: <br>(k=1)");
      break;
    case 50:
      kmeans.setK(2);
      helper.html("Click to Add: <br>(k=2)");
      break;
    case 51:
      kmeans.setK(3);
      helper.html("Click to Add: <br>(k=3)");
      break;
    case 52:
      kmeans.setK(4);
      helper.html("Click to Add: <br>(k=4)");
      break;
    case 53:
      kmeans.setK(5);
      helper.html("Click to Add: <br>(k=5)");
      break;
    case 54:
      kmeans.setK(6);
      helper.html("Click to Add: <br>(k=6)");
      break;
    case 55:
      kmeans.setK(7);
      helper.html("Click to Add: <br>(k=7)");
      break;
    case 56:
      kmeans.setK(8);
      helper.html("Click to Add: <br>(k=8)");
      break;
    case 57:
      kmeans.setK(9);
      helper.html("Click to Add: <br>(k=9)");
      break;
    case 76:
      lines = !lines;
      break;
    case 82:
      randomPts = !randomPts;
    case ENTER:
      train = !train;
      break;
  }
}