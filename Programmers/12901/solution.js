var a = 5;
var b = 24;

function solution(a, b) {
  var answer = "";
  var day = 0;
  var dayOfWeek;
  if (a >= 1) {
    day = b;
  }
  if (a >= 2) {
    day = day + 31;
  }
  if (a >= 3) {
    day = day + 29;
  }
  if (a >= 4) {
    day = day + 31;
  }
  if (a >= 5) {
    day = day + 30;
  }
  if (a >= 6) {
    day = day + 31;
  }
  if (a >= 7) {
    day = day + 30;
  }
  if (a >= 8) {
    day = day + 31;
  }
  if (a >= 9) {
    day = day + 31;
  }
  if (a >= 10) {
    day = day + 30;
  }
  if (a >= 11) {
    day = day + 31;
  }
  if (a == 12) {
    day = day + 30;
  }

  console.log(day);
  dayOfWeek = day % 7;

  if (dayOfWeek == 0) answer = "THU";
  if (dayOfWeek == 1) answer = "FRI";
  if (dayOfWeek == 2) answer = "SAT";
  if (dayOfWeek == 3) answer = "SUN";
  if (dayOfWeek == 4) answer = "MON";
  if (dayOfWeek == 5) answer = "TUE";
  if (dayOfWeek == 6) answer = "WED";

  return answer;
}
solution(a, b);
