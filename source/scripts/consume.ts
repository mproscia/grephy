module grephy {

    export class Consume{

        public static init(){
            // clear everything & all variables
        }

        public static consumeInput(){
            regex = (<HTMLInputElement>document.getElementById("regexTA")).value;

            if(regex == ""){
                this.putMessage("Please enter a Regex and Try Again");
            } else {
                this.verifyInput();
                (<HTMLInputElement>document.getElementById("matchButton")).disabled = true;
                (<HTMLInputElement>document.getElementById("readButton")).disabled = false;
            }
        }


        public static readFile(){
            var fileToLoad = (<HTMLInputElement>document.getElementById("fileToLoad")).files[0];
            if(fileToLoad == null){
                this.putMessage("File Load Failed - Try Again.");

            } else {
                this.putMessage("File Load Success");

                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent){
                    textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                    console.log("input " + textFromFileLoaded);
                    inputLength = textFromFileLoaded.length;
                    input = textFromFileLoaded.split("\n");
                    console.log(input);
                };

                fileReader.readAsText(fileToLoad, "UTF-8");
                (<HTMLInputElement>document.getElementById("readButton")).disabled = true;
                (<HTMLInputElement>document.getElementById("matchButton")).disabled = false;


            }



            //TODO: capability to read more than one line
            // seperate input based on \n and then check each index of input until you go through all of them
        }





        public static verifyInput(){
           var newRegEx = new RegExp(regex);
           for (var i = 0; i < input.length; i++) {
               var result = newRegEx.test(input[i]);
               if (result == true) {
                   this.putMessage("Input: " + input[i]  + " Accepted.");
                   acceptCount ++;
               } else {
                   this.putMessage("Input: " + input[i] + " NOT Accepted.");
               }
           }
           if(acceptCount > 0){
               this.putMessage("Creating and Outputting DFA.");
               _CreateDFA.scanRegex();
           } else {
               this.putMessage("No Input Acccepted. End Program");
           }
        }

        public static putMessage(msg){
            (<HTMLInputElement>document.getElementById("logTA")).value += msg + "\n";

        }

        public static reload(){
            msg = " ";
            (<HTMLInputElement>document.getElementById("logTA")).value = msg;
            window.location.reload();
        }
    }

}