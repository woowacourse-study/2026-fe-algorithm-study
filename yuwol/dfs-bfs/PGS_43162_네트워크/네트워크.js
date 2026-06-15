function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let networkCount = 0;

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      // 연결되어 있고(1) + 아직 방문 안 했으면 탐색
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i); // 새로운 네트워크 발견 → 연결된 모든 노드 방문
      networkCount++; // 탐색 시작 1회 = 네트워크 1개
    }
  }

  return networkCount;
}
