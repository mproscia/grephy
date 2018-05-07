var grephy;
(function (grephy) {
    var Match = /** @class */ (function () {
        function Match() {
        }
        Match.init = function () {
            // reset matching variables
        };
        Match.findMatches = function () {
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
                    // TODO: create a function that sets up union and push to delta
                }
            }
            // check for parenthesis
        };
        return Match;
    }());
    grephy.Match = Match;
})(grephy || (grephy = {}));
