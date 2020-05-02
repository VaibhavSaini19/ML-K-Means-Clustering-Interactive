class KMeans{
  constructor(){
    this.points = [];
    this.centroids = [];
    this.setK();
  }
  addPoint(pt){
    this.points.push(pt);
  }
  setK(k=3){
    this.k = k;
    this.centroids = [];
    for(let i=0; i<this.k; i++){
      let c = new Point(random(0, width), random(0, height));
      this.centroids.push(c);
    }
  }
  findCentroids(){
    for(let p of this.points){
      let closestInd, minDist=9999;
      for(let i=0; i<this.centroids.length; i++){
        let d = this.dist(p, this.centroids[i]);
        if (d < minDist){
          minDist = d;
          closestInd = i;
        }
      }
      p.cls = closestInd;
    }
  }
  updateCentroids(){
    let ctr = [];
    let avg = [];
    for(let i=0; i<this.k; i++){ 
      ctr.push(0);
      avg.push([0, 0]);
    }
    for(let p of this.points){
      avg[p.cls][0] += p.x;
      avg[p.cls][1] += p.y;
      ctr[p.cls] += 1;
    }
    for(let i=0; i<this.k; i++){
      this.centroids[i].x = avg[i][0] / ctr[i];
      this.centroids[i].y = avg[i][1] / ctr[i];
    }
  }
  showCentroids(){
    strokeWeight(10);
    for(let [i, c] of this.centroids.entries()){
      let s = colors[i];
      stroke(s);
      point(c.x, c.y);
    }
  }
  dist(pt1, pt2){
    return Math.sqrt(Math.pow(pt1.x-pt2.x, 2) + Math.pow(pt1.y-pt2.y, 2));
  }
}