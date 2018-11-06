class EndConditions {
    constructor() {
        this._combinations = [["a1", "a2", "a3"],
                              ["b1", "b2", "b3"],
                              ["c1", "c2", "c3"],
                              ["a1", "b1", "c1"],
                              ["a2", "b2", "c2"],
                              ["a3", "b3", "c3"],
                              ["a1", "b2", "c3"],
                              ["a3", "b2", "c1"]];
    }
    
    check() {
        if (this.playerHasWon("crosses")) {
            alert("crosses won !!!");
        } else if (this.playerHasWon("noughts")) {
            alert("noughts won !!! !!!");
        } else if (this.isDraw()) {
            alert("draw !!! !!!");
        }
    }
    
    playerHasWon(player) {
        for (let combination of this._combinations) {
            if (this.combinationIsFilled(combination, player)) {
                return true;
            }
        }
        return false;
    }
    
    combinationIsFilled(combination, player) {
        for (let currentId of combination) {
            if (document.getElementById(currentId).className !== player) {
                return false;
            }
        }
        return true;
    }
        
    isDraw() {
        let emptyCells = document.getElementsByClassName("empty");
        if (emptyCells.length === 0) {
            return true;
        }
        return false;
    }
}

export let endConditions = new EndConditions();