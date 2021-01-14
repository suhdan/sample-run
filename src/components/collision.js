import { canvas, ctx, game } from './config.js'

export default function checkCollision (player, obst) {

    if ( 
        player.xPos                 < obst.xPos + obst.width &&
        player.xPos + player.width  > obst.xPos          &&
        player.yPos                 < obst.yPos + obst.height &&
        player.yPos + player.height > obst.yPos
    ) {
        return true;
    }
}