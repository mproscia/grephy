/* lexer.ts  */
var TSC;
(function (TSC) {
    var Lexer = /** @class */ (function () {
        function Lexer() {
        }
        Lexer.createLexInput = function () {
            {
                // Grab the "raw" source code.
                var sourceCode = document.getElementById("taSourceCode").value;
                // Trim the leading and trailing spaces.
                sourceCode = TSC.Utils.trim(sourceCode);
                sourceCode = Lexer.lexInput(sourceCode);
                // TODO: remove all spaces in the middle; remove line breaks too. FOR A LATER DATE
                return sourceCode;
            }
        };
        Lexer.lexInput = function (input) {
            var newSourceCode = "";
            var inputArr = input.split("");
            console.log(inputArr.length);
            var localSkipCount = 0;
            // todo: check if input is valid - loop through entire input
            while (tokenIndex < inputArr.length && isLexing) {
                var i = tokenIndex;
                //try again later
                /*if (tokenIndex == inputArr.length - 1) {
                    // check if it is a $ and if not put one and warn
                    if(inputArr[i] == "$"){
                        this.displayToken(inputArr[i]);
                    } else {
                        this.addEOP(inputArr, i);
                    }
                } else {*/
                console.log(tokenIndex);
                if (skip != true) {
                    // check if commenting or not
                    // if yes look for */
                    // if no go regularly
                    currentToken = "";
                    // check for symbols -- EOP
                    var symbols = ["$", "{", "}", "(", ")", "=", "!", "\"", "+"];
                    for (var j = 0; j < symbols.length; j++) {
                        if (inputArr[i] == symbols[j]) {
                            // set isString if quotes or end isString
                            if (inputArr[i] == "\"") {
                                if (isString == true) {
                                    isString = false;
                                }
                                else {
                                    isString = true;
                                }
                            }
                            // check for next equal if one
                            if (inputArr[i] == "=" && inputArr[i + 1] == "=") {
                                currentToken = "==";
                                skip = true;
                                skipCount = 1;
                            }
                            else if (inputArr[i] == "!" && inputArr[i + 1] == "=") {
                                currentToken = "!=";
                                skip = true;
                                skipCount = 1;
                            }
                            else {
                                currentToken = inputArr[i];
                            }
                            this.displayToken(currentToken);
                            if (currentToken == "$") {
                                this.endProgram(inputArr, i);
                            }
                        }
                    }
                    // if comment do something else
                    if (inputArr[i] == "/" && inputArr[i + 1] == "*") {
                        console.log("found comment");
                        var tempIndex = i;
                        var endCommentIndex;
                        isCommenting = true;
                        // find end of comment
                        while (tempIndex < inputArr.length) {
                            if (inputArr[tempIndex] == "*" && inputArr[tempIndex + 1] == "/") {
                                // found the end of the comment
                                endCommentIndex = tempIndex + 1;
                                break;
                            }
                            tempIndex++;
                        }
                        skip = true;
                        skipCount = endCommentIndex - i; //skip through comment symbols and then search
                        console.log(skipCount);
                        currentToken = " ";
                    }
                    // check for char or id
                    var id = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                    for (var j = 0; j < id.length; j++) {
                        if (inputArr[i] == id[j]) {
                            var str = "";
                            currentToken = inputArr[i];
                            // check for keywords & var types
                            if (inputArr[i] == "b") {
                                // boolean
                                for (var k = 0; k < 7; k++) {
                                    str += inputArr[i + k];
                                }
                                if (str == "boolean") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 6;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else if (inputArr[i] == "f") {
                                //false
                                for (var k = 0; k < 5; k++) {
                                    str += inputArr[i + k];
                                }
                                if (str == "false") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 4;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else if (inputArr[i] == "i") {
                                // check for if and int seperately
                                // if & int
                                for (var k = 0; k < 3; k++) {
                                    if (str == "if") {
                                        // do nothing
                                    }
                                    else {
                                        str += inputArr[i + k];
                                    }
                                }
                                if (str == "if") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 1;
                                }
                                else if (str == "int") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 2;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else if (inputArr[i] == "p") {
                                // print
                                for (var k = 0; k < 5; k++) {
                                    str += inputArr[i + k];
                                }
                                if (str == "print") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 4;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else if (inputArr[i] == "s") {
                                //string
                                for (var k = 0; k < 6; k++) {
                                    str += inputArr[i + k];
                                }
                                if (str == "string") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 5;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else if (inputArr[i] == "t") {
                                //true
                                for (var k = 0; k < 4; k++) {
                                    str += inputArr[i + k];
                                }
                                if (str == "true") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 3;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else if (inputArr[i] == "w") {
                                // while
                                for (var k = 0; k < 5; k++) {
                                    str += inputArr[i + k];
                                }
                                if (str == "while") {
                                    currentToken = str;
                                    skip = true;
                                    skipCount = 4;
                                }
                                else {
                                    currentToken = inputArr[i];
                                }
                            }
                            else {
                                currentToken = inputArr[i];
                            }
                            this.displayToken(currentToken);
                        }
                    }
                    // check for digits
                    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    for (var j = 0; j < digits.length; j++) {
                        if (inputArr[i] == digits[j]) {
                            if (isString == true) {
                                this.lexErrorCaught(inputArr[i]);
                            }
                            else {
                                currentToken = inputArr[i];
                                this.displayToken(currentToken);
                            }
                        }
                    }
                    // check for spaces or line breaks and overlook
                    if (inputArr[i] == " " || inputArr[i] === "\n" || inputArr[i] == "\t") {
                        if (inputArr[i] === "\n") {
                            lineNum++;
                        }
                        currentToken = " ";
                        if (isString == true) {
                            this.displayToken(currentToken);
                        }
                    }
                    /*if (inputArr[i] == " " || inputArr == )*/
                    // or nothing - warning invalid
                    if (currentToken == "") {
                        this.lexErrorCaught(inputArr[i]);
                    }
                    else if (isString == false && currentToken !== " ") {
                        if (currentToken !== "") {
                            newSourceCode += currentToken;
                        }
                    }
                    else if (isString == true && currentToken !== "") {
                        newSourceCode += currentToken;
                    }
                }
                else {
                    console.log("skip");
                    // keep skipping unless they match up
                    localSkipCount++;
                    if (localSkipCount == skipCount) {
                        if (isCommenting) {
                            isCommenting = false;
                        }
                        skip = false;
                        localSkipCount = 0;
                    }
                }
                console.log("loop" + tokenIndex);
                tokenIndex++;
            }
            return newSourceCode;
            /*}*/
        };
        Lexer.getTokenType = function (token) {
            switch (token) {
                case "if":
                    tokenType = "IF";
                    break;
                case "while":
                    tokenType = "WHILE";
                    break;
                case "print":
                    tokenType = "PRINT";
                    break;
                case "false":
                    tokenType = "FALSE";
                    break;
                case "true":
                    tokenType = "TRUE";
                    break;
                case "int":
                case "string":
                case "boolean":
                    tokenType = "VAR_TYPE";
                    break;
                case "$":
                    tokenType = "EOP";
                    break;
                case "{":
                    tokenType = "L_BRACE";
                    break;
                case "}":
                    tokenType = "R_BRACE";
                    break;
                case "(":
                    tokenType = "L_PAREN";
                    break;
                case ")":
                    tokenType = "R_PAREN";
                    break;
                case "=":
                    tokenType = "ASSIGNMENT_OP";
                    break;
                case "==":
                    tokenType = "EQUALITY_OP";
                    break;
                case "!=":
                    tokenType = "INEQUALITY_OP";
                    break;
                case "\"":
                    tokenType = "QUOTE";
                    break;
                case "+":
                    tokenType = "ADDITION_OP";
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
                case " ":
                    this.determineChar();
                    break;
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
                    tokenType = "DIGIT";
                    break;
                default:
                    this.lexErrorCaught(token);
            }
        };
        Lexer.displayToken = function (token) {
            this.getTokenType(token);
            TSC.Compile.putMessage("LEXER: T_" + tokenType + " [ " + token + " ] found at line " + lineNum + ".");
        };
        Lexer.endProgram = function (inputArr, index) {
            TSC.Compile.putMessage("LEXER: Lex complete. " + warningCount + " warnings reported & " + errorCount + " errors reported.");
            programCount++;
            totalWarningCount += warningCount;
            warningCount = 0;
            errorCount = 0;
            // check if end of input or if there are others
            if (index + 1 < inputArr.length) {
                TSC.Compile.putMessage("");
                TSC.Compile.putMessage("LEXER: Lexing program " + programCount);
            }
            else {
                isLexing = false;
            }
        };
        Lexer.lexErrorCaught = function (token) {
            TSC.Compile.putMessage("LEXER: ERROR -- Unrecognized Token [" + token + "].");
            console.log(token);
            errorCount++;
            totalErrorCount++;
            isLexing = false;
        };
        Lexer.determineChar = function () {
            if (isString == true) {
                tokenType = "CHAR";
            }
            else {
                tokenType = "ID";
            }
        };
        Lexer.addEOP = function (inputArr, index) {
            // if the array is done, check if the last item is $ otherwise warning and insert it
            TSC.Compile.putMessage("LEXER: WARNING -- End of Program Un-Identified. $ has been added for accuracy.");
            warningCount++;
            this.endProgram(inputArr, index);
        };
        return Lexer;
    }());
    TSC.Lexer = Lexer;
})(TSC || (TSC = {}));
