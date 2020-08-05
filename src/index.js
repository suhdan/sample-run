document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');

    //Variables
    let score;
    let highscore;
    let player;
    let gravity;
    let obstacles; //not yet used
    let gameSpeed;
    let keys = {};

    //Event Listener for keyboard interaction
    document.addEventListener('keydown', function (evt) {
        keys[evt.code] = true;
        //test for key code
        console.log(evt.code);
    });
    document.addEventListener('keyup', function (evt) {
        keys[evt.code] = false;
    });

    class Player {
                // x & y position, width & height, color
        constructor (x, y, w, h, c) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;
            //direction of y
            this.dy = 0;
            this.jumpForce = 15;
            this.originalHeight = h;
            this.grounded = false;
            this.jumpTimer = 0;
        }

        Animate () {

            //Jump 
            if (keys['Space'] || keys['ArrowUp']) {
                this.Jump();
            } else {
                this.jumpTimer = 0;
            }
            this.y += this.dy;

            //Gravity
            if (this.y + this.h < canvas.height) {
                this.dy += gravity;
                this.grounded = false;
            } else {
                this.dy = 0;
                this.grounded = true;
                this.y = canvas.height - this.h;
            }

            this.Draw();
        }

        Jump () {
            if (this.grounded && this.jumpTimer == 0){
                this.jumpTimer = 1;
                this.dy = -this.jumpForce;
            } 
            // can add else if statement below
            // to make Player jump higher when space/W key is held down

                //else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
                //this.jumpTimer++;
                //this.dy = -this.jumpForce - (this.jumpTimer / 50);
                //}
        }    


        Draw () {
        //Rectangles for now
        //Change to a humanoid figure later
            ctx.beginPath();
            ctx.fillStyle = this.c;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.closePath;
        }

    }
    //Enemies
    class Obstacle {
        constructor (x, y, w, h, c){
            this.x = x;
            this.y = t;
            this.w = w;
            this.h = h;
            this.c = c;

            this.dx = -gameSpeed;

        }
        
        //obstacles constantly move to the left
        Update () {
            this.x += this.dx;
            this.Draw();
            this.dx = -gameSpeed;
        }

        Draw () {
            ctx.beginPath();
            ctx.fillStyle = this.c;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.closePath;
        }
    }

    //main function
    function Start() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        gameSpeed = 3;
        gravity = 1;

        score = 0;
        highscore = 0;

        ctx.font = "35px sans-serif";
        ctx.fillStyle = '#000000';
        ctx.textAlign = "center";
        ctx.fillText("SOBER RUN!", canvas.width / 2, 40);

        //initialize new black square player
        player = new Player(25, canvas.height - 150, 50, 50, '#000000');
        
        //begin animation
        requestAnimationFrame(Update);
    }

    //update every frame
    function Update () {
        requestAnimationFrame(Update);
        //clear canvas except 'SOBER RUN' title
        ctx.clearRect(0, 60, canvas.width, canvas.height);
        player.Animate();
        }

    
    Start();
});