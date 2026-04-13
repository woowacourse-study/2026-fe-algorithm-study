function solution(progresses, speeds) {
    const answer = [];


    while (progresses.length > 0) {
        // 하나라도 100이 될 때까지 더하기
        while (progresses[0] < 100) {
            progresses = progresses.map((p, i) => p + speeds[i]);
        }

        // 앞에서부터 100 이상인 것들 count
        let count = 0;
        while (progresses.length > 0 && progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }

        answer.push(count);
    }

    return answer
}