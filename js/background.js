// Create the instance of the class Background
const bgImg = document.createElement('img');
bgImg.src ='./assets/basket-court.png';

class Background {
    constructor(canvasContext) {
      this.ctx = canvasContext;
      this.width = 500;
      this.height = 250;
      this.x = 0;
      this.y = 0;
      this.completeBasketCourt = 0;
      this.targetX = this.ctx.canvas.width - 40;
      this.targetY = 90;
      this.targetSize =15;
    }
  
    draw(delta){
      let x = this.x - (delta/5) 
    
      if (x <= -this.width + this.ctx.canvas.width) {
          x = -this.width + this.ctx.canvas.width;
          this.completeBasketCourt = 1;
      } 

      this.ctx.drawImage(bgImg, x, this.y, this.width, this.height);
    } 

    drawTarget(){
      this.ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
      this.ctx.fillRect(this.targetX, this.targetY, this.targetSize, this.targetSize);
    }

    init() {
        this.x = 0;
        this.y = 0;
        this.completeBasketCourt = 0;
    }
        
}