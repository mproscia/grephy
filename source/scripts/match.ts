module grephy {
    export class Match {

        public static init(){
            // reset matching variables
        }

        public static findMatches(){
            doneMatching = false;

            while(doneMatching == false) {
                // check for + first
                for (var i = 0; i < regex.length; i++) {
                    if (regexArr[i] == "+") {
                        isUnion = true;
                        // TODO: create a function that sets up union and push to delta
                    }
                }

                // check for *
                for (var i = 0; i < regex.length; i++) {
                    if (regexArr[i] == "*") {
                        kleene = true;
                        emptyAllowed = true;
                        if (regexArr[i - 1] == ")") {
                            kleeneToken = regexArr[i - 2];
                        } else {
                            kleeneToken = regexArr[i - 1];
                        }
                    }
                    console.log(kleeneToken);
                    // check for kleenetoken
                    this.searchKleeneToken();
                }


                // check for parenthesis
            }
        }

        public static searchKleeneToken(){
            var tokenLength = kleeneToken.length;
            var testLength = 1;
            if(kleene == true){
                for(var i = 0; i < input.length; i++){
                    while(doneMatching == false) {
                        if (input[i] == kleeneToken.charAt(0)) {
                            // check to see if whole thing is there
                            if (tokenLength > 1) {
                                for (var k = 0; k < tokenLength; k++) {
                                    if(input[i+testLength] == kleeneToken.charAt(testLength)){
                                        testLength++;
                                    }
                                }
                                if(testLength == tokenLength){
                                    doneMatching = true;
                                    console.log("Match found");
                                }else{
                                    doneMatching = false;
                                    console.log("Match not found");

                                }
                            } else{
                                doneMatching = true;
                                console.log("Match found");

                            }
                        }
                    }
                }
            }
        }

    }
}