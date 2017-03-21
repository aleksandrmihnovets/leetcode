var reverseStr = function(s, k) {
    let i;
    const len = s.length, str = s.split(''), res = [];
    for (i = 0; i < len; i += k) {
        const part = str.slice(i, i + k);
        if (Math.floor(i / k) % 2 === 0) {
            part.reverse();
        }
        for (let j = 0; j < k; j++) {
            res.push(part[j]);
        }
    }
    return res.join('');
};