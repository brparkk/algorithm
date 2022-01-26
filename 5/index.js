function solution(str) {
  const arr = [];
  const upper = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i).toLowerCase()) {
      upper.push(str.charCodeAt(i));
    } else {
      arr.push(str.charCodeAt(i));
    }
  }

  arr.sort((a, b) => b - a);
  upper.sort((a, b) => b - a);

  let numarr = arr.concat(upper);

  const answer = [];
  for (let num of numarr) {
    answer.push(String.fromCharCode(num));
  }

  return answer.join("");
}
