class Ship{
    constructor(){

        this.img = document.querySelector("#ship");
        this.x = 0;
        this.y = 250;
        this.speed = 8;
        
    }

    draw(ctx){
        ctx.drawImage(this.img, 
            this.x,this.y,
            50,23.8);

    }
    update(){ 

        if(this.x>=680){
            window.location.href="../loading/mainMenu/main.html";
        } else{
            this.x += this.speed;
            this.y=this.y==250?255:250;
        }
            
    }
}