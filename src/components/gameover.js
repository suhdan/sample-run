import { canvas, ctx, game } from './config.js'
import Text from './text.js'
let gameOverText = new Text("GAME OVER", canvas.width/2, canvas.height/2, "center", 'gray', 45);
let restartText = new Text("Hit 'r' to play again", canvas.width/2, canvas.height/2 + 50, "center", 'gray', 25);
let key = {};
document.addEventListener('keydown', function (evt) {
    key[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    key[evt.code] = false;
});
export default function gameOver (buildings, sidewalk, player, scoreText, highscoreText) {
    
    if (key['KeyR']) {
        game.state = 'playing';
        window.localStorage.setItem('highScore', game.highScore); 
        game.obstacles = [];
        game.frame = 0;
        game.score =  0;
        game.spawnTimer = game.initialTimer;
        game.speed = 10;
    }  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    buildings[0].draw();
    buildings[1].draw();
    sidewalk[0].draw();
    sidewalk[1].draw();
    player.draw();
    scoreText.draw();
    highscoreText.draw();
    for (let j = 0 ; j < game.obstacles.length; j++)
    game.obstacles[j].draw();
    gameOverText.draw();
    restartText.draw(); 
    //option to view leaderboard
}
//fill in later
export function gamePlaying () {

}