function solution(n, computers) {
  let answer = 0;

  // 각 컴퓨터를 방문했는지 기록하는 배열
  const visited = Array.from({ length: n }, () => false);

  // current 컴퓨터와 연결된 모든 컴퓨터를 탐색하는 함수
  function explore(current) {
    // 현재 컴퓨터 방문 처리와 i = j 즉, 자기 자신과 연결된 경우를 넘어가기 위함
    visited[current] = true;

    // current 컴퓨터와 연결된 다른 컴퓨터들을 확인
    for (let next = 0; next < n; next++) {
      // current와 next가 연결되어 있는지 확인
      const isConnected = computers[current][next] === 1;

      // next 컴퓨터를 아직 방문하지 않았는지 확인
      const isNotVisited = !visited[next];

      // 연결되어 있고, 아직 방문하지 않았다면 계속 탐색
      if (isConnected && isNotVisited) {
        explore(next);
      }
    }
  }

  // 모든 컴퓨터를 하나씩 확인
  for (let current = 0; current < n; current++) {
    // 아직 방문하지 않은 컴퓨터라면 새로운 네트워크 시작
    if (!visited[current]) {
      answer++;

      // current와 연결된 컴퓨터들을 전부 방문 처리
      explore(current);
    }
  }

  return answer;
}
