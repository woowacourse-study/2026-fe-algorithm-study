// function solution(arr, target) {
//     const hashTable = [];
//     for (let i = 0; i < arr.length; i++) {
//         hashTable.push(target - arr[i]);
//     }

//     console.log(hashTable, arr);
//     const found = hashTable.some((ele) => arr.includes(ele));
//     return found ? 'True' : 'False';
// }

function solution(arr, target) {
    const set = new Set(arr);

    for (const v of arr) {
        const complement = target - v;
        if (set.has(complement) && complement !== v) return 'True';
    }
    return 'False';
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
