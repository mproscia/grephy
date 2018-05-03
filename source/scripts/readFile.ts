module grephy{

    export class ReadFile{

        public static loadFileAsText(){
            var fileToLoad = document.getElementById("fileToLoad").files[0];

            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent){
                var textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                return textFromFileLoaded;
            };

            fileReader.readAsText(fileToLoad, "UTF-8");
        }

    }

}

