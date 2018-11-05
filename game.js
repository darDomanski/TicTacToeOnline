

function check(){

    if( document.getElementById("a1").className === "cell_yellow" &&
        document.getElementById("a2").className === "cell_yellow" &&
        document.getElementById("a3").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("b1").className === "cell_yellow" &&
        document.getElementById("b2").className === "cell_yellow" &&
        document.getElementById("b3").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("c1").className === "cell_yellow" &&
        document.getElementById("c2").className === "cell_yellow" &&
        document.getElementById("c3").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("a1").className === "cell_yellow" &&
        document.getElementById("b1").className === "cell_yellow" &&
        document.getElementById("c1").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("a2").className === "cell_yellow" &&
        document.getElementById("b2").className === "cell_yellow" &&
        document.getElementById("c2").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("a3").className === "cell_yellow" &&
        document.getElementById("b3").className === "cell_yellow" &&
        document.getElementById("c3").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("a1").className === "cell_yellow" &&
        document.getElementById("b2").className === "cell_yellow" &&
        document.getElementById("c3").className === "cell_yellow"    ){
        alert("yellow won !!!")
    }

    if( document.getElementById("a3").className === "cell_white" &&
        document.getElementById("b2").className === "cell_white" &&
        document.getElementById("c1").className === "cell_white"    ){
        alert("yellow won !!!")
    }




    if( document.getElementById("a1").className === "cell_white" &&
        document.getElementById("a2").className === "cell_white" &&
        document.getElementById("a3").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("b1").className === "cell_white" &&
        document.getElementById("b2").className === "cell_white" &&
        document.getElementById("b3").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("c1").className === "cell_white" &&
        document.getElementById("c2").className === "cell_white" &&
        document.getElementById("c3").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("a1").className === "cell_white" &&
        document.getElementById("b1").className === "cell_white" &&
        document.getElementById("c1").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("a2").className === "cell_white" &&
        document.getElementById("b2").className === "cell_white" &&
        document.getElementById("c2").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("a3").className === "cell_white" &&
        document.getElementById("b3").className === "cell_white" &&
        document.getElementById("c3").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("a1").className === "cell_white" &&
        document.getElementById("b2").className === "cell_white" &&
        document.getElementById("c3").className === "cell_white"    ){
        alert("white won !!!")
    }

    if( document.getElementById("a3").className === "cell_white" &&
        document.getElementById("b2").className === "cell_white" &&
        document.getElementById("c1").className === "cell_white"    ){
        alert("white won !!!")
    }


}



var counter = 0
var flag =0;

function move(){
    var id_cell = event.srcElement.id;
    // console.log(id_cell);
    if( document.getElementById(id_cell).className === "cell_black" ){

        if ( flag === 0){
            counter++;
            document.getElementById(id_cell).className = "cell_yellow";
            console.log( document.getElementById(id_cell).className  );
            flag =1;
        } else if (flag === 1) {
            counter++;
            document.getElementById(id_cell).className = "cell_white";
            console.log( document.getElementById(id_cell).className  );
            flag = 0;
        }
        check();
    } else  { alert("is prohibited"); }
}

var cell = document.getElementsByClassName("cell_black");
for(j=0;j<cell.length;j++){
    cell[j].addEventListener('click', move, false);
}

// document.getElementById("a1").addEventListener('click', move);
// document.getElementById("a2").addEventListener('click', move);
// document.getElementById("a3").addEventListener('click', move);
// document.getElementById("b1").addEventListener('click', move);
// document.getElementById("b2").addEventListener('click', move);
// document.getElementById("b3").addEventListener('click', move);
// document.getElementById("c1").addEventListener('click', move);
// document.getElementById("c2").addEventListener('click', move);
// document.getElementById("c3").addEventListener('click', move);


   

    







