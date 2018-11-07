var config = {
    apiKey: "AIzaSyD187jIjmdW-ajoiJHAo_NT7yDrZjhuj_s",
    authDomain: "tictactoe-b6020.firebaseapp.com",
    databaseURL: "https://tictactoe-b6020.firebaseio.com",
    projectId: "tictactoe-b6020",
    storageBucket: "",
    messagingSenderId: "903488103673"
};
firebase.initializeApp(config);

function initDataBase() {
    firebase.database().ref().once('value', function (snapshot) {

        if (!snapshot.exists()) {
            var initialConfig = {
                p1: "",
                p2: "",
                isReady: false,
                turn: "p1"
            };
            database.push(initialConfig)
            console.log("Data base not found! Initialized new data base.")
        }

    });
};

function setNewValueToDataBaseRecord(recordName, newValue) {
    let key = this.getKeyOfDataBase();



    var recordRef = database.ref("game_data/" + key + "/" + recordName);
    recordRef.set(newValue);
    console.log(recordName + " changed to new value: " + newValue);
};