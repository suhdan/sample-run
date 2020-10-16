import { canvas, ctx, game } from './config.js'

export default class Obstacle {
    constructor (xPos, yPos, width, height, color){
        this.x = xPos;
        this.y = yPos;
        this.w = width;
        this.h = height;
        this.c = color;
    }      
    Animate () {
        this.x -= game.speed;
        this.Draw();
    }
    Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath;
    }
}

export function Spawn () {
    if (game.spawnTimer <= 0) {
    let size = 50;
    //Change to humanoid with shot
    let obstacle = new Obstacle(canvas.width + size, canvas.height - size - 10, size, size, '#FF0000');
    
    game.obstacles.push(obstacle);;
    //Make spawnTimer random
    game.spawnTimer = 60;
    }
    game.spawnTimer--;

    if (game.obstacles.length > 1) {
        if (game.obstacles[0].x + game.obstacles[0].w < 0) {
            game.obstacles.shift();
        }
    }
}