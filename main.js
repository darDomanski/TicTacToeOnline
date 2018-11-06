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
// console.log(firebase);
ref.push({ foo: "foo" })


function conect() {
    var _ref;

    if (refExists("data")) {
        _ref = database.ref("data");
        var isReady = false;
    }

}


function refExists(path) {
    firebase.database().child(path).once('value', (snap) => {
        if (snap.val() !== null) {
            return true;
        }
        return false;
    });
}

function addRef(newPath, data) {
    firebase.database().child(newPath).set(data);
}

function checkIfReady() {
    ref.on("value", function (snapshot) {
        var snapshotVal = snapshot.val();
        return snapshotVal.isReady;
    })
}