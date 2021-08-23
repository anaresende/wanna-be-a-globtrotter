window.onload = function() {
    // 1 - Getting the canvas and create its context and initialize other variables
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let frameId= null;

    document.getElementById("start-button").onclick = function(event) {
        startGame();
    };

    // 3 - Setting up the Background
    const background = new Background(ctx);

    // 9 - Setting up the Player
    const player = new Player(ctx, 50, canvas.height/2 - 37);

    // 4 - Create start game function
    function startGame(){

        // 6 - Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

         // 7 - Paint the background
        background.draw();

        // 10 - Paint the player
        player.draw();
        player.move();


    
    
        // 5 - Create a loop to animate the game
        frameId = requestAnimationFrame(startGame);    
    };

    
    // 11 - Paint the player - prepare the keypress 
    window.addEventListener('keydown', (event) => {
        //console.log('keydown', event.code, player.y, player.speedY)
        switch (event.code){
            case 'ArrowUp':
                if (player.y > 20) {
                    player.speedY = 2;
                    //console.log('here', player.speedY);
                } else {
                    player.speedY = 0;
                }
                break;
            
            case 'ArrowDown':
                //console.log('tas a descer?', player.y, canvas.height- 105)
                if (player.y < canvas.height - 105) {
                    player.speedY = -2;
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

    // 12 - set the keyup
    window.addEventListener('keyup', (event) =>{
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown'){
            player.speedY = 0;
        }
    })



    


}

