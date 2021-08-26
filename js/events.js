// BEFORE PLAYING

function readInstructions() {
    document.getElementById("game-instructions").classList.remove("show");
    document.getElementById("game-intro").classList.add("show");
    audioClick.play();
}




// // START GAME
// function startGame() {
//     runningGame();
//     audioClick.play();
//     audioGameplay.play();

//     // changing from the splash page to the gameplay
//     document.getElementById("game-instructions").classList.remove("show");
//     document.getElementById("game-over").classList.remove("show");
//     document.getElementById("game-intro").classList.remove("show");
//     document.getElementById("game-play").classList.add("show");
    

//     // Setting the interval for the opponents appear only when click start button

//     opponentsId = setInterval(function () {
//         let opponentY = getRandomNumber(20, 187)
//         //let opponentY = getRandomNumber(10, 150) // for tests only
//         let opponent = new Opponent(ctx, canvas.width, opponentY, 2.5);
//         opponentArray.push(opponent);

//     },1000)
    
//     gameStarted = 1;

// };

// RESTART GAME
function startGame() {
    audioClick.play();
    audioGameplay.play();
    document.getElementById("game-intro").classList.remove("show");
    document.getElementById("game-instructions").classList.remove("show");
    document.getElementById("game-over").classList.remove("show");
    document.getElementById("game-win").classList.remove("show");
    document.getElementById("game-play").classList.add("show");

    // Setting the interval for the opponents appear only when click start button
    opponentsId = setInterval(function () {
        let opponentY = getRandomNumber(20, 187)
        //let opponentY = getRandomNumber(10, 150) // for tests only
        let opponent = new Opponent(ctx, canvas.width, opponentY, 2.5);
        opponentArray.push(opponent);

    },1000)

    // Reset all the positions and variables
    clearInterval(player.flipImageIntervalId);
    ctx = null;
    ctx = canvas.getContext('2d');
    gameStarted = 1;
    gameOver = 0;
    background.init();
    player.init();
    opponentArray = []
    frameCount = 0;
    yourScore.points =  0;
    ball = null;

    runningGame();
    gameStarted = 1;
}

// put the movement of the player im a function so that it can be used also with the buttons
function goUp() {
    if (player.y > 20){
        player.y -= 15; 
        if (ball) {
            ball.y = player.y
        }
    } 
}

function goDown() {
    if (player.y < canvas.height - 63){
        player.y += 15; 
        if (ball){
            ball.y = player.y;
        }
     } 
}

function goRight() {
    if (player.x < 75) {
        player.x += 15;
        if (ball) {
            ball.x = player.x + 15;
        }
    }
}

function goLeft() {
    if (player.x > 25){
        player.x -= 15;  
        if (ball){
            ball.x = player.x + 15;
        }
    } 
}

function shotBall() {
    if (ball){ 
        ball.speedX = 2;
        ball.speedY = 1.5;

        audioShooting.play();
        setTimeout(() => {
             ball.speedY = -1.5;
        }, 600);
    }
}

//  Paint the player - prepare the keypress 
document.addEventListener('keydown', (event) => {

    if (event.code === 'ArrowUp') {
        event.preventDefault();
        goUp();
   
    } else if (event.code === 'ArrowDown') {
        event.preventDefault();
        goDown();
        
    } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        goRight();
    
    } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        goLeft();
    
    }else if (event.code === 'Space') {
        event.preventDefault();
        shotBall();
    } 
})


