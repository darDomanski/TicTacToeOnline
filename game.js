
var playerName;

var gameConfig = {
    player1: { name: "", score: 0 },
    player2: { name: "", score: 0 },
    fields: {
        a1: "empty", a2: "empty", a3: "empty",
        b1: "empty", b2: "empty", b3: "empty",
        c1: "empty", c2: "empty", c3: "empty"
    },
    turn: "player1",
    isReady: false
};

console.log(gameConfig)

var config = {
    apiKey: "AIzaSyCENIRqsKGqcAJE9P8Q_Q91fMUtWURBnXc",
    authDomain: "roomin-d98c5.firebaseapp.com",
    databaseURL: "https://roomin-d98c5.firebaseio.com",
    projectId: "roomin-d98c5",
    // storageBucket: "",
    storageBucket: "roomin-d98c5.appspot.com",
    messagingSenderId: "206298316730"
};

firebase.initializeApp(config);
console.log(firebase);

var database = firebase.database();
var ref = database.ref("game_data");

var ref = database.ref('game_data');
ref.on('value', gotData, errData );

// ostatniobiekt
function gotData(data){
    var game = data.val();
    var keys = Object.keys(game);
    var last_id = keys[keys.length-1];
    var temp_value = game[last_id][ Object.keys(game[last_id])];
    console.log(game[last_id]);
    document.getElementById( Object.keys( game[last_id]) ).className = temp_value;
    
}



function errData(err){
    console.log("Error ");
    console.log("err");
}


function initDataBase() {
    console.log("Works");
    firebase.database().ref().once('value', function (snapshot) {

        if (!snapshot.exists()) {
            var initialConfig = {
                player1: { name: "", score: 0 },
                player2: { name: "", score: 0 },
                fields: {
                    a1: "empty", a2: "empty", a3: "empty",
                    b1: "empty", b2: "empty", b3: "empty",
                    c1: "empty", c2: "empty", c3: "empty"
                },
                turn: "player1",
                isReady: false
            };
            var id = firebase.database().ref().push(initialConfig)
            console.log(id + "Data base not found! Initialized new game data base.")

            var gamedata = id.ref();
            gamedata.push({ foo: "foo" });
        }
    });
};

initDataBase();

            
var counter = 0
var flag =0;

function move(){

    var idCell = event.srcElement.id;
    // console.log(id_cell);
    if( document.getElementById(idCell).className === "empty"  ){

        if ( flag === 0){
            counter++;

            // var rand = Math.floor(Math.random()*4);
            // console.log(rand);
            document.getElementById(idCell).className = "crosses";

            flag =1;

            let temp_object = {  } 
            temp_object[idCell] = "crosses" ;
            ref.push(  temp_object  );


        } else if (flag === 1) {
            counter++;
            document.getElementById(idCell).className = "noughts";
            flag = 0;

            let temp_object = {  } 
            temp_object[idCell] = "noughts";
            ref.push( temp_object );

            gameConfig.fields[idCell] = "noughts";
            console.log(gameConfig);
        }
        check();

    } else  { alert("is prohibited"); }
    // console.log( cells );
}

var cell = document.getElementsByClassName("empty");
for(j=0;j<cell.length;j++){
    cell[j].addEventListener('click', move, false);
}

function check(){

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







