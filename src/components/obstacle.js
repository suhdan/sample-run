import { canvas, ctx, game } from './config.js'
import officerImg from "../img/obstacle3.png"
import manImg from "../img/obstacle1.png"
import girlImg from "../img/obstacle2.png"


export default class Obstacle {
    constructor (imgSource, xPos, yPos, width, height,imgWidth,color){
        this.image = new Image()
        this.image.src = imgSource;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.imgWidth = imgWidth;
        this.color = color;
    }      
    animate () {
        this.xPos -= game.speed;
        this.draw();
    }
    draw () {
        /* for testing hidden collision box
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.closePath;
        */
        ctx.drawImage(this.image, 0, 0, this.imgWidth, this.height, this.xPos-(this.imgWidth-this.width)/2, this.yPos, this.imgWidth, this.height)

    }
}

export function spawnObstacle () {
    if (game.spawnTimer <= 0) {
        let obstacle;
        let obstaclePicker = Math.floor(Math.random() * 3);
        switch(obstaclePicker) {
            case 0:
                obstacle = new Obstacle(officerImg, canvas.width + 55, canvas.height - 120 - 10, 32, 120, 55, '#FF0000');
                break;
            case 1:
                obstacle = new Obstacle(manImg, canvas.width + 47, canvas.height - 112 - 10, 32, 112, 47, '#FF0000');
                break;
            case 2:
                obstacle = new Obstacle(girlImg, canvas.width + 33, canvas.height - 100 - 10, 30, 110, 33, '#FF0000')
        }
 
        game.obstacles.push(obstacle);;
        game.spawnTimer = Math.floor(Math.random() * 30 + 30);
        //if more than 2 obstacles are within 40 frames of the other than set the next obstacle to spawn in 60s
        if(game.obstacles.length > 1){
            //console.log(game.obstacles[game.obstacles.length-1].xPos - game.obstacles[game.obstacles.length-2].xPos)
            if(game.obstacles[game.obstacles.length-1].xPos - game.obstacles[game.obstacles.length-2].xPos < 400 && game.spawnTimer < 40){
            game.spawnTimer = 60;
            }
        };
    }
    game.spawnTimer--;

    if (game.obstacles.length > 1) {
        if (game.obstacles[0].xPos + game.obstacles[0].width < 0) {
            game.obstacles.shift();
        }
    }
}