function solution(n, k) {
  const answer = Array.from({ length: n }, (_, i) => i + 1);

  while (answer.length !== 1) {
    const targetIdx = (k - 1) % answer.length;

    answer.splice(targetIdx, 1);
    const prevArr = answer.splice(0, targetIdx);

    answer.push(...prevArr);
  }

  return answer[0];
}

console.log(solution(5, 2)); // 3
console.log(solution(5, 8)); // 1
