// $$$$$$$$ initialization $$$$$$$$


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
var gameDataBaseRef = firebase.database().ref("games");
var gameByIdRef = null;


var lap = new Audio("resources/lap.wav");

var playerName = "";
var initialConfig = {
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
var gameConfig = JSON.parse(JSON.stringify(initialConfig));
var gameId = null;
var playerSign = null; // crosses or noughts
var gameHasStarted = false;

var winCombinations = [["a1", "a2", "a3"],
                       ["b1", "b2", "b3"],
                       ["c1", "c2", "c3"],
                       ["a1", "b1", "c1"],
                       ["a2", "b2", "c2"],
                       ["a3", "b3", "c3"],
                       ["a1", "b2", "c3"],
                       ["a3", "b2", "c1"]];

// $$$$$$$$ before game starts $$$$$$$$

var logInButton = document.getElementById("log_in_btn");
logInButton.addEventListener('click', logIn);

function logIn() {
    if (playerName === "") {
        playerName = document.getElementById("player_name").value;
    }
    joinOrCreate();
    
}

function joinOrCreate() {
    gameDataBaseRef.once('value').then(data => data.val()).then(data => {
        for (let key in data) {
            if (!data[key].isReady) {
                gameId = key;
                gameByIdRef = firebase.database().ref("games/" + key);
                joinGame();
                return;
            }
        }
        createGame();
    })
}

function joinGame() {
    gameByIdRef.once('value').then(data => data.val()).then(data => {
        gameConfig = data;
        gameConfig.player2.name = playerName;
        gameConfig.isReady = true;
        playerSign = "noughts";
        gameByIdRef.set(gameConfig);
        setListenerOnDatabase();;
    })
}

function createGame() {
    console.log("create");
    gameConfig.player1.name = playerName;
    gameConfig.turn = playerName;
    playerSign = "crosses";
    gameId = gameDataBaseRef.push(gameConfig).key;
    gameByIdRef = firebase.database().ref("games/" + gameId);
    gameByIdRef.once('value').then(data => {
        setListenerOnDatabase();
    })
}

function setListenerOnDatabase() {
    gameByIdRef.on('value', gotData);
}

function gotData(data) {
    gameConfig = data.val();
    if (!gameHasStarted && gameConfig.isReady) {
        startGame();
    }
    displayGameStatus();
    check();
}

function startGame() {
    registerEventListenersOnFields();
    showSection("game_board");
    document.getElementById("player2").innerHTML = gameConfig.player2.name;
    document.getElementById("player1").innerHTML = gameConfig.player1.name;
    
}

function showSection(sectionID) {
    hideAllSections();
    document.getElementById(sectionID).className = "visible";
}

function hideAllSections() {
    let sections = document.getElementsByTagName("section");
    
    for (let section of sections) {
        section.className = "hidden";
    }
}

function hideDivByID(divId) {
    document.getElementById(divId).className = "hidden";
}


// $$$$$$$$ game has started $$$$$$$$

function move(event) {
    if (gameConfig.turn === playerName && event.target.className === "empty") {
        let clickedFieldId = event.target.id;
        lap.play();
        gameConfig.fields[clickedFieldId] = playerSign;
        gameConfig.turn = getOtherPlayer();
        displayGameStatus();
        gameByIdRef.set(gameConfig);

    }

}

function getOtherPlayer() {
    if (gameConfig.player1.name === playerName) {
        return gameConfig.player2.name;
    } else {
        return gameConfig.player1.name; 
    }
}

function registerEventListenersOnFields() {
    let fields = document.getElementsByClassName("empty");
    
    for (let field of fields) {
        field.addEventListener('click', move);
    }
}

function displayGameStatus() {
    let fieldNames = Object.keys(gameConfig.fields);
    
    for (let name of fieldNames) {
        document.getElementById(name).className = gameConfig.fields[name];
    }


    if( gameConfig.player1.name === gameConfig.turn  ){

        document.getElementById("player1").setAttribute("class", "activ");
        document.getElementById("player2").setAttribute("class", "nonActiv");

    }else{  

        document.getElementById("player2").setAttribute("class", "activ");
        document.getElementById("player1").setAttribute("class", "nonActiv");
    }
}

function check() {    
    if (playerHasWon("crosses")) {
        alert("crosses won !!!");
    } else if (playerHasWon("noughts")) {
        alert("noughts won !!! !!!");
    } else if (isDraw()) {
        alert("draw !!! !!!");
    }
}

function playerHasWon(player) {
    for (let combination of winCombinations) {
        if (this.combinationIsFilled(combination, player)) {
            return true;
        }
    }
    return false;
}

function combinationIsFilled(combination, player) {
    for (let currentId of combination) {
        if (document.getElementById(currentId).className !== player) {
            return false;
        }
    }
    return true;
}

function isDraw() {
    let emptyCells = document.getElementsByClassName("empty");
    if (emptyCells.length === 0) {
        return true;
    }
    return false;
}

function newGame() {
    gameConfig = initialConfig;
    var gameId = null;
    var playerSign = null;
    var gameHasStarted = false;
    logIn();
    
}