class Sun{

    constructor(){

        this.img = document.querySelector("#sun");
        this.x = 0;
        this.y = 0;

        this.cw = 150;
        this.ch = 150;
        
    }
    update(){
        
        this.cw -= 45;
        this.ch -= 45;
    }
    draw(ctx){
        ctx.drawImage(this.img, 
            this.x,this.y,
            this.cw,this.ch);
    }
}