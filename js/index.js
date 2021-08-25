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
    let gameStarted = 0; // flag to know if the game is started
    let gameOver = 0;

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

    document.getElementById("restart-button").onclick = function(event) {
        startGame();

        // changing from the splash page to the gameplay
        console.log('start')
        document.getElementById("game-over").classList.remove("show");
        document.getElementById("game-play").classList.add("show");
         

          // Setting the interval for the opponents appear only when click start button
    
        opponentsId = setInterval(function () {
            // let opponentY = getRandomNumber(20, 395)
            let opponentY = getRandomNumber(10, 150) // for tests only
            let opponent = new Opponent(ctx, canvas.width, opponentY, 2.5);
            opponentArray.push(opponent);

        },1000)
        
        gameStarted = 1;
    }

    //  Setting up the Background
    const background = new Background(ctx);

    //  Setting up the Player
    const player = new Player(ctx, 25, canvas.height/2 - 18);

    //  Setting up the opponents
    const opponentArray = []

    // Adding scores 
    const yourScore = {
		points: 0,
		draw: function () {
			ctx.font = '16px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Score: ' + this.points, 100, 25);
		}
	};


    // Check for collision to determinate game over state
    function checkCollisions(player, opponent) {
		let crash =
			player.x < opponent.x + opponent.width && 
			player.x + opponent.width > opponent.x &&
			player.y < opponent.y + opponent.height &&
			player.y + player.height > opponent.y;

		if (crash) {
            gameOver = 1;
            // console.log(frameId)
			cancelAnimationFrame(frameId);
			clearInterval(opponentsId);
			//alert('Game over!');
			// window.location.reload();
            document.getElementById("game-play").classList.remove("show");
            document.getElementById("game-over").classList.add("show");
            
		}
	}

    function updateScore() {
		const numOpponentsPassed = opponentArray.filter((opponent) => {
			return opponent.x < 0;
		});

		yourScore.points = numOpponentsPassed.length;
        yourScore.draw();
	}


    //  Create start game function
    function startGame(){

        //  Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

         //  Paint the background
        background.draw(frameId);

        //  Paint the player
        player.draw();
        //player.move();

        //  Print the opponents
        opponentArray.forEach((opponent) => {
            if (gameOver === 1) return;
            
            opponent.draw();
            opponent.move();
            checkCollisions(player, opponent); 

        });
        
        // stop sending opponents
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

        updateScore();
    
    
        //  Create a loop to animate the game
        frameId = requestAnimationFrame(startGame);    
    };

    
    //  Paint the player - prepare the keypress 
    window.addEventListener('keydown', (event) => {
        //console.log('keydown', event.code, player.y, player.speedY)
        event.preventDefault();
        // switch (event.code){
        //     case 'ArrowUp':
        //         if (player.y > 20) {
        //             player.move();
        //             //event.preventDefault();
        //             console.log('move up');       
        //         }
        //         break;        
        //     case 'ArrowDown':
        //         //console.log('tas a descer?', player.y, canvas.height- 105)
        //         if (player.y < canvas.height - 105) {
        //             player.move();
        //             //event.preventDefault();
        //             console.log(' move down');
        //         }
        //         break;
        //     default:
        //         break;
        // }

        if (event.code === 'ArrowUp') {
            
            if (player.y > 25) player.y -=15;
            console.log('up')
        } else if (event.code === 'ArrowDown') {
        
            if (player.y < canvas.height - 63) player.y +=15;
            console.log('down')
        

    }})
    

    //  set the keyup
    window.addEventListener('keyup', (event) =>{
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown'){
            player.speedY = 0;
        }
    })
    
}
