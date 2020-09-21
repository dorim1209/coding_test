var n = 41;
function solution(n) {
  var answer = "";

  let last, quot;

  for (let i = 1; i < 30; i++) {
    let end = false;
    last = i % 3;
    quot = Math.floor(i / 3);
    let answerArr = [];

    while (!end) {
      if (quot < 4) {
        if (last != 0) {
          answerArr.push(last);
          answerArr.push(quot);
        } else {
          answerArr.push(3);
          answerArr.push(quot - 1);
        }
        end = true;
      } else {
        if (last != 0) {
          answerArr.push(last);
          last = quot % 3;
          quot = Math.floor(quot / 3);
        } else {
          answerArr.push(3);
          quot = quot - 1;
          if (quot < 4) {
            answerArr.push(quot);
            end = true;
          } else {
            last = quot % 3;
            quot = Math.floor(quot / 3);
          }
        }
      }
    }

    console.log(i, "=>", answerArr);
  }

  return answer;
}

solution(n);
