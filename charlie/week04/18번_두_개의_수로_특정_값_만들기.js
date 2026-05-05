function solution(arr, target) {
  let lst = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (lst.has(target - arr[i]) === true && target - arr[i] !== arr[i])
      return true;
  }
  return false;
}
