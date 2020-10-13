function solution(x) {
  var answer = true;
  var sum = 0;
  let q = parseInt(x/10)
  let r = x % 10

  sum = sum + r;
  while(q > 9){
    
    r = q % 10
    q = parseInt(q/10);
    sum = sum + r;
  }
  sum = sum + q;
  if (x % sum != 0) answer = false;
  return answer;
}
solution(x);
