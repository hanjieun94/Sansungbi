class Ship{
    constructor(){

        this.img = document.querySelector("#ship");
        this.x = 0;
        this.y = 250;
        this.speed = 10;
        
    }

    // set y(value){
    //     this.y = value;
    // }
    // get y(){
    //     return this.y;
    // }

    draw(ctx){
        ctx.drawImage(this.img, 
            this.x,this.y,
            50,23.8);

    }
    update(){ 
        this.x += this.speed;
        
        this.y=this.y==250?255:250;
    }
}