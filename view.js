var gameConfig = {
                player1: { name: "", score: 0 },
                player2: { name: "", score: 0 },
                fields: {
                    a1: "empty", a2: "empty", a3: "empty",
                    b1: "empty", b2: "crosses", b3: "noughts",
                    c1: "empty", c2: "empty", c3: "noughts"
                },
                turn: "player1",
                isReady: false
            };

function displayGameStatus() {
    let fieldNames = Object.keys(gameConfig.fields);
    
    for (let name of fieldNames) {
        document.getElementById(name).className = gameConfig.fields[name];
    }
}

displayGameStatus();