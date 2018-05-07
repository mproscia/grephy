module grephy{
    export class CreateDFAFile{

        public static createFile(){
            dotString = "test code";
            this.writeToFile();
        }

        public static writeToFile(){
            var str = dotString;
            var textChars = atob(str);
            var textNums = new Array(textChars.length);
            for (var i = 0; i < textChars.length; i++){
                textNums[i] = textChars.charCodeAt(i);
            }

            var textArray = new Uint8Array(textNums);
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

            // On Edge, revokeObjectURL should be called only after
            // a.click() has completed, atleast on EdgeHTML 15.15048
            setTimeout(function() {
                window.URL.revokeObjectURL(url);
            }, 1000);

        }
    }
}
