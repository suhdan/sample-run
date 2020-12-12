import { canvas, ctx, game } from './config.js'

export default function checkCollision (player, obst) {

    if ( 
        player.xPos                 < obst.xPos + obst.width &&
        player.xPos + player.width  > obst.xPos          &&
        player.yPos                 < obst.yPos + obst.height &&
        player.yPos + player.height > obst.yPos
    ) {
        //Automatically restart game
        //TO DO: game over screen
        game.obstacles = [];
        game.score = 0;
        game.spawnTimer = game.initialTimer;
        game.speed = 10;
        window.localStorage.setItem('highScore', game.highScore);
        game.over = true;
    }
}