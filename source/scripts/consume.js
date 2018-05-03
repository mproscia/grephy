var grephy;
(function (grephy) {
    var Consume = /** @class */ (function () {
        function Consume() {
        }
        Consume.init = function () {
            // clear everything & all variables
        };
        Consume.consumeInput = function () {
            this.getInput();
            grephy.Match.matchTokens();
        };
        Consume.getInput = function () {
            var inputStr = (grephy.ReadFile.loadFileAsText());
            //store input into global array
            for (var i = 0; i < inputStr.length; i++)
                console.log("input" + input);
            // break lines up
            //TODO: capability to read more than one line
        };
        Consume.prototype.getRegex = function () {
            var regex = document.getElementById("regexTA").value;
            // get rid of special characters for terms of matching
            for (var i = 0; i < regex.length; i++) {
                for (var j = 0; j < alphabet.length; j++) {
                    if (regex.charAt(i) == alphabet[j]) {
                        acceptedChar.push(regex.charAt(i));
                    }
                }
            }
            console.log("accept" + acceptedChar);
        };
        return Consume;
    }());
    grephy.Consume = Consume;
})(grephy || (grephy = {}));
