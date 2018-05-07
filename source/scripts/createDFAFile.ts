module grephy{
    export class CreateDFAFile{

        public static createOutput(){
            dotString = "";

            dotString += "digraph graph {";
            this.newLine();
            dotString += "  node [style=filled, color=white];";
            this.newLine();
            dotString += "  start -> q" + startState + ";";
            this.newLine();

            for(var i = 0; i < curTransitionStates.length; i++){
                dotString += "  q" + curTransitionStates[i] + " -> q" + newTransitionStates[i] + ";";
                this.newLine();
            }

            for(var j = 0; j < acceptStates.length; j++){
                dotString += "  q" + acceptStates[j] + " [shape=doublecircle];";
                this.newLine();
            }

            dotString += "}";

            (<HTMLInputElement>document.getElementById("dotOutputTA")).value = dotString;
        }

        public static writeToFile(){
            var str = dotString;
            var data = new Blob([str], {type: "text/plain;charset=utf-8"});
            this.saveAs(data, "newDFA.txt");



        }

        public static saveAs(blob, fileName) {

            var url = window.URL.createObjectURL(blob);

            var anchorElem = document.createElement("a");
            anchorElem.style = "display: none";
            anchorElem.href = url;
            anchorElem.download = fileName;

            document.body.appendChild(anchorElem);
            anchorElem.click();

            document.body.removeChild(anchorElem);

            setTimeout(function() {
                window.URL.revokeObjectURL(url);
            }, 1000);

        }

        public static newLine(){
            dotString += "\n";
        }
    }
}
