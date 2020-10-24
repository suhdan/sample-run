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
    
    Scroll() {
        if (this.xPos <= -this.width + game.speed) {
            this.xPos = this.width;
        } else {
            this.xPos -= this.scrollSpeed;
        }
        this.Draw();
    }

    AcceleratedScroll() {
        if (this.xPos <= -canvas.width) {
            this.xPos = canvas.width;
        } else {
            this.xPos -= game.speed;
        }
        this.Draw();
    }
    
    Draw() {
        ctx.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
    }
}