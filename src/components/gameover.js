import { canvas, ctx, game } from './config.js'
import Text from './text.js'

let gameOverText = new Text("GAME OVER", canvas.width/2, canvas.height/2, "center", 'gray', 45);
  
export default function gameOver () {
    //Configurations for restart
    game.obstacles = [];
    game.score = 0;
    game.spawnTimer = game.initialTimer;
    game.speed = 10;
    window.localStorage.setItem('highScore', game.highScore);
    gameOverText.draw();
}