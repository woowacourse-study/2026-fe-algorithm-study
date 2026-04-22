function solution(cards1, cards2, goal) {
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[cnt1]) cnt1++;
    else if (goal[i] === cards2[cnt2]) cnt2++;
    else return "No";
  }
  return "Yes";
}
