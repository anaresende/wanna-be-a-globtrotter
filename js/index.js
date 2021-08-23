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
    const player = new Player(ctx);

    // 4 - Create start game function
    function startGame(){

        // 6 - Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

         // 7 - Paint the background
        background.draw();

        // 10 - Paint the player
        player.draw();


    
    
        // 5 - Create a loop to animate the game
        frameId = requestAnimationFrame(startGame);    
    }





    


}

