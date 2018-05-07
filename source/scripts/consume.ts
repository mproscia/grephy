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
                };

                fileReader.readAsText(fileToLoad, "UTF-8");
                (<HTMLInputElement>document.getElementById("readButton")).disabled = true;
                (<HTMLInputElement>document.getElementById("matchButton")).disabled = false;


            }



            //TODO: capability to read more than one line
            // seperate input based on \n and then check each index of input until you go through all of them
        }


        // public static getRegex(){
        //     regex = (<HTMLInputElement>document.getElementById("regexTA")).value;
        //     console.log("regex " + regex);
        //     if(regex != ""){
        //         // set alphabet
        //         for (var i = 0; i < regex.length; i ++){
        //             if(regex.charAt(i) != "(" || regex.charAt(i) != ")" || regex.charAt(i) != "+" || regex.charAt(i) != "*"){
        //                 acceptedAlpha.push(regex.charAt(i));
        //             }
        //         }
        //     }
        // }

        // public static consumeRegex(){
        //     // create regex array
        //     var str = "";
        //     var counter = 1;
        //     for (var m = 0; m < regex.length; m++){
        //         if(regex.charAt(m) == "(") {
        //             string = true;
        //             regexArr.push(regex.charAt(m));
        //             while(string == true){
        //                 if(regex.charAt(m+counter) == ")"){
        //                     regexArr.push(str);
        //                     regexArr.push(regex.charAt(m+counter));
        //                     string = false;
        //                 } else {
        //                     str += regex.charAt(m+counter);
        //                     counter ++;
        //                 }
        //             }
        //             m += counter;
        //         } else {
        //             regexArr.push(regex.charAt(m));
        //         }
        //     }
        //     console.log(regexArr);
        // }




        public static verifyInput(){
           var newRegEx = new RegExp(regex);
           var result = newRegEx.test(textFromFileLoaded);
           if (result == true){
               this.putMessage("Input: " + textFromFileLoaded + " Accepted. \nOutputting DFA");
               _CreateDFA.scanRegex();
           } else {
               this.putMessage("Input: " + textFromFileLoaded + " NOT Accepted. \nEnd Program.");
           }
        }

        public static putMessage(msg){
            (<HTMLInputElement>document.getElementById("content-target")).value += msg + "\n";

        }

        public static reload(){
            msg = " ";
            (<HTMLInputElement>document.getElementById("content-target")).value = msg;
            window.location.reload();
        }
    }

}