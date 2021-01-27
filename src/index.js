import { canvas, ctx, game } from './components/config.js'
import Player from './components/player.js'
import Obstacle, { spawnObstacle } from './components/obstacle.js'
import checkCollision from './components/collision.js'
import Text from './components/text.js'
import "./styles/main.css";
import buildingsImg from "./img/buildings.png"
import sidewalkImg from "./img/sidewalk.png"
import playerSprite from "./img/playersprite.png"
import Background from "./components/background.js"
import gameOver from "./components/gameover.js"

document.addEventListener("DOMContentLoaded", () => {

    let scoreText;
    let highscoreText;
    let levelText;
    let startText;
    let player;
    let buildings;
    let sidewalk;

    function initialize() {
        player = new Player(playerSprite, 25, canvas.height - 250, 40, 112);
        buildings = [
            new Background(buildingsImg, 0, -15, canvas.width, canvas.height, 3),
            new Background(buildingsImg, canvas.width, -15, canvas.width, canvas.height, 3)
        ]
        sidewalk = [
            new Background(sidewalkImg, -100, canvas.height - 30, 1000, 30, game.speed),
            new Background(sidewalkImg, canvas.width, canvas.height-30, 1000, 30, game.speed)
        ]
        if (localStorage.getItem('highScore')) {
            game.highScore = localStorage.getItem('highScore');
        }
        scoreText = new Text("Score: " + game.score, canvas.width - 250, 40, "left", '#FFFFFF', 35);
        highscoreText = new Text("HighScore: " + game.highScore, canvas.width - 335, 80, "left", '#FFFFFF', 35);
        levelText = new Text("Level " + game.level, canvas.width / 2, canvas.height / 2, "center", 'yellow', 45);
        startText = new Text("Hit the 'Space Bar' or 'Arrow Up' key to play.", canvas.width / 2, canvas.height / 2, "center", 'white', 25);       
    }

    function startScreen() {
        if (game.state == 'playing') {
            requestAnimationFrame(update);
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            buildings[0].draw();
            sidewalk[0].draw();
            startText.draw();
            player.startScreen();
            requestAnimationFrame(startScreen);
        }
    }

    function update () {

        if (game.state == 'playing') {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            buildings[0].scroll();
            buildings[1].scroll();
            sidewalk[0].acceleratedScroll();
            sidewalk[1].acceleratedScroll();
            scoreText.draw();
            highscoreText.draw();
            scoreText.text = "Score: " + game.score;
            highscoreText.update("HighScore: " + game.highScore);
            player.animate();
            spawnObstacle();
            for (let i = 0; i < game.obstacles.length; i++) {
                game.obstacles[i].animate();
                checkCollision(player, game.obstacles[i])
            }
            game.frame++;
            if (game.frame % 10 == 0) {
                game.score++;
            }
            if (game.score > game.highScore) {
                game.highScore = game.score;
            }
            //give player a 80 frame break, 50 frames before each level increase
            if (game.frame % (game.levelIncr * game.level - 50) == 0) {
                game.spawnTimer = 80;
            }
            if (game.frame % 500 == 0 && game.speed <= game.speedMax) {
                game.speed += game.speedInc;
                game.level++;
                //game.spawnTimer = 80;
                //play game increase sound
            }
        }
        if (game.state == 'over') {
            gameOver(buildings, sidewalk, player, scoreText, highscoreText);
        }  
        requestAnimationFrame(update);
    }
    
    initialize();
    startScreen();
});