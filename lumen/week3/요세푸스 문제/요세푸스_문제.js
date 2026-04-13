function solution(N, K) {
    const queue = [];

    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }

    while (queue.length > 1) {
        // 앞의 K-1명을 뒤로 보냄
        for (let i = 0; i < K - 1; i++) {
            const frontPerson = queue.shift(); // 앞사람 꺼내기
            queue.push(frontPerson); // 다시 뒤에 넣기
        }

        // 이제 맨 앞 사람이 K번째 사람이므로 제거
        queue.shift();
    }

    return queue[0];
}