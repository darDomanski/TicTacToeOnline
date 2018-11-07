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

function setNewValueToDataBaseRecord(recordName, newValue) {
    let key = this.getKeyOfDataBase();

    var recordRef = database.ref("game_data/" + key + "/" + recordName);
    recordRef.set(newValue);
    console.log(recordName + " changed to new value: " + newValue);
};

function getKeyOfDataBase() {
    let records,
        keys,
        key,
        database;
    database = firebase.ref("game_data");

    database.on('value', function (data) {
        records = data.val();
        keys = Object.keys(records);
        key = keys[0];
    });

    return key;
}

