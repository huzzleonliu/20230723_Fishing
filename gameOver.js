function gameOver(){
    noStroke();
    fill(0);
    text('Time up, Game is Over', 200-40, 300-50);
    text('You got ' + information.moneyTotal.toFixed(2), 200-40, 330-50);
    text('You earnt ' + (information.moneyTotal - information.initialMoney).toFixed(2), 200-40, 360-50);

}