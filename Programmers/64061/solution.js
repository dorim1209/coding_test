function solution(board, moves) {
  var answer = 0;

  var bucket = [];
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];

    for (let j = 0; j < board.length; j++) {
      if (board[j][move - 1] != 0) {
        let doll = board[j][move - 1];
        board[j][move - 1] = 0;
        let lastN = bucket.length;
        if (lastN != 0 && doll == bucket[lastN - 1]) {
          answer = answer + 2;
          bucket.pop();
        } else {
          bucket.push(doll);
        }

        break;
      }
    }
  }
  return answer;
}
solution(board, moves);
