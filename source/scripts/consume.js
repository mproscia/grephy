var grephy;
(function (grephy) {
    var Consume = /** @class */ (function () {
        function Consume() {
        }
        Consume.init = function () {
            // clear everything & all variables
        };
        Consume.consumeInput = function () {
            regex = document.getElementById("regexTA").value;
            acceptCount = 0;
            if (regex == "") {
                this.putMessage("Please enter a Regex and Try Again");
            }
            else {
                this.verifyInput();
                document.getElementById("matchButton").disabled = true;
                document.getElementById("readButton").disabled = false;
            }
        };
        Consume.readFile = function () {
            this.reloadLog();
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            if (fileToLoad == null) {
                this.putMessage("File Load Failed - Try Again.");
            }
            else {
                this.putMessage("File Load Success");
                var fileReader = new FileReader();
                fileReader.onload = function (fileLoadedEvent) {
                    textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                    console.log("input " + textFromFileLoaded);
                    inputLength = textFromFileLoaded.length;
                    input = textFromFileLoaded.split("\n");
                    console.log(input);
                };
                fileReader.readAsText(fileToLoad, "UTF-8");
                document.getElementById("readButton").disabled = true;
                document.getElementById("matchButton").disabled = false;
            }
            //TODO: capability to read more than one line
            // seperate input based on \n and then check each index of input until you go through all of them
        };
        Consume.verifyInput = function () {
            var newRegEx = new RegExp(regex);
            for (var i = 0; i < input.length; i++) {
                var result = newRegEx.test(input[i]);
                if (result == true) {
                    this.putMessage("Input: " + input[i] + " Accepted.");
                    acceptCount++;
                }
                else {
                    this.putMessage("Input: " + input[i] + " NOT Accepted.");
                }
            }
            if (acceptCount > 0) {
                this.putMessage("Creating and Outputting DFA.");
                _CreateDFA.scanRegex();
            }
            else {
                this.putMessage("No Input Acccepted. End Program");
            }
        };
        Consume.putMessage = function (msg) {
            document.getElementById("logTA").value += msg + "\n";
        };
        Consume.reload = function () {
            msg = " ";
            document.getElementById("logTA").value = msg;
            window.location.reload();
        };
        Consume.reloadLog = function () {
            document.getElementById("logTA").value = " ";
            document.getElementById("dotOutputTA").value = " ";
        };
        return Consume;
    }());
    grephy.Consume = Consume;
})(grephy || (grephy = {}));
