# Wanna be a Globtrotter ?

Do you have what it takes to make the cut ? 
Try it out here : https://anaresende.github.io/wanna-be-a-globtrotter/



# Description
Globtrotters are known for it’s amazing plays and for mocking, with their awesome stunts, their opponents.

Wanna be a Globtrotter? is a retro inspired game in which the main purpose is to go trough the basketball court dodging all of the players from the other team and to score a basket at the end. 


# MVP
- the player moves up and down the basketball court, respecting the lines
- the background scrolls until it reaches the end of the basketball court
- for each opponent the player is able to dodge the score will increase
- if the player crash with one of the opponents it will determinate the game over
- if the player is able to go trough all of the basketball without crashing any opponent it will determinate the game win 


# Backlog
## Accomplished
    - player is able to shoot the ball when it reaches the end of basketball court
    - if the player scores it will be game win, if it fails it will be game over
    - set buttons so you can use the game boy to play the game
    - get the game ready to be played on mobile
## To work on
    - add a timer so that the player can reach the end of the game and shoot in 24 seconds, so that the player can experience the true basketball experience  
    - fix bugs for the mobile experience 


# Data structure
## initialize-game.js
- all of the variables to start the game

## running-game.js
- runningGame(){}

## events.js
- readInstructions(){}
- startGame(){}
- goUp(){}
- goDown(){}
- goRight(){}
- goLeft(){}
- shootBall(){}

## background.js
- Background(canvasContext){}
- draw(){}
- drawTarget(){}
- init(){}

## player.js
- Player(canvasContext, initialPositionX, initialPositionY){}
- draw(){}
- init(){}
- drawShooter(){}

## opponent.js
- Opponent(canvasContext, positionX, positionY, speed)
- draw(){}
- move(){}

## ball.js
- Ball(canvasContext){}
- draw(){}
- move(){}

# Task
- initialize-game - set all variables
- initialize-game - create the canvas
- background - create the background class
- player - create the player class
- opponent - create the opponents class
- running-game - background draw
- running-game - player draw
- events - startGame
- events - new Opponent
- running-game - crash
- running-game - gameOver
- player - drawShooter(){}
- ball - create the ball class
- running-game - ball draw
- running-game - ball move
- running-game - background draw target
- running-game - score


### Trello
https://bit.ly/3sRwn7j


### Slides
https://shorturl.at/fgyR3