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
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ySpeed = 0;
        this.jumpForce = 15;
        this.grounded = false;
        this.jumpTimer = 0;
    }
    
    Animate () {

        if (keys['Space'] || keys['ArrowUp']) {
            this.Jump();
        } else {
            this.jumpTimer = 0;
        }
        this.yPos += this.ySpeed;

        //Gravity
        if (this.yPos + this.height < canvas.height - 10) {
            this.ySpeed += game.gravity;
            this.grounded = false;
        } else {
            this.ySpeed = 0;
            this.grounded = true;
            this.yPos = canvas.height - this.height - 10;
        }

        this.Draw();
    }

    Jump () {
        if (this.grounded && this.jumpTimer == 0){
            this.jumpTimer = 1;
            this.ySpeed = -this.jumpForce;
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
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.closePath;
    }

}