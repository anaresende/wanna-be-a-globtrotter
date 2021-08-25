//  Create the instance of the class Player
const playerImg = document.createElement('img');
playerImg.src ='./assets/player.png';
class Player {
    constructor(canvasContext, initialPositionX, initialPositionY) {
        this.ctx = canvasContext;
        this.width = 22;
        this.height = 36;
        this.x = initialPositionX;
        this.y = initialPositionY;
        this.initialPositionX = initialPositionX;
        this.initialPositionY = initialPositionY;
        
        this.flipImageIntervalId = setInterval(() => {
            if (playerImg.src.includes('/assets/playerUp.png')) {
                playerImg.src = './assets/player.png'
            } else {
                playerImg.src = './assets/playerUp.png'
            }
        }, 250)
    
    }
  
    draw(){
        //console.log(playerImg.src)
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }

    init(){
        this.x = this.initialPositionX;
        this.y = this.initialPositionY;
    }
        
}
    
  