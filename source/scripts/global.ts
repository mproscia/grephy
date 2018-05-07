var onDocumentLoad = function(){
    grephy.Consume.init();
    // hello
};

var _Consume = grephy.Consume;
var _Match = grephy.Match;
var msg = "";
var matched = false;
var doneMatching = false;
var input = [];
var textFromFileLoaded = "";
var inputLength = 0;
var acceptedAlpha = [];
var regex;
var string = false;
var regexArr = [];
var lookAhead = false;
var isUnion = false;
var kleene = false;
var emptyAllowed = false;
var kleeneToken = "";


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];


