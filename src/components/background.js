import { canvas, ctx, game } from './config.js'


export default class Background {
    constructor (imgSource, xPos, yPos, width, height, scrollSpeed) {       
        this.image = new Image;
        this.image.src = imgSource;
        this.x = xPos;
        this.y = yPos;
        this.w = width;
        this.h = height;
        this.sp = scrollSpeed;
    }
    
    Scroll() {
        if (this.x <= -this.w + game.speed) {
            this.x = this.w;
        } else {
            this.x -= this.sp;
        }
        this.Draw();
    }

    AcceleratedScroll() {
        if (this.x <= -canvas.width) {
            this.x = canvas.width;
        } else {
            this.x -= game.speed;
        }
        this.Draw();
    }
    
    Draw() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}