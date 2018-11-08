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
    playerName = document.getElementById("player_name").value;
    
    if (isAvailableGame()) {
        hideDivByID("login");
        // get game ID
        joinGame();
        
    } else {
        hideDivByID("login");
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

function hideDivByID(divId) {
    document.getElementById(divId).className = "hidden";
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