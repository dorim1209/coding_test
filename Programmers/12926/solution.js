var s = "AB ";
var n = 1;
function solution(s, n) {
  var answer = "";
  var answerArr = [];
  for (let i = 0; i < s.length; i++) {
    let ascii = s[i].charCodeAt();
    let newAscii = ascii + n;
    if (ascii >= 65 && ascii <= 90 && newAscii > 90) {
      // 대문자
      newAscii = newAscii - 26;
    }
    if (ascii >= 97 && ascii <= 122 && newAscii > 122) {
      // 소문자
      newAscii = newAscii - 26;
    }
    if (ascii == 32) {
      // 공백
      newAscii = 32;
    }
    answerArr.push(String.fromCharCode(newAscii));
  }
  answer = answerArr.join("");
  return answer;
}
solution(s, n);
