import Elem from "./Elem.js";
class Jatekter{
    /**Előállítja a játékot */
    constructor(szuloElem){
        for(let index=0; index <9; index++){
            new Elem(szuloElem);
        }
            let lepes = 0;
            let ertek = "";
            $(window).on("elemKivalszt", (event)=>{
                console.log(event.detail)
                /**minden eseménynek van egy alapértelmezett event objektuma */
                lepes++;
                if (lepes % 2 == 0){
                    ertek ="X";
                }else{
                    ertek="O";
                }
                event.detail.setErtek(ertek)
            })
    }

}

export default Jatekter;