//  Create start game function
function startGame(){
    console.log('start game is running')
    //  Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //  Paint the background
    background.draw(frameCount);

    //  Paint the player
    player.draw();
    

    //  Print the opponents
    opponentArray.forEach((opponent) => {
        if (gameOver === 1) return;
        
        opponent.draw();
        opponent.move();
        
        // check for collision
        let crash =
            player.x < opponent.x + opponent.width && 
            player.x + opponent.width > opponent.x &&
            player.y < opponent.y + opponent.height &&
            player.y + player.height > opponent.y;

        if (crash) {
            gameOver = 1;
            cancelAnimationFrame(frameId);
            clearInterval(opponentsId);
            document.getElementById("game-play").classList.remove("show");
            document.getElementById("game-over").classList.add("show");
            
            
        }
    });
    
    if(gameOver === 1) {
        console.log('game over')
        return;
    }
    // stop sending opponents when you reach the other side of the court
    if (background.completeBasketCourt === 1) {
        clearInterval(opponentsId);

        const numOpponentsInCourt = opponentArray.filter((opponent, index) => {
            return opponent.x > 0 - opponent.width;
        });

        if (numOpponentsInCourt.length === 0){
            document.getElementById("game-play").classList.remove("show");
            document.getElementById("game-win").classList.add("show");
        }
    };

    // update score
    const numOpponentsPassed = opponentArray.filter((opponent) => {
        return opponent.x < 0;
    });

    yourScore.points = numOpponentsPassed.length;
    yourScore.draw();


    //  Create a loop to animate the game
    frameId = requestAnimationFrame(startGame);  
    frameCount++;
    console.log('frameId - start game', frameId)  
};



    

    
