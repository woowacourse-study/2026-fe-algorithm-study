function solution(s) {
  const stack = [];

  for (const el of s) {
    let top = stack[stack.length - 1];

    if (stack.length > 0 && top === el) {
      stack.pop();
      continue;
    }

    stack.push(el);
  }

  return stack.length === 0 ? 1 : 0;
}
