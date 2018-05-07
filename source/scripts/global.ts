var onDocumentLoad = function(){
    grephy.Consume.init();
    // hello
};

var _Consume = grephy.Consume;
var _CreateDFA = grephy.CreateDFA;
var msg = "";
var input = [];
var textFromFileLoaded = "";
var inputLength = 0;
var tokenCount = 0;
var regex;

var curTransitionStates = [];
var transitionSymbols = [];
var newTransitionStates = [];
var curState = 0;
var nextState = 1;
var startState = 0;
var curStartState = 0;
var curSymbol = "";
var curStartSymbol = "";
var acceptStates = [];
var isString = false;
var error = 0;

var dotString = "";

