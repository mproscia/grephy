/* compule.ts */
var TSC;
(function (TSC) {
    var Compile = /** @class */ (function () {
        function Compile() {
        }
        Compile.init = function () {
            // Clear the message box.
            document.getElementById("taOutput").value = "";
            // Set the initial values for our globals.
            tokens = "";
            tokenIndex = 0;
            currentToken = "";
            errorCount = 0;
            warningCount = 0;
            totalErrorCount = 0;
            totalWarningCount = 0;
            programCount = 0; // starting over for now TODO: decide if this stays
            lineNum = 1;
        };
        Compile.btnCompile_click = function () {
            // This is executed as a result of the user pressing the
            // "compile" button between the two text areas, above.
            // Note the <input> element's event handler: onclick="btnCompile_click();
            this.init();
            /*this.putMessage("Compilation Started");*/
            this.putMessage("LEXER: Lexing program " + programCount);
            isLexing = true;
            // Grab the tokens from the lexer . . .
            tokens = _Lexer.createLexInput();
            this.putMessage("");
            this.putMessage("LEXER: Lex returned [" + tokens + "]");
            this.putMessage("LEXER: Lex complete. " + errorCount + " errors reported.");
            this.putMessage("LEXER: Lex complete. " + totalErrorCount + " total errors reported.");
            programCount += 1;
            // . . . and parse! -- not yet
            /*parse();*/
        };
        Compile.putMessage = function (msg) {
            document.getElementById("taOutput").value += msg + "\n";
        };
        return Compile;
    }());
    TSC.Compile = Compile;
})(TSC || (TSC = {}));
