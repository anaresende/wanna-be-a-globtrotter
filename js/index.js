// Helper to get a random number, with a minimum and maximum height,
// so that the opponents can appear inside the lines of the basketball court


function getRandomNumber(min, max){
    return Math.random() * (max - min) + min; 
}


window.onload = function() {
    //  Getting the canvas and create its context and initialize other variables
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let frameId= null;
    let opponentsId = null;

    document.getElementById("start-button").onclick = function(event) {
        startGame();
    };

    //  Setting up the Background
    const background = new Background(ctx);

    //  Setting up the Player
    const player = new Player(ctx, 50, canvas.height/2 - 37);

    //  Setting up the opponents
    const opponentArray = []

    // Setting the interval for the opponents appear
    opponentsId = setInterval(function () {

        let opponentY = getRandomNumber(20, 195)
		let opponent = new Opponent(ctx, canvas.width, opponentY, 2.5);
        opponentArray.push(opponent);
    },2000);

    //  Create start game function
    function startGame(){

        //  Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

         //  Paint the background
        background.draw();

        //  Paint the player
        player.draw();
        player.move();

        //  Print the opponents
        opponentArray.forEach((opponent) => {
            opponent.draw();
            opponent.move();
        })

    
        //  Create a loop to animate the game
        frameId = requestAnimationFrame(startGame);    
    };

    
    //  Paint the player - prepare the keypress 
    window.addEventListener('keydown', (event) => {
        //console.log('keydown', event.code, player.y, player.speedY)
        event.preventDefault();

        switch (event.code){
            case 'ArrowUp':
                if (player.y > 20) {
                    player.speedY = 2;
                    //event.preventDefault();
                    //console.log('here', player.speedY);
                } else {
                    player.speedY = 0;
                    //event.preventDefault();
                }
                break;
            
            case 'ArrowDown':
                //console.log('tas a descer?', player.y, canvas.height- 105)
                if (player.y < canvas.height - 105) {
                    player.speedY = -2;
                    //event.preventDefault();
                    //console.log('down', player.speedY);
                } else {
                    player.speedY = 0;
                    
                }
                break;

            default:
                break;
                


        }

        //replaced with the switch, for having the possibility to add other keys in the future
        // if (event.code === 'ArrowUp') {
        //     player.speedY = 2;
        // } else if (event.code === 'ArrowDown') {
        //     player.speedY = -2;
        // }

    })

    //  set the keyup
    window.addEventListener('keyup', (event) =>{
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown'){
            player.speedY = 0;
        }
    })



    


}

