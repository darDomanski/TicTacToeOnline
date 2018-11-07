// $$$$$$$$ initialization $$$$$$$$

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
var gameConfig = initialConfig;
var gameId = null;
var playerSign = null; // crosses or noughts
var gameHasStarted = false;

// $$$$$$$$ before game starts $$$$$$$$

var logInButton = document.getElementById("log_in_btn");
logInButton.addEventListener('click', logIn);

function logIn() {
    playerName = document.getElementById("player_name").value;
    
    if (isAvailableGame()) {
        // get game ID
        joinGame();
    } else {
        createGame();
    }
}

function isAvailableGame() {
    // look for game in database
    return false;
}

function joinGame() {
    // set gameConfig = object from database
    gameConfig.player2.name = playerName;
    gameConfig.isReady = true;
    playerSign = "noughts";
    // push gameConfig to database
}

function createGame() {
    gameConfig.player1.name = playerName;
    gameConfig.turn = playerName;
    playerSign = "crosses";
    // push gameConfig to database and get gameId
    gameConfig.isReady = true; // temp for testing
    gotData(); // temp for testing
}

function gotData(data) {
    // set gameConfig = object from database
    if (!gameHasStarted && gameConfig.isReady) {
        startGame();
    }
    displayGameStatus();
    check();
}

function startGame() {
    registerEventListenersOnFields();
    showSection("game_board");
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

// $$$$$$$$ game has started $$$$$$$$

function move(event) {
    if (gameConfig.turn === playerName) {
        let clickedFieldId = event.target.id;
        gameConfig.fields[clickedFieldId] = playerSign;
        gameConfig.turn = getOtherPlayer();
        displayGameStatus();
        // update gameStatus in database
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
}

function check() {
    // TODO
}