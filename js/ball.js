//  Create the instance of the class Ball

const ballImg = document.createElement('img');
ballImg.src ='./assets/ball.png';

class Ball {
    constructor(canvasContext) {
        this.ctx = canvasContext;
        this.width = 8;
        this.height = 8;
        this.x = player.x + 15 ;
        this.y = player.y ;
        this.speedY = 0;
        this.speedX = 0;
    }
  
    draw(){
        this.ctx.drawImage(ballImg, this.x, this.y, this.width, this.height);
    }
    
    move(){
        this.x += this.speedX
        this.y -= this.speedY
    }
 
}
    
  