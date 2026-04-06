**정답 코드**

```js
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  let length = prices.length;

  for (let i = 0; i < n; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length) {
    let j = stack.pop();
    answer[j] = length - j - 1;
  }

  return answer;
}
```

- 가격이 떨어지는 순간을 감지하기 위해서는 직전 가격과의 '인덱스 차이'를 비교하면 충분하다
  → `stack`에 값이 아닌 '인덱스'를 저장하는 이유

- 스택 도입 근거

  ```js
  [1, 2, 3, 2, 3];
  ```

  → ₩3(2번 인덱스)의 기간을 확정하기 위해서는 다음 인덱스인 3번 인덱스의 값을 알기 전까지는 알 수 없음
  → 한 칸 미래의 인덱스의 값과 현재 인덱스의 값을 비교해야 함
  → 스택의 최상단 = 가장 최근에 대기 중인 인덱스이고, 현재 값과 비교할 대상은 항상 그 직전(최근)의 인덱스이다.
  → 따라서 스택에 아직 기간이 확정되지 않은 인덱스들을 쌓아두는 식으로 구현 (기간이 확정된 인덱스는 pop)
