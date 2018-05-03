var grephy;
(function (grephy) {
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        // put Utility functions here
        Utils.trim = function (str) {
            return str.replace(/^\s+ | \s+$/g, "");
            /*
            Huh?  Take a breath.  Here we go:
            - The "|" separates this into two expressions, as in A or B.
            - "^\s+" matches a sequence of one or more whitespace characters at the beginning of a string.
            - "\s+$" is the same thing, but at the end of the string.
            - "g" makes is global, so we get all the whitespace.
            - "" is nothing, which is what we replace the whitespace with.
            */
        };
        return Utils;
    }());
    grephy.Utils = Utils;
})(grephy || (grephy = {}));
