var grephy;
(function (grephy) {
    var Match = /** @class */ (function () {
        function Match() {
        }
        Match.init = function () {
            // reset matching variables
        };
        Match.setUpRegexString = function () {
            var i = 0;
            while (creatingString == true) {
                this.matchRegexTokens(regexArr[i]);
                i++;
            }
            this.findMatches();
        };
        Match.findMatches = function () {
            doneMatching = false;
            while (doneMatching == false) {
                this.consumeToken(input[tokenCount]);
                this.increaseToken();
                // check for + first
                for (var i = 0; i < regex.length; i++) {
                    if (regexArr[i] == "+") {
                        isUnion = true;
                        // TODO: create a function that sets up union and push to delta
                    }
                }
                // check for *
                // check for parenthesis
            }
        };
        Match.searchKleeneToken = function () {
            var tokenLength = kleeneToken.length;
            var testLength = 1;
            if (kleene == true) {
                for (var i = 0; i < input.length; i++) {
                    while (doneMatching == false) {
                        if (input[i] == kleeneToken.charAt(0)) {
                            // check to see if whole thing is there
                            if (tokenLength > 1) {
                                for (var k = 0; k < tokenLength; k++) {
                                    if (input[i + testLength] == kleeneToken.charAt(testLength)) {
                                        testLength++;
                                    }
                                }
                                if (testLength == tokenLength) {
                                    doneMatching = true;
                                    this.endMatching();
                                    console.log("Match found");
                                }
                                else {
                                    doneMatching = false;
                                    console.log("Match not found");
                                }
                            }
                            else {
                                doneMatching = true;
                                this.endMatching();
                                console.log("Match found");
                            }
                        }
                    }
                }
            }
        };
        Match.matchRegexTokens = function (expr) {
            switch (expr) {
                case "+":
                    strings.push(stringToMatch);
                    stringToMatch = "";
                    break;
                case "*":
                    break;
                case "(":
                    break;
                case ")":
                    break;
                case "a":
                case "b":
                case "c":
                case "d":
                case "e":
                case "f":
                case "g":
                case "h":
                case "i":
                case "j":
                case "k":
                case "l":
                case "m":
                case "n":
                case "o":
                case "p":
                case "q":
                case "r":
                case "s":
                case "t":
                case "u":
                case "v":
                case "w":
                case "x":
                case "y":
                case "z":
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    stringToMatch += expr;
                    break;
            }
        };
        Match.consumeToken = function (token) {
            //TODO: COME BACK TO
            switch (token) {
                case "(":
                    break;
                case "+":
                    break;
                case ")":
                    break;
                case "*":
                    this.findKleeneStar();
                    break;
                default:
                    break;
            }
        };
        Match.findKleeneStar = function () {
            for (var i = 0; i < regex.length; i++) {
                if (regexArr[i] == "*") {
                    kleene = true;
                    emptyAllowed = true;
                    if (regexArr[i - 1] == ")") {
                        kleeneToken = regexArr[i - 2];
                    }
                    else {
                        kleeneToken = regexArr[i - 1];
                    }
                }
                console.log(kleeneToken);
                // check for kleenetoken
                this.searchKleeneToken();
            }
        };
        Match.increaseToken = function () {
            if (tokenCount < input.length)
                tokenCount++;
        };
        Match.endMatching = function () {
            if (doneMatching == true) {
                if (tokenCount < input.length + 1) {
                    doneMatching = false;
                    this.increaseToken();
                }
                else {
                    // check for errors
                    // if error print otherwise craete DFA
                }
            }
        };
        return Match;
    }());
    grephy.Match = Match;
})(grephy || (grephy = {}));
