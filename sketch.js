
var trade = [];
var isGameOver;
// var canBuy = 0;
// var canSell = 0;


function setup() {
  createCanvas(550, 600);
  isGameOver = 0;
  information.setInitial();

}

function mousePressed(){
  if(mouseY <= 500 && mouseY >= 50 && mouseX < 40 ){
    //Buy district
    var spent;
    information.setPrice(mouseY);
    spent = information.buyingStock();
    if (spent != 0){
      tradeBuyAry.push(new TradeBuy(spent, information.moneyToStock, information.price,mouseX, mouseY));
      tradeBuyAry.sort((a, b) => b.price - a.price);
    }

  }else if (mouseY <= 500 & mouseY >= 50 & mouseX >= 40 & mouseX < 80){
    //sell district
    var spent;
    information.setPrice(mouseY);
    spent = information.sellingStock();
    if (spent != 0){
      tradeSellAry.push(new TradeSell(spent, information.stockToMoney, information.price, mouseX, mouseY));
      tradeSellAry.sort((a, b) => a.price - b.price);
    }
  }

  else if (mouseY <= 500 & mouseY >= 50 & mouseX >= 80 & mouseX <= width){
    //price checking
    information.setPrice(mouseY);
  }

}

function draw() {
  background(220);
  if(isGameOver == 0){
  interface(); //draw interface
  information.setCurrentPrice();//set current price
  ball.move(); //move the price point

  // trade grid
  for(i=0; i<tradeBuyAry.length;i++){
    tradeBuyAry[i].show(); 
  }
  for(i=0; i<tradeSellAry.length;i++){
    tradeSellAry[i].show(); 
  }


  // check if the trade is success
  if(tradeBuyAry.length > 0){
    compareToBuy();
  }
  if(tradeSellAry.length > 0){
    compareToSell();
  }


  timer.timer();
  isGameOver = timer.gameOver();//check if time is up
}else{
  gameOver();
}

  
  
}






