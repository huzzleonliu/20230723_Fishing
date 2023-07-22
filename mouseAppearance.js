
    //show mouse cross
function mouseAppearance(){
    fill(255,0,0,50);
    stroke(80);
    ellipse(mouseX, mouseY, 10, 10);
    line( 0 , mouseY, width, mouseY);
    line( mouseX , 0, mouseX, height);
}
