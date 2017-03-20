function majorityElement(nums) {
    const amount = {}, n = nums.length;
    let i;

    for (i = 0; i < n; ++i) {
        const num = nums[i];
        const amountNum = amount[num] + 1 || 1;
        amount[num] = amountNum;
        if (amountNum > n / 2) {
            return num;
        }
    }
}