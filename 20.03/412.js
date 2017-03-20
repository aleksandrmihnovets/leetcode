var fizzBuzz = function(n) {
    let i;
    const result = [];
    for (i = 1; i <= n; ++i) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                result.push('FizzBuzz');
            }
            else {
                result.push('Fizz');
            }
        }
        else if (i % 5 === 0) {
            result.push('Buzz');
        }
        else {
            result.push(String(i));
        }
    }
    return result;
};