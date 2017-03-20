function longestPalindrome(s) {
    const frequency = {};
    let i, prop, len = s.length;
    for (i = 0; i < len; ++i) {
        const ch = s[i];
        frequency[ch] = frequency[ch] + 1 || 1;
    }

    let res = 0, wasOdd = false;
    for (prop in frequency) {
        const val = frequency[prop];
        if (val % 2 === 1) {
            res += val - 1;
            wasOdd = true;
        }
        else if (val % 2 === 0) {
            res += val;
        }
    }

    return wasOdd ? ++res : res;
}