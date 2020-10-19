var s = "()()";
function solution(s) {
  var answer = true;
  if (s.length % 2 != 0 || s[0] == ")" || s[s.length - 1] == "(") {
    answer = false;
  } else {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      if (sum < 0) {
        answer = false;
        break;
      }
      if (s[i] == "(") sum++;
      if (s[i] == ")") sum--;
    }
    if (sum != 0) answer = false;
  }
  return answer;
}
solution(s);
