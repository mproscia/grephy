var onDocumentLoad = function () {
    TSC.Compile.init();
};
var _Lexer = TSC.Lexer;
var _Compile = TSC.Compile;
// Global variables
var tokens = "";
var tokenIndex = 0;
var currentToken = "";
var tokenType = "";
var lineNum = 1;
var errorCount = 0;
var totalErrorCount = 0;
var warningCount = 0;
var totalWarningCount = 0;
var EOP = "$";
var programCount = 0;
var isCommenting = false;
var isString = false;
var skip = false;
var skipCount = 0;
var isLexing = false;
