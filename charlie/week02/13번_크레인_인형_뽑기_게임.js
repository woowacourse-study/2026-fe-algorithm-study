function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (let move of moves) {
    let col = move - 1;

    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        let doll = board[row][col];
        board[row][col] = 0;

        if (basket[basket.length - 1] === doll) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  }

  return answer;
}
