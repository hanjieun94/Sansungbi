import Introbackground from "../item/intro-background";
import Ship from "../item/ship";

export default class Introcavas{
    constructor(){

        //canvas사용
        this.dom = document.querySelector("intro-canvas");
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.ship = new Ship();
        this.intbg = new Introbackground();
    }
    run(){
        console.log("hi");
    }
    draw(){
        this.intbg.draw(this.ctx);
        this.ship.draw(this.ctx);
    }


}