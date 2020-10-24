import { canvas, ctx } from './config.js' 

export default class Text {
    constructor (text, xPos, yPos, alignment, color, size){
        this.text = text;
        this.xPos = xPos;
        this.yPos = yPos;
        this.alignment = alignment;
        this.color = color;
        this.size = size;
    }
    Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.font = this.size + "px monospace"; 
        ctx.textAlign = this.alignment;
        ctx.fillText(this.text, this.xPos, this.yPos);
        ctx.closePath();
    }
}