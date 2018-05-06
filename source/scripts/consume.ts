module grephy {

    export class Consume{

        public static init(){
            // clear everything & all variables
        }

        public static consumeInput(){
            this.verifyInput();
            if(matched == true){
                (<HTMLInputElement>document.getElementById("matchButton")).disabled = true;
                grephy.Match.matchTokens();
            } else {
                if (acceptedChar.length == 0){
                    // do nothing bc output already printed
                    (<HTMLInputElement>document.getElementById("content-target")).value = "Regex is Empty - Try Again";
                } else {
                    (<HTMLInputElement>document.getElementById("content-target")).value = "Input does NOT Match Regex - Try Again";
                    (<HTMLInputElement>document.getElementById("matchButton")).disabled = true;
                    (<HTMLInputElement>document.getElementById("readButton")).disabled = false;
                }
            }
        }

        public static verifyInput(){
           this.getRegex();

            // check that input can match regex

            for(var k = 0; k < inputLength; k++){
                for (var l = 0; l < acceptedChar.length; l++){
                    if(input[k] == acceptedChar[l]){
                        matched = true;
                        console.log("match");
                    }
                }
            }
        }

        public static getRegex(){
            var regex = (<HTMLInputElement>document.getElementById("regexTA")).value;
            if(regex != ""){
                // get rid of special characters for terms of matching
                for (var i = 0; i < regex.length; i ++){
                    for (var j = 0; j < alphabet.length; j++){
                        if (regex.charAt(i) == alphabet[j]){
                            acceptedChar.push(regex.charAt(i));
                        }
                    }
                }
            }



            console.log("accept" + acceptedChar);

        }

        public static readFile(){
            var fileToLoad = (<HTMLInputElement>document.getElementById("fileToLoad")).files[0];
            if(fileToLoad == null){
                (<HTMLInputElement>document.getElementById("content-target")).value = "File Load Failed - Try Again.";

            } else {
                (<HTMLInputElement>document.getElementById("content-target")).value = " ";

                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent){
                    textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                    inputLength = textFromFileLoaded.length;
                    input = textFromFileLoaded.split("");
                    console.log("input" + input);
                };

                fileReader.readAsText(fileToLoad, "UTF-8");
                (<HTMLInputElement>document.getElementById("readButton")).disabled = true;
                (<HTMLInputElement>document.getElementById("matchButton")).disabled = false;


            }


            //TODO: capability to read more than one line
        }



        public static reload(){
            window.location.reload();
        }



    }

}