module grephy {

    export class Consume{

        public static init(){
            // clear everything & all variables
        }

        public static consumeInput(){
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
                    input = textFromFileLoaded.split("");
                };

                fileReader.readAsText(fileToLoad, "UTF-8");
                (<HTMLInputElement>document.getElementById("readButton")).disabled = true;
                (<HTMLInputElement>document.getElementById("matchButton")).disabled = false;


            }



            //TODO: capability to read more than one line
        }


        public static getRegex(){
            regex = (<HTMLInputElement>document.getElementById("regexTA")).value;
            console.log("regex " + regex);
            if(regex != ""){
                // set alphabet
                for (var i = 0; i < regex.length; i ++){
                    if(regex.charAt(i) != "(" || regex.charAt(i) != ")" || regex.charAt(i) != "+" || regex.charAt(i) != "*"){
                        acceptedAlpha.push(regex.charAt(i));
                    }
                }
            }
        }

        public static consumeRegex(){
            // create regex array
            var str = "";
            var counter = 1;
            for (var m = 0; m < regex.length; m++){
                if(regex.charAt(m) == "(") {
                    string = true;
                    regexArr.push(regex.charAt(m));
                    while(string == true){
                        if(regex.charAt(m+counter) == ")"){
                            regexArr.push(str);
                            regexArr.push(regex.charAt(m+counter));
                            string = false;
                        } else {
                            str += regex.charAt(m+counter);
                            counter ++;
                        }
                    }
                    m += counter;
                } else {
                    regexArr.push(regex.charAt(m));
                }
            }
            console.log(regexArr);
        }




        public static verifyInput(){
           this.getRegex();
           var newRegEx = new RegExp(regex);
           console.log(textFromFileLoaded);
           console.log(newRegEx.test(textFromFileLoaded));

            // check that input can match regex

            for(var k = 0; k < inputLength; k++){
                for (var l = 0; l < acceptedAlpha.length; l++){
                    if(input[k] == acceptedAlpha[l]){
                        matched = true;
                    }
                }
            }


        }

        public static putMessage(msg){
            (<HTMLInputElement>document.getElementById("content-target")).value += msg + "\n";

        }

        public static test(){
            var newRegEx = new RegExp(/tes/);
            console.log(newRegEx.test("tessssssssssst"));

        }

        public static reload(){
            msg = " ";
            (<HTMLInputElement>document.getElementById("content-target")).value = msg;
            window.location.reload();
        }
    }

}