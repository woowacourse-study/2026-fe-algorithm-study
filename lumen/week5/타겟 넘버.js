function solution(numbers, target) {
  // target을 만들 수 있는 경우의 수를 저장합니다.
  let answer = 0;

  // index: 현재 확인 중인 숫자의 위치
  // sum: 지금까지 더하고 뺀 결과
  function dfs(index, sum) {
    // 모든 숫자를 다 사용한 경우
    if (index === numbers.length) {
      // 최종 합이 target과 같다면 정답 경우의 수를 1 증가시킵니다.
      if (sum === target) {
        answer += 1;
      }
      // 더 이상 탐색할 숫자가 없으므로 종료합니다.
      return;
    }

    // 현재 숫자를 더하는 경우를 탐색합니다.
    dfs(index + 1, sum + numbers[index]);

    // 현재 숫자를 빼는 경우를 탐색합니다.
    dfs(index + 1, sum - numbers[index]);
  }

  // 0번째 숫자부터, 현재 합 0으로 DFS를 시작합니다.
  dfs(0, 0);

  // target을 만들 수 있는 총 경우의 수를 반환합니다.
  return answer;
}
