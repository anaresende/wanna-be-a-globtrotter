//  Create start game function
function runningGame(){
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
        return;
    }
    // stop sending opponents when you reach the other side of the court
    if (background.completeBasketCourt === 1) {
        clearInterval(opponentsId);

        const numOpponentsInCourt = opponentArray.filter((opponent, index) => {
            return opponent.x > 0 - opponent.width;
        });

        // no more opponents left
        if (numOpponentsInCourt.length === 0){
            if(!ball) {
                ball = new Ball(ctx);
            }

            // print the ball for shooting
            ball.draw();
            ball.move();
            background.drawTarget();
            clearInterval(player.flipImageIntervalId);
            player.drawShooter();
            
            // condition for the valid shot
            const score =
                ball.x + ball.width > background.targetX &&  
                ball.x < background.targetX + background.targetSize &&
                ball.y + ball.height > background.targetY &&
                ball.y < background.targetY + background.targetSize

            // condition for shooting ball out of the court    
            const ballIsOut =
                ball.x > canvas.width ||
                ball.y > canvas.height ||
                ball.y + ball.height < 0;

            
            if (score) {
                cancelAnimationFrame(frameId);
                clearInterval(opponentsId);
                document.getElementById("game-play").classList.remove("show");
                document.getElementById("game-win").classList.add("show");
                return;
            } else if (ballIsOut) {
                gameOver = 1;
                cancelAnimationFrame(frameId);
                clearInterval(opponentsId);
                document.getElementById("game-play").classList.remove("show");
                document.getElementById("game-over").classList.add("show");
            }   
        }
    };

    // update score
    const numOpponentsPassed = opponentArray.filter((opponent) => {
        return opponent.x < 0;
    });

    yourScore.points = numOpponentsPassed.length;
    yourScore.draw();


    //  Create a loop to animate the game
    frameId = requestAnimationFrame(runningGame);  
    frameCount++;
};



    

    
