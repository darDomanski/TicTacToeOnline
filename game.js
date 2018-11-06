

function check(){
    //create variabels
    // for (var i=1;i<4;i++){
    //     var a = "a"+i;
    //     var a = document.getElementById(a).className;
    //     var b = "b"+i;
    //     var b = document.getElementById(b).className;
    //     var c = "a"+i;
    //     var c = document.getElementById(c).className;
    // }

    // console.log(a1);
    // console.log(a2);
    // console.log(a3);

    if( document.getElementById("a1").className === "crosses" &&
        document.getElementById("a2").className === "crosses" &&
        document.getElementById("a3").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("b1").className === "crosses" &&
        document.getElementById("b2").className === "crosses" &&
        document.getElementById("b3").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("c1").className === "crosses" &&
        document.getElementById("c2").className === "crosses" &&
        document.getElementById("c3").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("a1").className === "crosses" &&
        document.getElementById("b1").className === "crosses" &&
        document.getElementById("c1").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("a2").className === "crosses" &&
        document.getElementById("b2").className === "crosses" &&
        document.getElementById("c2").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("a3").className === "crosses" &&
        document.getElementById("b3").className === "crosses" &&
        document.getElementById("c3").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("a1").className === "crosses" &&
        document.getElementById("b2").className === "crosses" &&
        document.getElementById("c3").className === "crosses"    ){
        alert("crosses won !!!")
    }

    if( document.getElementById("a3").className === "crosses" &&
        document.getElementById("b2").className === "crosses" &&
        document.getElementById("c1").className === "crosses"    ){
        alert("crosses won !!!")
    }


    if( document.getElementById("a1").className === "noughts" &&
        document.getElementById("a2").className === "noughts" &&
        document.getElementById("a3").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("b1").className === "noughts" &&
        document.getElementById("b2").className === "noughts" &&
        document.getElementById("b3").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("c1").className === "noughts" &&
        document.getElementById("c2").className === "noughts" &&
        document.getElementById("c3").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("a1").className === "noughts" &&
        document.getElementById("b1").className === "noughts" &&
        document.getElementById("c1").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("a2").className === "noughts" &&
        document.getElementById("b2").className === "noughts" &&
        document.getElementById("c2").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("a3").className === "noughts" &&
        document.getElementById("b3").className === "noughts" &&
        document.getElementById("c3").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("a1").className === "noughts" &&
        document.getElementById("b2").className === "noughts" &&
        document.getElementById("c3").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }

    if( document.getElementById("a3").className === "noughts" &&
        document.getElementById("b2").className === "noughts" &&
        document.getElementById("c1").className === "noughts"    ){
        alert("noughts won !!! !!!")
    }
}


var cells = { a1:"empty", a2:"empty", a3:"empty",
                b1:"empty", b2:"empty", b3:"empty",
                c1:"empty", c2:"empty", c3:"empty", }
                
console.log(cells);


// var cells_from_firebase = { a1:"empty", a2:"empty", a3:"empty",
//                         b1:"empty", b2:"crosses", b3:"empty",
//                         c1:"empty", c2:"empty", c3:"empty", }

// function load_cross_noughts( a2, "crosses" ){
function load_cross_noughts( key, value ){    
    cells[key] = value;
}


function send_cross_noughts( key, value ){    
    return key, value;
}

var counter = 0
var flag =0;


function clear_board ( ){    
    // console.log(cells);
    // console.log(allkeys);
    var allkeys = Object.keys(cells);
    for (var i =0; i<allkeys.length; i++){
        cells[allkeys[i]]= "empty";  

        console.log( cells );
    }
}

document.getElementById("newTour").addEventListener("click", clear_board )


function move(){
    var idCell = event.srcElement.id;
    // console.log(id_cell);
    if( document.getElementById(idCell).className === "empty" ){

        if ( flag === 0){
            counter++;
            document.getElementById(idCell).className = "crosses";
            // console.log("cell id : "+idCell);
            // console.log( "class name : "+document.getElementById(idCell).className  );
            cells[idCell]="crosses";
            // console.log(cells);
            send_cross_noughts( cells[idCell], "crosses" )
            flag =1;
        } else if (flag === 1) {
            counter++;
            document.getElementById(idCell).className = "noughts";

            // console.log("cell id : "+idCell);
            // console.log( "class name : "+document.getElementById(idCell).className  );
            cells[idCell] = "noughts";
            // console.log(cells);
            send_cross_noughts( cells[idCell], "noughts" )
            flag = 0;
        }

        check();

    } else  { alert("is prohibited"); }
    // console.log(cells);
    // var allkeys = Object.keys(cells);
    // console.log(allkeys);

    // for (var i =0; i<allkeys.length; i++){
    //     console.log( cells[allkeys[i]]  );
    // }
    console.log( cells );
}

var cell = document.getElementsByClassName("empty");
for(j=0;j<cell.length;j++){
    cell[j].addEventListener('click', move, false);
}


   

    







