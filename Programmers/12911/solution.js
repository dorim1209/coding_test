function solution(n) {
  var answer = 0;

  let oriB = binary(n);

  let com = n + 1;
  let comB = binary(com);

  while (oriB != comB) {
    com = com + 1;
    comB = binary(com);
  }

  answer = com;
  return answer;
}

function binary(i) {
  let array = [];
  let many = 0;
  let q, r;

  r = i % 2;
  q = parseInt(i / 2);

  array.push(r);

  while (q != 1 && q != 0) {
    i = q;
    r = i % 2;
    q = parseInt(i / 2);
    array.push(r);
  }
  if (q != 0) array.push(q);

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) many++;
  }
  return many;
}

solution(n);
