import { canvas, ctx, game } from './config.js'

export default class Obstacle {
    constructor (xPos, yPos, width, height, color){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
    }      
    Animate () {
        this.xPos -= game.speed;
        this.Draw();
    }
    Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
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
        if (game.obstacles[0].xPos + game.obstacles[0].width < 0) {
            game.obstacles.shift();
        }
    }
}