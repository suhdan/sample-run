import { canvas, ctx, game } from './config.js'


export default class Background {
    constructor (imgSource, xPos, yPos, width, height, scrollSpeed) {       
        this.image = new Image;
        this.image.src = imgSource;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.scrollSpeed = scrollSpeed;
    }
    
    scroll() {
        if (this.xPos <= -this.width + game.speed) {
            this.xPos = this.width;
        } else {
            this.xPos -= this.scrollSpeed;
        }
        this.draw();
    }

    acceleratedScroll() {
        if (this.xPos <= -1000) {
            this.xPos = 800;
        } else {
            this.xPos -= game.speed;
        }
        this.draw();
    }
    
    draw() {
        ctx.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
    }
}