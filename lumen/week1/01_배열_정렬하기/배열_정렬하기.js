const arr = [-1, 3, 2, 5];

function solution(arr){
    arr.sort((a, b) => a - b);
    return arr;
}

const result = solution(arr);

console.log(result);
