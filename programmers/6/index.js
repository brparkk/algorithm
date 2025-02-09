//나의 풀이
function solution(numbers) {
  const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let result = 0;

  for (let num of all) {
    if (!numbers.includes(num)) result += num;
  }

  return result;
}

//다른 사람의 풀이(1)
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

//다른 사람의 풀이 (2)
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
