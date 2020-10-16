import { canvas, ctx } from './config.js' 

export default class Text {
    constructor (text, xPos, yPos, alignment, color, size){
        this.t = text;
        this.x = xPos;
        this.y = yPos;
        this.a = alignment;
        this.c = color;
        this.s = size;
    }
    Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.font = this.s + "px monospace"; 
        ctx.textAlign = this.a;
        ctx.fillText(this.t, this.x, this.y);
        ctx.closePath();
    }
}