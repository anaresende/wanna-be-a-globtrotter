//  Getting the canvas and create its context and initialize other variables
const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let frameId= null;
let opponentsId = null;
let gameStarted = 0; // flag to know if the game is started
let gameOver = 0;
let opponentArray = []
let frameCount = 0;
let ball = null;

// Tunes for the game
const audioClick = new Audio();
audioClick.src = "./assets/start-continue-sound.mp3"

const audioGameplay = new Audio();
audioGameplay.src = "./assets/gameplay-music.mp3"
audioGameplay.volume = 0.1;

const audioWinnig = new Audio();
audioWinnig.src = "./assets/winning-sound.mp3"

const audioLoser = new Audio();
audioLoser.src ="./assets/loser-sound.mp3"

const audioShooting = new Audio();
audioShooting.src = "./assets/shooting-sound.mp3"

//  Setting up the Background
const background = new Background(ctx);

//  Setting up the Player
const player = new Player(ctx, 25, canvas.height/2 - 18);
player.init();

// Adding scores 
const yourScore = {
    points: 0,
    draw: function () {
        ctx.font = '10px Early GameBoy';
        ctx.fillStyle = 'black';
        ctx.fillText('Score: ' + this.points, 10, 20);
    }
};

// Helper to get a random number, with a minimum and maximum height,
// so that the opponents can appear inside the lines of the basketball court
function getRandomNumber(min, max){
    return Math.random() * (max - min) + min; 
}