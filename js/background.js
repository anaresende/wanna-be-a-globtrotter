// 2 - Create the instance of the class Background
// Remember to update the canvas width and heigth on html or css


const bgImg = document.createElement('img');
bgImg.src ='../assets/basket-court.png';

class Background {
    constructor(canvasContext) {
      this.ctx = canvasContext;
      this.width = 500;
      this.height = 300;
      this.x = 0;
      this.y = 0;
    }
  
    draw(){
      this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height);
    }

    
  }