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
import gameover from "./components/gameover.js"

document.addEventListener("DOMContentLoaded", () => {

    let scoreText;
    let levelText;
    let player;
    let buildings;
    let sidewalk;

    function Start() {
        player = new Player(playerSprite, 25, canvas.height - 150, 40, 112);
        buildings = [
            new Background(buildingsImg, 0, -15, canvas.width, canvas.height, 3),
            new Background(buildingsImg, canvas.width, -15, canvas.width, canvas.height, 3)
        ]
        sidewalk = [
            new Background(sidewalkImg, 0, canvas.height - 30, 1000, 30, game.speed),
            new Background(sidewalkImg, canvas.width, canvas.height-30, 1000, 30, game.speed)
        ]
        if (localStorage.getItem('highScore')) {
            game.highScore = localStorage.getItem('highScore');
        }
        scoreText = new Text("Score: " + game.score + " HighScore: " + game.highScore, canvas.width - 35, 40, "right", '#FFFFFF', 35);
        levelText = new Text("Level " + game.level, canvas.width/2, canvas.height/2, "center", 'yellow', 45);
        
        requestAnimationFrame(Update);
    }

    function Update () {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        buildings[0].scroll();
        buildings[1].scroll();
        sidewalk[0].acceleratedScroll();
        sidewalk[1].acceleratedScroll();
        scoreText.draw();
        scoreText.text = "Score: " + game.score + " HighScore: " + game.highScore;
        
        game.frame++;
        if(game.frame % 10 == 0) {
            game.score++;
        }
        for (let i = 0; i < game.obstacles.length; i++){
            game.obstacles[i].animate();
            if(checkCollision(player, game.obstacles[i])){
                player.xFrame = 4;
                player.draw();
                for (let j = i+1; j < game.obstacles.length; j++)
                    game.obstacles[j].animate();
                gameover();
                return; 
            }
        }
        spawnObstacle(); 
        player.animate();
        if (game.score > game.highScore) {
            game.highScore = game.score;
        }
        if(game.frame % (game.levelInc * game.level -50) == 0) {
            game.spawnTimer = 80;
        } 
        if (game.frame % 500 == 0 && game.speed <= game.speedMax) {
            game.speed += game.speedInc;
            game.level++;
            //game.spawnTimer = 80;
            //play game increase sound
            }    
        requestAnimationFrame(Update);
    }

    Start();
});