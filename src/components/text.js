import { canvas, ctx } from './config.js' 

export default class Text {
    constructor (text, xPos, yPos, alignment, color, size, fontFamily){
        this.text = text;
        this.xPos = xPos;
        this.yPos = yPos;
        this.alignment = alignment;
        this.color = color;
        this.size = size;
        this.fontFamily = 'Orbitron';
    }
    update(newText) {
        this.text = newText;
    }

    draw () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.font = this.size + "px " + this.fontFamily; 
        ctx.textAlign = this.alignment;
        ctx.fillText(this.text, this.xPos, this.yPos);
        ctx.closePath();
    }
}