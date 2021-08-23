// 8 - Create the instance of the class Player
// Remember to update the canvas width and heigth on html or css


const playerImg = document.createElement('img');
playerImg.src ='../assets/player.png';

class Player {
    constructor(canvasContext, positionX, positionY) {
      this.ctx = canvasContext;
      this.width = 53;
      this.height = 75;
      this.x = positionX;
      this.y = positionY;
      this.speedX = 0;
      this.speedY = 0;
    }
  
    draw(){
      this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }

    
    
  }