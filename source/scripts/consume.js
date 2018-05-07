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
            // if(matched == true){
            //     this.consumeRegex();
            //     this.putMessage("Input DOES Match Regex Alphabet");
            //     (<HTMLInputElement>document.getElementById("matchButton")).disabled = true;
            //     creatingString = true;
            //     grephy.Match.setUpRegexString();
            // } else {
            //     if (acceptedAlpha.length == 0){
            //         // do nothing bc output already printed
            //         this.putMessage( "Regex is Empty - Try Again");
            //     } else {
            //         this.putMessage("Input does NOT Match Regex alphabet- Try Again");
            //         (<HTMLInputElement>document.getElementById("matchButton")).disabled = true;
            //         (<HTMLInputElement>document.getElementById("readButton")).disabled = false;
            //     }
            // }
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
                    console.log("input " + textFromFileLoaded);
                    inputLength = textFromFileLoaded.length;
                    input = textFromFileLoaded.split("");
                };
                fileReader.readAsText(fileToLoad, "UTF-8");
                document.getElementById("readButton").disabled = true;
                document.getElementById("matchButton").disabled = false;
            }
            //TODO: capability to read more than one line
        };
        Consume.getRegex = function () {
            regex = document.getElementById("regexTA").value;
            console.log("regex " + regex);
            if (regex != "") {
                // set alphabet
                for (var i = 0; i < regex.length; i++) {
                    if (regex.charAt(i) != "(" || regex.charAt(i) != ")" || regex.charAt(i) != "+" || regex.charAt(i) != "*") {
                        acceptedAlpha.push(regex.charAt(i));
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
        Consume.verifyInput = function () {
            this.getRegex();
            var newRegEx = new RegExp(regex);
            console.log(textFromFileLoaded);
            console.log(newRegEx.test(textFromFileLoaded));
            // check that input can match regex
            for (var k = 0; k < inputLength; k++) {
                for (var l = 0; l < acceptedAlpha.length; l++) {
                    if (input[k] == acceptedAlpha[l]) {
                        matched = true;
                    }
                }
            }
        };
        Consume.putMessage = function (msg) {
            document.getElementById("content-target").value += msg + "\n";
        };
        Consume.test = function () {
            var newRegEx = new RegExp(/tes/);
            console.log(newRegEx.test("tessssssssssst"));
        };
        Consume.reload = function () {
            msg = " ";
            document.getElementById("content-target").value = msg;
            window.location.reload();
        };
        return Consume;
    }());
    grephy.Consume = Consume;
})(grephy || (grephy = {}));
