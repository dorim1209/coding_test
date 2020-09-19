var dartResult = "1D2S0T";

function solution(dartResult) {
  var answer = 0;
  let scoreArr = [];
  let newDartResult = [];
  for (let i = 0; i < dartResult.length; i++) {
    let one = dartResult[i];
    if (one == 1) {
      let next = dartResult[i + 1];
      if (next == 0) {
        newDartResult.push("10");
        i++;
      } else {
        newDartResult.push(one);
      }
    } else {
      newDartResult.push(one);
    }
  }
  for (let i = 1; i < newDartResult.length; i++) {
    let one = newDartResult[i];
    let before = newDartResult[i - 1];

    let score;
    if (one == "S") {
      score = before * 1;
      scoreArr.push(score);
    } else if (one == "D") {
      score = before * before;
      scoreArr.push(score);
    } else if (one == "T") {
      score = before * before * before;
      scoreArr.push(score);
    } else if (one == "*" || one == "#") {
      scoreArr.push(one);
    }
  }
  for (let i = 1; i < scoreArr.length; i++) {
    let arr1 = scoreArr[i];
    let before1;
    let before2;
    if (arr1 == "*") {
      before1 = scoreArr[i - 1];
      scoreArr[i - 1] = before1 * 2;
      if (i > 1 && scoreArr[i - 2] != "#" && scoreArr[i - 2] != "*") {
        before2 = scoreArr[i - 2];
        scoreArr[i - 2] = before2 * 2;
      } else if (i > 2 && scoreArr[i - 2] == "#") {
        before2 = scoreArr[i - 3];
        scoreArr[i - 3] = before2 * 2;
      } else if (i > 2 && scoreArr[i - 2] == "*") {
        before2 = scoreArr[i - 3];
        scoreArr[i - 3] = before2 * 2;
      }
    }
    if (arr1 == "#") {
      before1 = scoreArr[i - 1];
      scoreArr[i - 1] = before1 * -1;
    }
  }
  for (let i = 0; i < scoreArr.length; i++) {
    if (scoreArr[i] != "*" && scoreArr[i] != "#") {
      answer = answer + scoreArr[i];
    }
  }
  return answer;
}
solution(dartResult);
