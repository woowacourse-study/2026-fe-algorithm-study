class Queue {
  constructor(arr) {
    this.items = [...arr];
    this.front = 0;
  }

  // 맨 앞 원소 확인
  peek() {
    return this.front < this.items.length ? this.items[this.front] : null;
  }

  // 맨 앞 원소 꺼냄
  dequeue() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front >= this.items.length;
  }
}

function solution(cards1, cards2, goal) {
  const q1 = new Queue(cards1);
  const q2 = new Queue(cards2);

  for (const word of goal) {
    // 첫 번째 카드 뭉치의 맨 앞 카드가 현재 단어와 일치하면 꺼냄
    if (q1.peek() === word) {
      q1.dequeue();
      // 두 번째 카드 뭉치의 맨 앞 카드가 현재 단어와 일치하면 꺼냄
    } else if (q2.peek() === word) {
      q2.dequeue();
    } else {
      // 어느 카드 뭉치에서도 꺼낼 수 없으면 No
      return "No";
    }
  }

  return "Yes";
}
