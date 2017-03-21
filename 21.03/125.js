var deleteNonalphanum = function(s) {
    var goodString = [], char;

    for (char of s) {
        if (/^[a-z0-9]*$/.test(char)) {
            goodString.push(char);
        }
        else if (/^[A-Z]*$/.test(char)) {
            goodString.push(char.toLowerCase());
        }
    }

    return goodString.join("");
};

var isPalindrome = function(s) {
    var s = deleteNonalphanum(s), i = 0, len = s.length;

    for (i; i < len / 2; ++i) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }
    return true;
};