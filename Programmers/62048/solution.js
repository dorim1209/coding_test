function solution(w, h) {
  var answer = 0;

  for (let x = 1; x <= w; x++) {
    let y = -(h / w) * x + h;
    y = Math.floor(y);

    answer = answer + y;
  }
  answer = answer * 2;

  return answer;
}
