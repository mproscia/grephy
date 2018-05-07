var onDocumentLoad = function(){
    grephy.Consume.init();
    // hello
};

var _Consume = grephy.Consume;
var _Match = grephy.Match;
var _CreateDFA = grephy.CreateDFA;
var msg = "";
var input = [];
var textFromFileLoaded = "";
var inputLength = 0;
var tokenCount = 0;
var acceptedAlpha = [];
var regex;
var string = false;
var regexArr = [];
var lookAhead = false;
var isUnion = false;
var kleene = false;
var emptyAllowed = false;
var kleeneToken = "";
var stringToMatch = "";
var strings = [];
var creatingString = false;

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



// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];


