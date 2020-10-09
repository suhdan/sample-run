import { canvas, ctx, game } from './components/config.js'
import Player from './components/player.js'
import Obstacle, { Spawn } from './components/obstacle.js'
import checkCollision from './components/collision.js'
import Text from './components/text.js'
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {

    let scoreText;
    let player;

    function Start() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        player = new Player(25, canvas.height - 150, 50, 50, '#000000');
        
        if (localStorage.getItem('highScore')) {
            game.highScore = localStorage.getItem('highScore');
        }
        
        scoreText = new Text("Score: " + game.score + " HighScore: " + game.highScore, canvas.width - 35, 40, "right", '#000000', 35);
        requestAnimationFrame(Update);
    }

    function Update () {

        requestAnimationFrame(Update);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
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

        if (game.speed < game.speedMax) {
        game.speed += game.speedInc;
        }    
    }

    Start();
});