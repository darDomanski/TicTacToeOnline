
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


var data_temp = {
    a2: "crosses"
}
ref.push(data_temp);




var ref = database.ref('game_data');
ref.on('value', gotData, errData );

// ostatniobiekt
function gotData(data){
    // console.log(data.val());
    var game = data.val();
    var keys = Object.keys(game);
    var last_id = keys[keys.length-1];

    alert("last id : "+last_id);
    alert("klucz : "+Object.keys(game[last_id]));
    // alert("??? : "+game[last_id]);
    alert("wartosc : "+game[last_id].a2);

}

function errData(err){
    console.log("Error ");
    console.log("err");
}


