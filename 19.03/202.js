var isHappy = function(n) {
    var history = {
        n: true
    };
    while (n !== 1) {
        var str = String(n), len = str.length, n = 0;
        for (var i = 0; i < len; ++i) {
            var num = +str[i];
            n += num * num;
        }
        if (history[n]) {
            return false;
        }
        history[n] = true;
    }
    return true;
};