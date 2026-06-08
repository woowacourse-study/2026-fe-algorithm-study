function solution(numbers, target) {
    let count = 0;
    const dfs = (index, currentValue) => {
        if (index === numbers.length) {
            if (target === currentValue) {
                count += 1;
            }
            return;
        }
        dfs(index + 1, currentValue + numbers[index]);
        dfs(index + 1, currentValue - numbers[index]);
    };

    dfs(0, 0);
    return count;
}
