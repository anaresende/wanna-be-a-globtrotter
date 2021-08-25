
// START GAME
document.getElementById("start-button").onclick = function(event) {
    startGame();

    // changing from the splash page to the gameplay
    console.log('start')
    document.getElementById("game-intro").classList.remove("show");
    document.getElementById("game-play").classList.add("show");
    

    // Setting the interval for the opponents appear only when click start button

    opponentsId = setInterval(function () {
        // let opponentY = getRandomNumber(10, 197)
        let opponentY = getRandomNumber(10, 150) // for tests only
        let opponent = new Opponent(ctx, canvas.width, opponentY, 2.5);
        opponentArray.push(opponent);

    },1000)
    
    gameStarted = 1;

};

// RESTART GAME
document.getElementById("restart-button").onclick = function(event) {
        

    document.getElementById("game-over").classList.remove("show");
    document.getElementById("game-play").classList.add("show");
    
    

    // Setting the interval for the opponents appear only when click start button

    opponentsId = setInterval(function () {
        let opponentY = getRandomNumber(20, 200)
        //let opponentY = getRandomNumber(10, 150) // for tests only
        let opponent = new Opponent(ctx, canvas.width, opponentY, 2.5);
        opponentArray.push(opponent);

    },1000)

    // Reset all the positions and variables
    ctx = null;
    ctx = canvas.getContext('2d');
    gameStarted = 1;
    gameOver = 0;
    background.init();
    player.x = 25;
    player.y = canvas.height/2 - 18;
    opponentArray = []
    frameCount = 0;

    console.log('frameId here:', frameId)
    yourScore.points =  0;
    startGame();
}


//  Paint the player - prepare the keypress 
document.addEventListener('keydown', (event) => {

    if (event.code === 'ArrowUp') {
        event.preventDefault();
        if (player.y > 25) player.y -=15;
   
    } else if (event.code === 'ArrowDown') {
        event.preventDefault();
        if (player.y < canvas.height - 63) player.y +=15;
    
    } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        if (player.x < 75) player.x +=15;
    
    } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        if (player.x > 25) player.x -=15;
    }

    
})
