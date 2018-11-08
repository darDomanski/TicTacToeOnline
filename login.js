var config = {
    apiKey: "AIzaSyD187jIjmdW-ajoiJHAo_NT7yDrZjhuj_s",
    authDomain: "tictactoe-b6020.firebaseapp.com",
    databaseURL: "https://tictactoe-b6020.firebaseio.com",
    projectId: "tictactoe-b6020",
    storageBucket: "",
    messagingSenderId: "903488103673"
};
firebase.initializeApp(config);



var loginBtn = document.getElementById("log_in_btn");
loginBtn.addEventListener("click", initDataBase, false);
// var recordId;
var gameId;
var gameConfig = {
    player1: { name: "" },
    player2: { name: "" },
    fields: {
        a1: "empty", a2: "empty", a3: "empty",
        b1: "empty", b2: "empty", b3: "empty",
        c1: "empty", c2: "empty", c3: "empty"
    },
    turn: "",
    isReady: false
};
var playerName;
var gameDataBaseRef = firebase.database().ref("games");

function initDataBase() {

    // Check if game's database exists, create one if not
    firebase.database().ref().once('value', function (snapshot) {
        if (!snapshot.exists() || (snapshot.exists() && firebase.database().ref("games/") == true)) {
            playerName = document.getElementById("player_name").value;
            gameConfig.turn = playerName;

            gameConfig.player1 = { name: playerName };
            id = firebase.database().ref("games").push(gameConfig);
            gameId = id.key;
            console.log("Data base not found! Initialized new game data base. You are player1, waiting for player2...")
        }
    });

    // Get to last game's database and check if is not ready isReady

};

function setNewValueToDataBaseRecord(recordName, newValue) {
    // let key = getKeyOfDataBase();
    gameConfig[recordName] = newValue;
    let recordRef = firebase.database().ref("games/" + gameId);
    recordRef.push(gameConfig);
    console.log(recordName + " changed to new value: " + newValue);
};

// function setPlayernameData(playerNumber, newName) {
//      player = {
//         name: newName
//     };

//     var playerNameRef = firebase.database().ref("games/" + gameId + "/player" + playerNumber);
//     playerNameRef.set(player);
// };
function getKeyOfDataBase() {
    // var records,
    //     keys,
    var keyToReturn = "";
    var database = firebase.database().ref("games");
    // console.log(database);
    var key;

    database.on('value', function (data) {
        var records = data.val();
        var keys = Object.keys(records);
        key = keys[keys.length - 1];
    });

    return key;

};

function seekForGameToJoin() {
    var database = getDatabaseFromFirebase();
    var games = database.games;

    for (var key in games) {
        if (games[key].isReady == false) {
            gameId = key;
            return true;
        }
    }

};

function getDatabaseFromFirebase() {
    var gamesDatabase = {};
    gameDataBaseRef.on('value', function (snapshot) {
        gamesDatabase[snapshot.key] = snapshot.val();
    });
    return gamesDatabase;
};

seekForGameToJoin();


