module grephy {

    export class Consume{

        public static init(){
            // clear everything & all variables
        }

        public static consumeInput(){
            this.getInput();
            grephy.Match.matchTokens();
        }

        public static getInput(){
            var inputStr = (grephy.ReadFile.loadFileAsText());
            //store input into global array

            for (var i = 0; i < inputStr.length; i++)

            console.log("input" + input);
            // break lines up
            //TODO: capability to read more than one line


        }

        public getRegex(){
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

    }

}