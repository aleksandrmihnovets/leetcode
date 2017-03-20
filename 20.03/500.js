var findWords = function(words) {
    const firstRow = 'qwertyuiop'.split('');
    const secondRow = 'asdfghjkl'.split('');
    const thirdRow = 'zxcvbnm'.split('');
    const rows = [firstRow, secondRow, thirdRow];
    const result = [];
    let i, j, k, good = true;
    for (i = 0; i < words.length; ++i) {
        good = true;
        const word = words[i];
        let row;
        for (j = 0; j < word.length; ++j) {
            if (row !== undefined) {
                if (rows[row].indexOf(word[j].toLowerCase()) === -1) {
                    good = false;
                    break;
                }
            }
            else {
                for (k = 0; k < 3; ++k) {
                    if (rows[k].indexOf(word[j]) !== -1) {
                        row = k;
                        break;
                    }
                }
            }
        }
        if (good) {
            result.push(word);
        }
    }
    return result;
};