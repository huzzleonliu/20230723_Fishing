var ball = {
  x : 8,
  y : 290,
  change : 1,

  //color of the current price point
  show : function(){
    stroke(80);
      if (this.y > 290){
          fill(200,0,0); 
      }else{
          fill(0,200,0);
      }
    ellipse(this.x, this.y, 20, 20);
  },

  //the way of current price move
  move : function(){
    this.x ++;
    this.change =random(-5,5);
    if (this.x > width) {
      this.x  = 80;
    }
    this.y = this.y + this.change;
    //constrain price between 0 to 200
    if (this.y <50 ){
      this.y = 50;
    }else if (this.y > 500){
      this.y = 500;
    }
  }

}