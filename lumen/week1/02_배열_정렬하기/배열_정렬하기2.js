const arr = [-1, -1, 2, 4];

function solution(arr) {
    const uniqueArray = new Set(arr);
    const filteredArray = [...uniqueArray].sort((a, b) => b - a);

    return filteredArray;
}

console.log(solution(arr));
