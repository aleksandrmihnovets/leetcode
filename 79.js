function exist(board, word) {
    let rowLen = board.length, wordLen = word.length, result = false,
        colLen = rowLen && board[0].length;

    let wordCopy = word.split('');

    for (let i = 0; i < rowLen; ++i) {
        for (let j = 0; j < colLen; ++j) {
            let index = wordCopy.indexOf(board[i][j]);
            if (index !== -1) {
                wordCopy.splice(index, 1);
            }
        }
    }

    if (wordCopy.length !== 0) {
        return false;
    }

    function goToCell(i, j, index, path) {
        if (i < 0 || i >= rowLen || j < 0 || j >= colLen) {
            return;
        }

        if (board[i][j] === word[index]) {
            let str_index = [i, j].join(',');
            if (path.indexOf(str_index) === -1){
                if (index === wordLen - 1) {
                    result = true;
                    return;
                }

                if (result) {
                    return;
                }
                goToCell(i + 1, j, index + 1, [...path, str_index]);
                if (result) {
                    return;
                }
                goToCell(i, j + 1, index + 1, [...path, str_index]);
                if (result) {
                    return;
                }
                goToCell(i - 1, j, index + 1, [...path, str_index]);
                if (result) {
                    return;
                }
                goToCell(i, j - 1, index + 1, [...path, str_index]);
            }
        }
    }

    for (let i = 0; i < rowLen; ++i) {
        for (let j = 0; j < colLen; ++j) {
            goToCell(i, j, 0, []);

            if (result) {
                return true;
            }
        }
    }

    return result;
}