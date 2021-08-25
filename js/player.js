//  Create the instance of the class Player
// Remember to update the canvas width and heigth on html or css


const playerImg = document.createElement('img');
playerImg.src ='./assets/player.gif';
class Player {
    constructor(canvasContext, initialPositionX, initialPositionY) {
        this.ctx = canvasContext;
        this.width = 22;
        this.height = 36;
        this.x = initialPositionX;
        this.y = initialPositionY;
        this.initialPositionX = initialPositionX;
        this.initialPositionY = initialPositionY;
    }
  
    draw(){
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }

    init(){
        this.x = this.initialPositionX;
        this.y = this.initialPositionY;
    }
        
}
    
  