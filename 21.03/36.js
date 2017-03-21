function isValidSudoku(board) {
    let n = board.length, i, j;

    for (i = 0; i < n; ++i) {
        let numberExist = {}, row = board[i];
        for (j = 0; j < n; ++j) {
            let elem = row[j];
            if (elem !== '.') {
                if (numberExist[elem]) {
                    return false;
                }
                numberExist[elem] = true;
            }
        }
    }

    for (j = 0; j < n; ++j) {
        let numberExist = {};
        for (i = 0; i < n; ++i) {
            let elem = board[i][j];
            if (elem !== '.') {
                if (numberExist[elem]) {
                    return false;
                }

                numberExist[elem] = true;
            }
        }
    }

    let blocks = Math.sqrt(n);

    for (i0 = 0; i0 < blocks; ++i0) {
        for (j0 = 0; j0 < blocks; ++j0) {
            let numberExist = {};
            for (i = 0; i < blocks; ++i) {
                for (j = 0; j < blocks; ++j) {
                    let elem = board[i0 * 3 + i][j0 * 3 + j];
                    if (elem !== '.') {
                        if (numberExist[elem]) {
                            return false;
                        }

                        numberExist[elem] = true;
                    }
                }
            }
        }
    }

    return true;
}