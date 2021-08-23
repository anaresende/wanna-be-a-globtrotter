//  Create the instance of the class Opponent
// Remember to update the canvas width and heigth on html or css


const opImg = document.createElement('img');
opImg.src ='../assets/opponent.png';

class Opponent {
    constructor(canvasContext, positionX, positionY, speed) {
      this.ctx = canvasContext;
      this.width = 45;
      this.height = 72;
      this.x = positionX;
      this.y = positionY;
      this.speedX = speed;
    }
  
    draw(){
      this.ctx.drawImage(opImg, this.x, this.y, this.width, this.height);
    }

    move(){
        this.x -= this.speedX;
    }
    
  }