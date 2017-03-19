var lengthOfLastWord = function(s) {
    s = s.trim();
    var i = s.length - 1, result = 0;
    for (i; i >= 0; --i) {
        if (s[i] !== ' ') {
            ++result;
        }
        else {
            return result;
        }
    }
    return result;
};