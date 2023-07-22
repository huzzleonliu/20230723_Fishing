var tradeBuyAry = [];
//click function
// if (information.buyingStock() != 0){
//     tradeBuyAry.push(new TradeBuy(information.moneyOccupied, information.moneyToStock, information.price))
//     tradeBuyAry.sort((a, b) => b.price - a.price);
// }

class TradeBuy {
constructor(moneyOccupied, moneyToStock, price, x, y){
    //trade information
    this.moneyOccupied = moneyOccupied;
    this.moneyToStock = moneyToStock;
    this.price = price;
    //grid information
    this.x = x;
    this.y = y;
}

show(){
    stroke(255,0,0);
    line( 0 , this.y, width, this.y);
}
}

//这个函数放到draw()里面跑
function compareToBuy(){
if(information.currentPrice <= parseFloat(tradeBuyAry[0].price)){
    information.buyStockSuccess(tradeBuyAry[0].moneyOccupied, tradeBuyAry[0].moneyToStock);
    tradeBuyAry.splice(0,1);
}
}

// 首先要有一个TradeBuyAry的数组
// 每次点击判断是否购买成功（是否有足够多的钱）
// 如果成功，生成一个TradeBuy对象
// 将对象加入到TradeBuyAry数组中
// 对TradeBuyAry数组中的元素进行重新排列
// 按照对象的CurrentPrice排列，价格最高的对象放在【0】序号下

// 需要一个函数时时刻刻把此时的价格与TradeBuyAry【0】做比较
// 一旦价格高于TradeBuyAry【0】
// 将moneySpend和stockGoingToBuy的值记录下来
// 将TradeBuyAry【0】的值删除，并且将数组内的值向前移动一位
// 将moneySpend和stockGoingToBuy的值传出函数

// 需要另外一个函数，将前面传出的moneySpend和stockGoingToBuy的值传给information

var tradeSellAry = [];
//click function
// if (information.sellingStock() != 0){
//     tradeSellAry.push(new TradeSell(information.stockOccupied, information.stockToMoney, information.price))
//     tradeSellAry.sort((a, b) => a.price - b.price);
// }

class TradeSell {
    constructor(stockOccupied, stockToMoney, price, x, y){
        //trade information
        this.stockOccupied = stockOccupied;
        this.stockToMoney = stockToMoney;
        this.price = price;
        //grid information
        this.x = x;
        this.y = y;
    }

    show(){
        stroke(0,255,0);
        line( 0 , this.y, width, this.y);

    }

}

//这个函数放到draw()里面跑
function compareToSell(){
    if(information.currentPrice >= parseFloat(tradeSellAry[0].price)){
        information.sellStockSuccess(tradeSellAry[0].stockOccupied, tradeSellAry[0].stockToMoney);
        tradeSellAry.splice(0,1);
    }
}

// 首先要有一个TradeSellAry的数组
// 每次点击判断是否购买成功（是否有足够多的股票）
// 如果成功，生成一个TradeSell对象
// 将对象加入到TradeSellAry数组中
// 对TradeSellAry数组中的元素进行重新排列
// 按照对象的CurrentPrice排列，价格最低的对象放在【0】序号下

// 需要一个函数时时刻刻把此时的价格与TradeSellAry【0】做比较
// 一旦价格低于TradeSellAry【0】
// 将stockSpend和moneyGoingToGet的值记录下来
// 将TradeSellAry【0】的值删除，并且将数组内的值向前移动一位
// 将stockSpend和moneyGoingToGet的值传出函数

// 需要另外一个函数，将前面传出的stockSpend和moneyGoingToGet的值传给information


