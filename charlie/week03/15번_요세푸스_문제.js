function solution(n, k) {
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue[0]);
      queue.shift();
    }
    queue.shift();
  }

  return queue[0];
}
