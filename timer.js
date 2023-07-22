var timer = {
    second: 0,
    minute: 0,
    gameTimeTotal: 3,

    timer: function(){
        this.second = frameCount / 60;
        this.second = Math.floor(this.second);
        if(this.second >= 60){
            this.second  = this.second % 60;
        }

        this.minute = frameCount / 60 / 60;
        this.minute = Math.floor(this.minute);

    },

    show : function(){
        noStroke();
        text(this.minute + ' min ' + this.second + ' second past',30 ,590);
        text('only ' + (this.gameTimeTotal - 1 - this.minute) + ' min ' + ( 60 - this.second) + ' second left',280, 590);
    },

    gameOver: function(){//check if time is up
        //var isGameOver = 1;
        if (this.minute >= this.gameTimeTotal){
            isGameOver = 1;
        }
        return isGameOver;
    },
}