function interface(){
    stroke(80);
    line( 0 , 50, width, 50);
    line( 0 , 500, width, 500);
    line( 80 , 290, width, 290);
    line( 0 , ball.y, width, ball.y);
    fill(200,0,0,80);
    rect(0,0,40,500);
    fill(0,200,0,80);
    rect(40,0,40,500);
    fill(255);
    noStroke;
    textSize(30);
    text("B",10,40);
    text("S",50,40);
    fill(0);
    textSize(10);
    text("100",80,280);
    text("200",80,60)
    information.show();//information bar
    timer.show();//time information
    ball.show(); //show the price point
    mouseAppearance();
  }