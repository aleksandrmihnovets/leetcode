var generate = function(numRows) {
    var result = [], row, prevRow;
    for (var i = 0; i < numRows; ++i) {
        result.push([]);
        row = result[i];
        for (var j = 0; j < i + 1; ++j) {
            if (j !== 0 && j !== i) {
                row.push(prevRow[j - 1] + prevRow[j]);
            }
            else {
                row.push(1);
            }
        }
        prevRow = row;
    }
    return result;
};