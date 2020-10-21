import { canvas, ctx, game } from './config.js'

let keys = {};
document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
});


export default class Player {
    constructor (xPos, yPos, width, height, color) {
        this.x = xPos;
        this.y = yPos;
        this.w = width;
        this.h = height;
        this.c = color;
        this.dy = 0;
        this.jumpForce = 15;
        this.originalHeight = height;
        this.grounded = false;
        this.jumpTimer = 0;
    }
    
    Animate () {

        if (keys['Space'] || keys['ArrowUp']) {
            this.Jump();
        } else {
            this.jumpTimer = 0;
        }
        this.y += this.dy;

        //Gravity
        if (this.y + this.h < canvas.height - 10) {
            this.dy += game.gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h - 10;
        }

        this.Draw();
    }

    Jump () {
        if (this.grounded && this.jumpTimer == 0){
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        } 
        // OPTIONAL CODE: add code below
        // to make Player jump higher when space/ArrowUp key is held down
        //__________________________________________________________
            //else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            //this.jumpTimer++;
            //this.dy = -this.jumpForce - (this.jumpTimer / 50);
            //}
        //_____________________________________________________________
    }    
    Draw () {
    //Change to a humanoid figure later
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath;
    }

}