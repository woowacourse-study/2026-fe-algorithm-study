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

    pop() {
        if (!this.#isEmpty()) {
            return this.list[this.front++];
        }
    }

    popCheck() {
        if (!this.#isEmpty()) {
            return this.list[this.front];
        }
    }

    push(item) {
        this.list.push(item);
        this.rear++;
    }

    size() {
        return this.rear - this.front;
    }
}

function solution(cards1, cards2, goal) {
    const cards1Queue = new Queue(cards1);
    const cards2Queue = new Queue(cards2);

    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1Queue.popCheck()) {
            cards1Queue.pop();
        } else if (goal[i] === cards2Queue.popCheck()) {
            cards2Queue.pop();
        } else return 'No';
    }

    return 'Yes';
}

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
