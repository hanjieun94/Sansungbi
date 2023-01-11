class Introcavas{
    constructor(){

        //canvas사용
        this.dom = document.querySelector(".intro-canvas");
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.ship = new Ship();
        this.intbg = new Introbackground();
        this.sun = new Sun();

        this.shipShakeDelay = 1;
        this.sunAppearDelay = 5;



    }
    run(){
        this.update();
        this.draw();
        window.setTimeout(this.run.bind(this), 100);

    }
    update(){

        this.shipShakeDelay--;
        if(this.shipShakeDelay == 0){

            this.ship.update();

            this.shipShakeDelay=Math.floor(Math.random()*2)+2;
        }

        this.sunAppearDelay--;
        if(this.sunAppearDelay == 0){

            this.sun.update();

            this.sunAppearDelay = 5;
        }

    }
    draw(){
        this.intbg.draw(this.ctx);
        this.ship.draw(this.ctx);
        this.sun.draw(this.ctx)
;    }


}