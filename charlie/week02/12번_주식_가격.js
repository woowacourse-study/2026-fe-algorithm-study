function solution(prices) {
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    let cnt = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        cnt++;
      }
      if (prices[i] > prices[j]) {
        cnt++;
        break;
      }
    }
    answer.push(cnt);
  }
  return answer;
}
