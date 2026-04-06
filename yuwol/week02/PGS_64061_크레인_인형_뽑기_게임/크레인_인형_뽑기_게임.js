function play(arr, idx) {
  for (const el of arr) {
    if (el[idx] !== 0) {
      const picked = el[idx];
      el.splice(idx, 1, 0);

      return picked;
    }
  }

  return null;
}

function solution(board, moves) {
  let cnt = 0;
  const stack = [];

  for (const idx of moves) {
    const top = stack[stack.length - 1];
    const picked = play(board, idx - 1);

    if (top === picked) {
      stack.pop();
      cnt += 2;
    } else if (picked) {
      stack.push(picked);
    }
  }

  return cnt;
}
