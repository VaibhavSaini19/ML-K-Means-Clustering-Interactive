class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.cls = 'null';
  }
  show(){
    stroke(colors[this.cls]);
    strokeWeight(4);
    point(this.x, this.y);
  }
  drawLines(){
    if (this.cls != "null"){
      strokeWeight(1);
      let s = colors[this.cls].concat([40]);
      stroke(s);
      line(this.x, this.y, kmeans.centroids[this.cls].x, kmeans.centroids[this.cls].y);
    }
  }
}