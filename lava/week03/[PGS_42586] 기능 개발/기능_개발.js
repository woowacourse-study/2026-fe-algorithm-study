// 이건 또 어케 푸냐
// 전부 큐에 쌓아두고 사이클마다 큐의 값을 업데이트 -> 확인했을 때 작업 끝났으면 연쇄적으로 pop?

class Queue {
    list = [];
    front = 0;
    rear = 0;

    constructor(list = []) {
        this.list = list;
        this.rear = this.list.length - 1;
    }

    #isEmpty() {
        return this.front > this.rear;
    }

    checkPop() {
        return this.list[this.front];
    }

    pop() {
        if (this.#isEmpty()) return;
        return this.list[this.front++];
    }

    push(item) {
        this.list.push(item);
        this.rear += 1;
    }
    update(speeds) {
        for (let i = 0; i < speeds.length; i++) {
            this.list[i] += speeds[i];
        }
    }
}

function solution(progresses, speeds) {
    const progressQueue = new Queue(progresses);
    var answer = [];
    let popListSize = 0;
    while (popListSize !== progresses.length) {
        progressQueue.update(speeds);
        let tmpPopSize = 0;
        while (progressQueue.checkPop() >= 100) {
            progressQueue.pop();
            popListSize += 1;
            tmpPopSize += 1;
        }
        if (tmpPopSize === 0) continue;
        answer.push(tmpPopSize);
    }
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
