export default class Ship{
    constructor(){

        this.img = document.querySelector("#ship");
        this.x = 100;
        this.y = 100;
    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }
}