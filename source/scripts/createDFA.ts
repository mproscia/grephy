module grephy{
    export class CreateDFA{

        public static init(){
            curTransitionStates = [];
            transitionSymbols = [];
            newTransitionStates = [];
            curState = 0;
            nextState = 1;
            startState = 0;
            curStartState = 0;
            curSymbol = "";
            curStartSymbol = "";
            acceptState = "";
            isString = false;
        }

        public static scanRegex(){
            // this.init();
            while(tokenCount < regex.length){
                this.consumeToken(regex.charAt(tokenCount));
            }
            console.log(curTransitionStates);
            console.log(transitionSymbols);
            console.log(newTransitionStates);
        }

        public static consumeToken(expr){
            curSymbol = expr;
            if (!isString && curSymbol != "*") {
                curStartSymbol = curSymbol;
            }

            switch(expr){
                case "+":
                    this.increaseToken();
                    break;
                case "*":
                    if(isString){
                        this.declareTransition(curState, curStartSymbol, curStartState);
                    } else {
                        var tempState = curState --;
                        curSymbol = regex.charAt(tokenCount--);
                        this.declareTransition(tempState, curSymbol, curState);
                    }
                    break;
                case "(":
                    isString = true;
                    curStartState = curState + 1;
                    curStartSymbol = regex.charAt(tokenCount + 1);
                    break;
                case ")":
                    isString = false;
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
        }

        public static increaseToken(){
            tokenCount ++;
            this.increaseState();
        }

        public static increaseState(){
            curState ++;
            nextState ++;
        }

        public static declareTransition(curState, symbol, newState){
            curTransitionStates.push(curState);
            transitionSymbols.push(symbol);
            newTransitionStates.push(newState);
            this.increaseToken();

        }

    }
}