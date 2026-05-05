// 어케 풀지
// 그냥 반복해서 풀면 풀겠는데 여기에 queue를 어떻게 활용해서 더 효율적으로 풀 수 있을까
// 큐를 사용하지 않는 아이디어 -> 배열의 길이가 1이 될 때까지 제거하기
// => 이 방식은 n-1만큼 배열을 순회하고, 배열에서 항목을 제거하면 shift가 발생하기 때문에 N^2
// queue를 사용하면 push와 pop 만으로 배열의 요소를 조작할 수 있음

class Queue {
    list = [];
    front = 0;
    rear = 0;
    constructor(list = []) {
        this.list = list;
        this.rear = list.length - 1;
    }
    #isEmpty() {
        return this.front === this.rear;
    }

    pop() {
        if (this.#isEmpty()) return;
        return this.list[this.front++];
    }

    push(item) {
        this.list.push(item);
        this.rear += 1;
    }
    size() {
        return this.rear - this.front;
    }
}

const solution = (N, K) => {
    let myList = [];
    for (let i = 0; i < N; i++) {
        myList.push(i + 1);
    }
    const myQueue = new Queue(myList);
    while (myQueue.size() !== 1) {
        for (let j = 0; j < K - 1; j++) {
            const passed = myQueue.pop();
            myQueue.push(passed);
        }
        myQueue.pop();
    }
    return myQueue.pop();
};

console.log(solution(5, 2));
