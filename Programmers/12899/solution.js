function solution(n) {
  var answer = "";
  let last, quot;
  let end = false;

  last = n % 3;
  quot = Math.floor(n / 3);
  let answerArr = [];

  while (!end) {
    if (quot < 4) {
      if (last != 0) {
        answerArr.push(last);
        if (quot != 0) {
          if (quot != 3) answerArr.push(quot);
          else answerArr.push(4);
        }
      } else {
        answerArr.push(4);
        if (quot - 1 != 0) answerArr.push(quot - 1);
      }
      end = true;
    } else {
      if (last != 0) {
        answerArr.push(last);
        last = quot % 3;
        quot = Math.floor(quot / 3);
      } else {
        answerArr.push(4);
        quot = quot - 1;
        if (quot < 4) {
          if (quot != 0) answerArr.push(quot);
          end = true;
        } else {
          last = quot % 3;
          quot = Math.floor(quot / 3);
        }
      }
    }
  }
  answerArr = answerArr.reverse();

  answer = answerArr.join("");
  return answer;
}
