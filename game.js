"use strict";

import {endConditions} from "./EndConditions.js";



var cells = { a1:"empty", a2:"empty", a3:"empty",
                b1:"empty", b2:"empty", b3:"empty",
                c1:"empty", c2:"empty", c3:"empty", }

console.log(cells);

var counter = 0
var flag =0;

function move(){
    var id_cell = event.srcElement.id;
    // console.log(id_cell);
    if( document.getElementById(id_cell).className === "empty" ){

        if ( flag === 0){
            counter++;
            document.getElementById(id_cell).className = "crosses";
            console.log("cell id : "+cells.id_cell);
            cells.id_cell = "crosses";
            console.log( document.getElementById(id_cell).className  );
            console.log(cells);
            flag =1;
        } else if (flag === 1) {
            counter++;
            document.getElementById(id_cell).className = "noughts";
            cells.id_cell = "noughts"
            console.log( document.getElementById(id_cell).className  );
            console.log(cells);
            flag = 0;
        }
        endConditions.check();
    } else  { alert("is prohibited"); }
}

var cell = document.getElementsByClassName("empty");
for(let j=0;j<cell.length;j++){
    cell[j].addEventListener('click', move, false);
}


   

    







