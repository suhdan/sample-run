import { canvas, ctx, game } from './config.js'

let keys = {};
document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
});


export default class Player {
    constructor (imgSource, xPos, yPos, width, height) {
        this.image = new Image();
        this.image.src = imgSource;
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.xFrame = 0;
        this.ySpeed = 0;
        this.jumpForce = 18;
        this.grounded = false;
        this.jumpTimer = 0;
    }
    
    animate () {

        if (keys['Space'] || keys['ArrowUp']) {
            this.jump();
        } else {
            this.jumpTimer = 0;
        }
        this.yPos += this.ySpeed;

        //Gravity
        if (this.yPos + this.height < canvas.height - 10) {
            this.ySpeed += game.gravity;
            this.grounded = false;
            this.xFrame = 3;
        } else {
            this.ySpeed = 0;
            this.grounded = true;
            this.yPos = canvas.height - this.height - 10;
            if(game.frame % 5 == 0) this.xFrame++;
            if (this.xFrame > 2) this.xFrame = 1;
            //console.log(this.xFrame, game.score);
        }

        this.draw();
    }

    startScreen() {
        if (keys['Space'] || keys['ArrowUp']) {
            game.state = 'playing';
            this.jump();
        } else {
            this.jumpTimer = 0;
        }
        this.yPos += this.ySpeed;

        //Gravity
        if (this.yPos + this.height < canvas.height - 10) {
            this.ySpeed += game.gravity - .75;
            this.grounded = false;
            this.xFrame = 3;
        } else {
            this.ySpeed = 0;
            this.grounded = true;
            this.yPos = canvas.height - this.height - 10;
            this.xFrame = 0;
        }

        this.draw();
    }

    jump () {
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
    draw () {
        ctx.drawImage(this.image, this.xFrame * 40, 0, 40, 112, this.xPos, this.yPos, this.width, this.height);
    }
}