var grephy;
(function (grephy) {
    var ReadFile = /** @class */ (function () {
        function ReadFile() {
        }
        ReadFile.loadFileAsText = function () {
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                var textFromFileLoaded = (fileLoadedEvent.target.result).toString();
                return textFromFileLoaded;
            };
            fileReader.readAsText(fileToLoad, "UTF-8");
        };
        return ReadFile;
    }());
    grephy.ReadFile = ReadFile;
})(grephy || (grephy = {}));
