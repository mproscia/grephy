module grephy {

    export class Consume{

        public static init(){
            // clear everything & all variables
        }

        public static consumeInput(){
            this.verifyInput();
            if(matched == true){
                grephy.Match.matchTokens();
            } else {
                (<HTMLInputElement>document.getElementById("content-target")).value = "Input does NOT Match Regex";

            }
        }

        public static verifyInput(){
           this.getRegex();

        }

        public static getRegex(){
            var regex = (<HTMLInputElement>document.getElementById("regexTA")).value;

            // get rid of special characters for terms of matching
            for (var i = 0; i < regex.length; i ++){
                for (var j = 0; j < alphabet.length; j++){
                    if (regex.charAt(i) == alphabet[j]){
                        acceptedChar.push(regex.charAt(i));
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



    }

}