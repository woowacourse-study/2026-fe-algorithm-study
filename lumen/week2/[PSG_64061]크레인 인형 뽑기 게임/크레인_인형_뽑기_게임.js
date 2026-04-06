function solution(board, moves) {
    let answer = 0;
    const basket = [];

    for (let col of moves) {
        col -= 1; // 인덱스는 0부터

        // 해당 열에서 위에서부터 인형 찾기
        for (let row = 0; row < board.length; row++) {
            const doll = board[row][col];

            if (doll !== 0) {
                board[row][col] = 0; // 칸 비우기

                // 바구니 맨 위와 같으면 pop
                if (basket.length > 0 && basket[basket.length - 1] === doll) {
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