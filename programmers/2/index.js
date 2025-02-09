function solution(array, commands) {
  const result = [];
  for (const elem of commands) {
    let newarr = array.slice(elem[0] - 1, elem[1]);

    newarr = newarr.sort((a, b) => a - b);
    result.push(newarr[elem[2] - 1]);
  }
  return result;
}

/* 
sort() : 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다. stable sort()가 아님
예시_ 숫자 정렬에서는 9가 80보다 앞에 오지만, 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에 온다.
*/

//ex2
function solution(array, commands) {
  return commands.map((v) => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}

//ex2
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
