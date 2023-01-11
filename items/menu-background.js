class Menubackground{

    constructor(){
        this.img = document.querySelector("#menu");
        this.x = 10;
        this.y = 10;
        
    }
    draw(ctx){
        console.log("avcs");

        ctx.drawImage(this.img,
            this.x,this.y);
    }
}