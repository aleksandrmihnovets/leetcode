function maxSubArray(nums) {
    let maximum = -Infinity;
    nums.reduce((acum, curr) => {
        const sum = acum + curr;
        if (sum > maximum) {
            maximum = sum;
        }
        return sum > 0 ? sum : 0;
    }, 0);

    return maximum;
}