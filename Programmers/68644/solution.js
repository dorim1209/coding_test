function solution(numbers) {
  var answer = [];
  let sumArray = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let num1 = numbers[i];
      let num2 = numbers[j];

      let sum = num1 + num2;
      sumArray.push(sum);
    }
  }

  answer = sumArray
    .slice()
    .sort(function (a, b) {
      return a - b;
    })
    .reduce(function (a, b) {
      if (a.slice(-1)[0] !== b) a.push(b);
      return a;
    }, []);
  return answer;
}
solution(numbers);
