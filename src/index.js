import { canvas, ctx, game } from './config.js'
import Player from './player.js'
import Obstacle, { Spawn } from './obstacle.js'
import Text from './text.js'

document.addEventListener("DOMContentLoaded", () => {

    let scoreText;
    let player;

    function Start() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        player = new Player(25, canvas.height - 150, 50, 50, '#000000');
        scoreText = new Text("Score: " + game.score, canvas.width - 35, 40, "right", '#000000', 35);
        requestAnimationFrame(Update);
    }

    function Update () {

        requestAnimationFrame(Update);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        Spawn();
        //animate all obstacles per frame
        for (let i = 0; i < game.obstacles.length; i++){
            game.obstacles[i].Animate();
        }

        player.Animate();
        scoreText.Draw();
        scoreText.t = "Score: " + Math.trunc(game.score/10);
        game.score++;
        if (game.speed < game.speedMax) {
        game.speed += game.speedInc;
        }    
    }

    Start();
});