var grephy;
(function (grephy) {
    var Consume = /** @class */ (function () {
        function Consume() {
        }
        Consume.init = function () {
            // clear everything & all variables
        };
        Consume.consumeInput = function () {
            this.verifyInput();
            if (matched == true) {
                document.getElementById("matchButton").disabled = true;
                grephy.Match.matchTokens();
            }
            else {
                if (acceptedChar.length == 0) {
                    // do nothing bc output already printed
                    document.getElementById("content-target").value = "Regex is Empty - Try Again";
                }
                else {
                    document.getElementById("content-target").value = "Input does NOT Match Regex - Try Again";
                    document.getElementById("matchButton").disabled = true;
                    document.getElementById("readButton").disabled = false;
                }
            }
        };
        Consume.verifyInput = function () {
            this.getRegex();
            // check that input can match regex
            for (var k = 0; k < inputLength; k++) {
                for (var l = 0; l < acceptedChar.length; l++) {
                    if (input[k] == acceptedChar[l]) {
                        matched = true;
                        console.log("match");
                    }
                }
            }
        };
        Consume.getRegex = function () {
            var regex = document.getElementById("regexTA").value;
            if (regex != "") {
                // get rid of special characters for terms of matching
                for (var i = 0; i < regex.length; i++) {
                    for (var j = 0; j < alphabet.length; j++) {
                        if (regex.charAt(i) == alphabet[j]) {
                            acceptedChar.push(regex.charAt(i));
                        }
                    }
                }
            }
            console.log("accept" + acceptedChar);
        };
        Consume.readFile = function () {
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            if (fileToLoad == null) {
                document.getElementById("content-target").value = "File Load Failed - Try Again.";
            }
            else {
                document.getElementById("content-target").value = " ";
                var fileReader = new FileReader();
                fileReader.onload = function (fileLoadedEvent) {
                    textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                    inputLength = textFromFileLoaded.length;
                    input = textFromFileLoaded.split("");
                    console.log("input" + input);
                };
                fileReader.readAsText(fileToLoad, "UTF-8");
                document.getElementById("readButton").disabled = true;
                document.getElementById("matchButton").disabled = false;
            }
            //TODO: capability to read more than one line
        };
        Consume.reload = function () {
            window.location.reload();
        };
        return Consume;
    }());
    grephy.Consume = Consume;
})(grephy || (grephy = {}));
