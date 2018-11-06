var tst_btn = document.getElementById("test_btn");
var player = document.getElementById("player");



var config = {
    apiKey: "AIzaSyD187jIjmdW-ajoiJHAo_NT7yDrZjhuj_s",
    authDomain: "tictactoe-b6020.firebaseapp.com",
    databaseURL: "https://tictactoe-b6020.firebaseio.com",
    projectId: "tictactoe-b6020",
    storageBucket: "",
    messagingSenderId: "903488103673"
};
firebase.initializeApp(config);


var database = firebase.database();
var ref = database.ref("game_data");
var isReady;
// console.log(firebase);
// ref.push({ foo: "foo" })


function conect() {
    firebase.database().ref().once('value', function (snapshot) {

        if (!snapshot.exists()) {
            var initialConfig = {
                p1: "",
                p2: "",
                isReady: false,
                turn: "p1"
            };
            ref.push(initialConfig)
            console.log("created data_base")
        }

    });

    ref.on('value', function (data) {
        var configs = data.val();
        var keys = Object.keys(configs);
        console.log(keys);
        var p1 = configs[keys[0]].p1;
        var p1ref = database.ref("game_data/" + keys[0] + "/p1");
        var p2ref = database.ref("game_data/" + keys[0] + "/p2");

        var p2 = configs[keys[0]].p2;
        var isReady = configs[keys[0]].isReady;
        var turn = configs[keys[0]].turn;
        // p1.setValue("dupa");
        // p2.setValue("dupa2");
        p1ref.set("dupa");
        p2ref.set("dupa!!!!!!!!!!!!!");

        console.log(p1 + p2 + isReady + turn);

    })

    // var gameDataRef;
    // ref.on("value", function (snapshot) {
    //     gameDataRef = snapshot.val();
    //     var testGameRef = database.ref("game_data/" + keys[0]);
    //     var p1 = database.ref("game_data/" + keys[0] + "/p1");
    //     console.log(p1);
    // })

}


function refExists(path) {
    // var exists;
    console.log(firebase.database().ref().child(path) !== null);
    return firebase.database().ref().child(path) !== null;
    // firebase.database().ref().once('value', function (snapshot) {
    //     // exists = snapshot.hasChild(path);
    //     // console.log(snapshot.hasChild(path));
    //     // console.log("checking if database exists" + exists);
    //     // return exists;
    //     return snapshot.hasChild(path);
    // });
}

function addRef(newPath, data) {
    firebase.database().ref(newPath).set(data);
}

function checkIfReady() {
    ref.on("value", function (snapshot) {
        var snapshotVal = snapshot.val();
        return snapshotVal.isReady;
    })
}

conect();