/**
 * ### 문제 01. 괄호 짝 맞추기
 * 소괄호는 짝을 맞춘 열린 괄호 '('와 닫힌 괄호 ')'로 구성한다.
 * 문제에서는 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열을 준다.
 * 이 때 소괄호가 정상으로 열고 닫혔는지 판별하는 solution를 구현하세요.
 * 소괄호가 정상적으로 열고 닫혔다면 true, 그렇지 않다면 false를 반환하면 된다.
 *
 * # 제약 조건
 *   - 열린 괄호는 자신과 가장 가까운 닫힌 괄호를 만나면 상쇄된다.
 *   - 상쇄 조건은 열린 괄호가 먼저 와야 하고, 열린 괄호와 닫힌 괄호 사이에 아무것도 없어야 한다.
 *   - 더 상쇄할 괄호가 없을 때까지 상쇄를 반복한다.
 *
 * 예) s = (())(), 반환값 = True
 *     s = ((())(), 반환값 = False
 */

//🖍️ 여기서 포인트 - '가장 가까운' , '최근' 이라는 키워드 -> 스택

function solution(s) {
  // 1. 열린괄호가 나오면 푸시
  // 2. 닫힌 괄호가 나오면 팝, 한 쌍을 모두 꺼낸다.
  // 3. 1~2를 마지막 까지 반복해 스택에 열린 괄호가 남아있다면, 짝이 맞지 않은것이고 (FALSE), 남아있지 않다면 짝이 맞는 것(TRUE)

  const parentheses = s.split("");
  const stack = [];

  for (par of parentheses) {
    console.log(par, "par<<");
    if (par === "(") {
      stack.push(par);
    }

    if (par === ")") {
      stack.length === 0 ? false : stack.pop();
    }
  }

  return stack.length === 0;
}

// console.log(solution("((())()"));

/**
 * ### 문제 02. 10진수를 2진수로 변환하기
 * 10진수를 입력받아, 2진수로 반환하는 soluton 함수를 구현하세요.
 *
 * # 제약 조건
 *   - decimal은 1이상 10억 미만의 자연수
 * 예)
 */

function solution(decimals) {
  const binary = [];

  while (decimals > 0) {
    binary.push(decimals % 2);
    decimals = Math.floor(decimals / 2);
  }

  return binary.reverse().join("");
}

console.log(solution(27));
