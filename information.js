
var information = {
    initialMoney : 3000,
    initialStock : 0,

    moneyTotal : 0, //initially you have these money
    moneyOccupied : 0,//you spend these money to buy, but havn't trade
    moneyToStock : 0, //stock going to buy in this trade

    stockTotal : 0,// you have bought these much stock
    stockOccupied : 0, // you are selling these much stock
    stockToMoney : 0,// money going to get if the trade is finished

    price : 0,
    currentPrice : 0,

    setInitial : function(){
        this.moneyTotal = this.initialMoney;
        this.stock = this.initialStock;
    },

    setCurrentPrice : function(){
        this.currentPrice = map(ball.y, 50, 500, 200, 0);
    },

    setPrice : function(Y){
        this.price = map(Y,50,500,200,0);
    } ,

    buyingStock : function(){
     var moneySpend = 0;
     if(this.moneyTotal > 100){
        this.moneyTotal -= 100;
        this.moneyOccupied += 100;
        moneySpend = 100;
        this.moneyToStock = (moneySpend / this.price).toFixed(2);

    }else if(this.moneyTotal <= 100 && this.moneyTotal > 0){
        this.moneyOccupied += this.moneyTotal;
        moneySpend = this.moneyTotal;
        this.moneyTotal = 0;
        this.moneyToStock = (moneySpend / this.price).toFixed(2);

    }
    return moneySpend;
        
    },

    sellingStock : function(){

        var stockSpend = 0;
        if (this.stockTotal > 1){
            stockSpend = 1;
            this.stockTotal -= 1;
            this.stockOccupied += 1;
            this.stockToMoney = (stockSpend * this.price).toFixed(2);
        }else if(this.stockTotal > 0 && this.stock <= 10){
            stockSpend = this.stockTotal;
            this.stockOccupied += this.stockTotal;
            this.stockTotal = 0;
            this.stockToMoney = (stockSpend * this.price).toFixed(2);

        }
        return stockSpend;

    },

    buyStockSuccess : function(moneyOccupied, moneyToStock){
        this.moneyOccupied -= parseFloat(moneyOccupied);
        this.stockTotal += parseFloat(moneyToStock);
    },

    sellStockSuccess : function(stockOccupied, stockToMoney){
        this.stockOccupied -= parseFloat(stockOccupied);
        this.moneyTotal += parseFloat(stockToMoney);
    },

    show : function(){
        fill(0);
        textSize(15);
        noStroke();
        text('Money you have \t' + str(this.moneyTotal.toFixed(2)),30,530);
        text('Money occupied \t' + str(this.moneyOccupied.toFixed(2)),30,550);

        text('Stock you have \t' + str(this.stockTotal.toFixed(2)),280,530);
        text('Stock occupied \t' + str(this.stockOccupied.toFixed(2)),280,550);

        text('price check \t' + str(this.price.toFixed(2)),280,570);
        text('Current price \t' + str(this.currentPrice.toFixed(2)),30,570);


    },


}