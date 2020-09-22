function solution(strings, n) {
  var answer = [];
  var nWords = [];
  strings = strings.sort();
  for (let i = 0; i < strings.length; i++) {
    let nWord = strings[i][n];
    nWords.push(nWord);
  }
  nWords = Array.from(new Set(nWords));
  nWords = nWords.sort();

  for (let i = 0; i < nWords.length; i++) {
    let nWord = nWords[i];
    for (let j = 0; j < strings.length; j++) {
      let nString = strings[j][n];
      let string = strings[j];

      if (nWord == nString) answer.push(string);
    }
  }

  return answer;
}
solution(strings, n);
