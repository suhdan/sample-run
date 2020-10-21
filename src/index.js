import { canvas, ctx, game } from './components/config.js'
import Player from './components/player.js'
import Obstacle, { Spawn } from './components/obstacle.js'
import checkCollision from './components/collision.js'
import Text from './components/text.js'
import "./styles/main.css";
import buildingsImg from "./img/sober-run-buildings.png"
import sidewalkImg from "./img/sober-run-sidewalk2.png"
import Background from "./components/background.js"

document.addEventListener("DOMContentLoaded", () => {

    canvas.width = 800;
    canvas.height = 400;
    let scoreText;
    let player;
    let buildings;
    let sidewalk;

    function Start() {

        player = new Player(25, canvas.height - 150, 50, 50, '#FFFFFF');
        buildings = [
            new Background(buildingsImg, 
                            0, 
                            0, 
                            canvas.width, 
                            canvas.height, 
                            3,
                            0),
            new Background(buildingsImg, 
                            canvas.width, 
                            0, 
                            canvas.width, 
                            canvas.height, 
                            3, 
                            0)
        ]
        sidewalk = [
            new Background(sidewalkImg, 
                            0, 
                            canvas.height - 30,
                            1000,
                            30,
                            game.speed),
            new Background(sidewalkImg,
                            canvas.width,
                            canvas.height-30,
                            1000,
                            30,
                            game.speed)
        ]
        
        if (localStorage.getItem('highScore')) {
            game.highScore = localStorage.getItem('highScore');
        }
        
        scoreText = new Text("Score: " + game.score + " HighScore: " + game.highScore, canvas.width - 35, 40, "right", '#FFFFFF', 35);
        requestAnimationFrame(Update);
    }

    function Update () {

        requestAnimationFrame(Update);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        buildings[0].Scroll();
        buildings[1].Scroll();
        sidewalk[0].AcceleratedScroll();
        sidewalk[1].AcceleratedScroll();
        Spawn();

        for (let i = 0; i < game.obstacles.length; i++){
            game.obstacles[i].Animate();
            checkCollision(player, game.obstacles[i]);
        }

        player.Animate();

        scoreText.Draw();
        scoreText.t = "Score: " + Math.trunc(game.score/10) + " HighScore: " + game.highScore;
        game.score++;

        if (Math.trunc(game.score/10) > game.highScore) {
            game.highScore = Math.trunc(game.score/10);
        }
        if (game.score % 200 ==  0 && game.speed <= game.speedMax) {
            game.speed += game.speedInc;
            console.log('gamespeed increases!', game.speed);
            }

        // if (game.speed < game.speedMax) {
        // game.speed += game.speedInc;
        // }    
    }

    Start();
});