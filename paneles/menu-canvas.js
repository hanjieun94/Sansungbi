class Menucanvas{
    constructor(){
        
        this.dom = document.querySelector(".menu-canvas");
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        // this.newlec = new Newlec();
        this.menubg = new Menubackground();

        this.newlecAppearDelay = 5;

    }

    run(){
        this.update();
        this.draw();
    }
    update(){
        console.log("d");
    }
    draw(){
       
        // this.newlec.draw(this.ctx);
        this.menubg.draw(this.ctx);
        

    }
}