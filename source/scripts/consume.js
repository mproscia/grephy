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
                this.consumeRegex();
                this.putMessage("Input DOES Match Regex Alphabet");
                document.getElementById("matchButton").disabled = true;
                grephy.Match.findMatches();
            }
            else {
                if (acceptedAlpha.length == 0) {
                    // do nothing bc output already printed
                    this.putMessage("Regex is Empty - Try Again");
                }
                else {
                    this.putMessage("Input does NOT Match Regex alphabet- Try Again");
                    document.getElementById("matchButton").disabled = true;
                    document.getElementById("readButton").disabled = false;
                }
            }
        };
        Consume.verifyInput = function () {
            this.getRegex();
            // check that input can match regex
            for (var k = 0; k < inputLength; k++) {
                for (var l = 0; l < acceptedAlpha.length; l++) {
                    if (input[k] == acceptedAlpha[l]) {
                        matched = true;
                    }
                }
            }
        };
        Consume.getRegex = function () {
            regex = document.getElementById("regexTA").value;
            if (regex != "") {
                // set alphabet
                for (var i = 0; i < regex.length; i++) {
                    for (var j = 0; j < alphabet.length; j++) {
                        if (regex.charAt(i) == alphabet[j]) {
                            acceptedAlpha.push(regex.charAt(i));
                        }
                    }
                }
            }
        };
        Consume.consumeRegex = function () {
            // create regex array
            var str = "";
            var counter = 1;
            for (var m = 0; m < regex.length; m++) {
                if (regex.charAt(m) == "(") {
                    string = true;
                    regexArr.push(regex.charAt(m));
                    while (string == true) {
                        if (regex.charAt(m + counter) == ")") {
                            regexArr.push(str);
                            regexArr.push(regex.charAt(m + counter));
                            string = false;
                        }
                        else {
                            str += regex.charAt(m + counter);
                            counter++;
                        }
                    }
                    m += counter;
                }
                else {
                    regexArr.push(regex.charAt(m));
                }
            }
            console.log(regexArr);
        };
        Consume.readFile = function () {
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            if (fileToLoad == null) {
                this.putMessage("File Load Failed - Try Again.");
            }
            else {
                this.putMessage("File Load Success");
                var fileReader = new FileReader();
                fileReader.onload = function (fileLoadedEvent) {
                    textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                    inputLength = textFromFileLoaded.length;
                    input = textFromFileLoaded.split("");
                };
                fileReader.readAsText(fileToLoad, "UTF-8");
                document.getElementById("readButton").disabled = true;
                document.getElementById("matchButton").disabled = false;
            }
            //TODO: capability to read more than one line
        };
        Consume.reload = function () {
            msg = " ";
            document.getElementById("content-target").value = msg;
            window.location.reload();
        };
        Consume.putMessage = function (msg) {
            document.getElementById("content-target").value += msg + "\n";
        };
        return Consume;
    }());
    grephy.Consume = Consume;
})(grephy || (grephy = {}));
