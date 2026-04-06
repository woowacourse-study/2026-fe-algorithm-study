// 의사 코드 작성
// 1. 배열의 첫번째 원소를 뽑는다.
// 2. 배열의 두번째 원소를 뽑는다.
// 3. 뽑은 두 원소를 더한다.
/* 
4. 처음에 뽑은 원소와 두번째 뽑은 원소를 제외한 나머지 원소를 더하고 이 행동을 나머지 배열의 끝 원소까지 N-1번 반복한다.
5. 


*/
// 2. 뽑은 두 원소를 더한다.
// 3. 결과를 출력한다.

const arr = [1, 2, 3, 4, 5, 6];
let result = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        result.push(arr[i] + arr[j]);
    }
}

result.sort((a, b) => a - b);

const result2 = new Set(result)

console.log(result2);

