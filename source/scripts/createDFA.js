var grephy;
(function (grephy) {
    var CreateDFA = /** @class */ (function () {
        function CreateDFA() {
        }
        CreateDFA.init = function () {
            curTransitionStates = [];
            transitionSymbols = [];
            newTransitionStates = [];
            curState = 0;
            nextState = 1;
            startState = 0;
            curStartState = 0;
            curSymbol = "";
            curStartSymbol = "";
            acceptStates = [];
            isString = false;
            tokenCount = 0;
        };
        CreateDFA.scanRegex = function () {
            this.init();
            while (tokenCount < regex.length) {
                if (tokenCount == regex.length - 1) {
                    this.consumeLastToken(regex.charAt(tokenCount));
                }
                else {
                    this.consumeToken(regex.charAt(tokenCount));
                }
            }
            console.log(curTransitionStates);
            console.log(transitionSymbols);
            console.log(newTransitionStates);
            console.log(acceptStates);
        };
        CreateDFA.consumeToken = function (expr) {
            curSymbol = expr;
            if (!isString && curSymbol != "*") {
                curStartSymbol = curSymbol;
                curStartState = curState;
            }
            switch (expr) {
                case "+":
                    this.increaseToken();
                    this.consumeLastToken(regex.charAt(tokenCount));
                    break;
                case "*":
                    if (regex.charAt(tokenCount - 1) == ")") {
                        this.declareTransition(curState, curStartSymbol, curStartState);
                        // this.declareTransition(curStartState - 1, regex.charAt(tokenCount +1), curState + 1);
                    }
                    else {
                        this.declareTransition(curState, curStartSymbol, curState);
                        this.declareTransition(curState, regex.charAt(tokenCount++), nextState);
                        // this.declareTransition(curStartState - 1, regex.charAt(tokenCount +1), curState + 1);
                    }
                    break;
                case "(":
                    curStartState = curState + 1;
                    curStartSymbol = regex.charAt(tokenCount + 1);
                    this.increaseToken();
                    break;
                case ")":
                    this.increaseToken();
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
                    this.declareTransition(curState, curSymbol, nextState);
                    break;
                default:
                    break;
            }
        };
        CreateDFA.consumeLastToken = function (expr) {
            curSymbol = expr;
            if (!isString && curSymbol != "*") {
                curStartSymbol = curSymbol;
                curStartState = curState;
            }
            switch (expr) {
                case "+":
                    _Consume.putMessage("Cannot End Regex in + Token. DFA Creation Error.");
                    error++;
                    this.endProgram();
                    break;
                case "*":
                    if (regex.charAt(tokenCount - 1) == ")") {
                        curState -= 2;
                        acceptStates.push(curState);
                        acceptStates.push(curStartState);
                        this.declareTransition(curState, curStartSymbol, curStartState);
                    }
                    else {
                        this.declareTransition(curState, curStartSymbol, curState);
                        acceptStates.push(curState - 1);
                        acceptStates.push(curState - 2);
                    }
                    this.endProgram();
                    break;
                case "(":
                    _Consume.putMessage("Cannot End Regex in ( Token. DFA Creation Error.");
                    error++;
                    this.endProgram();
                    break;
                case ")":
                    curState--;
                    acceptStates.push(curState);
                    this.endProgram();
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
                    acceptStates.push(nextState);
                    this.declareTransition(curState, curSymbol, nextState);
                    this.endProgram();
                    break;
                default:
                    break;
            }
        };
        CreateDFA.increaseToken = function () {
            tokenCount++;
        };
        CreateDFA.increaseState = function () {
            curState++;
            nextState++;
        };
        CreateDFA.declareTransition = function (curState, symbol, newState) {
            curTransitionStates.push(curState);
            transitionSymbols.push(symbol);
            newTransitionStates.push(newState);
            this.increaseToken();
            this.increaseState();
        };
        CreateDFA.endProgram = function () {
            if (tokenCount < regex.length - 1) {
                this.increaseToken();
            }
            else {
                this.increaseToken();
                _Consume.putMessage("DFA Creation Complete with " + error + " errors.");
                if (error > 0) {
                    _Consume.putMessage("DFA Not Displayed Due to Errors");
                }
                else {
                    grephy.CreateDFAFile.createOutput();
                }
            }
        };
        return CreateDFA;
    }());
    grephy.CreateDFA = CreateDFA;
})(grephy || (grephy = {}));
