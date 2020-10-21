import { canvas, ctx, game } from './config.js'

export default function checkCollision (player, obst) {

    if ( 
        player.x            < obst.x + obst.w &&
        player.x + player.w > obst.x          &&
        player.y            < obst.y + obst.h &&
        player.y + player.h > obst.y
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