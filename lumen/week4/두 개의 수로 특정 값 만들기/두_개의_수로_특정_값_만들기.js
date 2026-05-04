function solution(arr, target) {
  // 이전에 확인한 숫자들을 저장할 해시 테이블 역할의 객체를 만든다
  const hashTable = {};

  // 배열의 숫자를 하나씩 확인한다
  for (const num of arr) {
    // 현재 숫자 num과 더해서 target이 되는 숫자를 구한다
    const pairNumber = target - num;

    // 필요한 숫자 pairNumber가 이전에 나온 적 있다면
    if (hashTable[pairNumber] !== undefined) {
      // 두 수의 합으로 target을 만들 수 있으므로 true를 반환한다
      return true;
    }

    // 현재 숫자를 이후 비교를 위해 저장한다
    hashTable[num] = true;
  }

  // 반복문이 끝날 때까지 합이 target인 두 수를 찾지 못했다면 false를 반환한다
  return false;
}
