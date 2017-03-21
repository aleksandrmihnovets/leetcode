function longestCommonPrefix (strs) {
    let l = strs.length;

    if (l === 0) {
        return '';
    }

    let first = strs[0], b = first.length, chars = [];

    for (let i = 0; i < b; ++i) {
        let char = first[i];
        for (let j = 1; j < l; ++j) {
            if (char !== strs[j][i]) {
                return chars.join('');
            }
        }
        chars.push(char);
    }

    return chars.join('');
}