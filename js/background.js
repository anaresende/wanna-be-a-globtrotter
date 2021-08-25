// Create the instance of the class Background
// Remember to update the canvas width and heigth on html or css


const bgImg = document.createElement('img');
bgImg.src ='../assets/basket-court.png';

class Background {
    constructor(canvasContext) {
      this.ctx = canvasContext;
      this.width = 500;
      this.height = 250;
      this.x = 0;
      this.y = 0;
      this.completeBasketCourt = 0;
    }
  
    draw(delta){
      //console.log(delta/10)
      let x = this.x - (delta/5) 
    

      if (x <= -this.width + this.ctx.canvas.width) {
          x = -this.width + this.ctx.canvas.width;
          this.completeBasketCourt = 1;
      } 
      

      this.ctx.drawImage(bgImg, x, this.y, this.width, this.height);
      
    } 
        
}