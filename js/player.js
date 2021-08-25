//  Create the instance of the class Player
// Remember to update the canvas width and heigth on html or css


const playerImg = document.createElement('img');
playerImg.src ='../assets/player.gif';
class Player {
    constructor(canvasContext, positionX, positionY) {
        this.ctx = canvasContext;
        this.width = 22;
        this.height = 36;
        this.x = positionX;
        this.y = positionY;
        // this.speedX = 0;
        // this.speedY = 0;
    }
  
    draw(){
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }

    // move(){
    //    //if (this.y < canvas.height - 105) this.y +=5
    //     //if (this.y > 20) this.y -=5; ;
    //     //console.log(this.y)
        
        
    }
    
  