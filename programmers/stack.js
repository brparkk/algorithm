/**
 * ### 문제 08. 괄호 짝 맞추기
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
 * ### 문제 09. 10진수를 2진수로 변환하기
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

// console.log(solution(27));

/**
 * ### 문제10. 괄호 회전하기 ⭐️
 * 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
 * (), [], {} 는 모두 올바른 괄호 문자열입니다.
 *
 * 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다.
 * 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
 *
 * 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다.
 * 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
 *
 * 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
 * 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는
 * x의 개수를 return 하도록 solution 함수를 완성해주세요.
 *
 * # 제약 조건
 *   - s의 길이는 1 이상 1,000 이하입니다.
 */

function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      const c = s[(i + j) % n];

      if (c === "(" || c === "{" || c === "[") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}

// console.log(solution("[](){}"));

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
 * 문제 11. 짝지어 제거하기
 * 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
 * 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
 * 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
 * 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
 *
 * 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요.
 * 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.
 *
 * 예를 들어, 문자열 S = baabaa 라면
 *
 * b aa baa → bb aa → aa 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.
 * # 제약 조건
 *  - 문자열의 길이 : 1,000,000이하의 자연수
 *  - 문자열은 모두 소문자로 이루어져 있습니다.
 */

// 반만 맞음
function solution(s) {
  let arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (arr.length === 0) break;
    if (arr[i] === arr[i + 1]) {
      arr = arr.splice(i, 2);
    }
  }

  return arr.length < 1 ? 1 : 0;
}

// stack으로 푼 풀이
function _solution(s) {
  const stack = [];

  for (const c of s) {
    // stack에 가장 최근에 쌓은 항목과 현재 항목이 같다면 pop
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop(); // stack의 맨 위 문자 제거
    } else {
      stack.push(c); // stack에 현재 문자 추가
    }
  }

  return stack.length === 0 ? 1 : 0;
}

/**
 * 문제 12 주식 가격 ⭐️
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 * 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때,
 * 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
 *
 * # 제한 사항
 *  - prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
 *  - prices의 길이는 2 이상 100,000 이하입니다.
 *
 * 입출력 예
 * prices	            return
 * [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
 *
 * 입출력 예 설명
 * 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
 * 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
 * 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
 * 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
 * 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.
 */

//시간초과... :(
function solution(prices) {
  const n = prices.length;
  const answer = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (prices[i] <= prices[j]) {
        count += 1;
      }
    }
    answer.push(count);
  }

  return answer;
}

// console.log(solution([1, 2, 3, 2, 3]));

// stack 활용
function _solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 주식 가격이 떨어지는 순간
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}

/**
 * 게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
 * "죠르디"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.
 *
 * 게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며
 * 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 "5 x 5" 크기의 예시입니다).
 *
 * 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다.
 * 모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.
 * 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
 *
 * 집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.
 * 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.
 * 
 * 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

* [제한 사항]
- board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
- board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
- 0은 빈 칸을 나타냅니다.
- 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
- moves 배열의 크기는 1 이상 1,000 이하입니다.
- moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
 */

function solution(board, moves) {
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    const rowIdx = i - 1;
    const rows = board.map((b) => b[rowIdx]).filter((d) => d !== 0);
    console.log(rows, "rows");

    if (stack.length > 0 && stack[stack.length - 1] === rows[0]) {
      stack.pop();
      rows.shift();
    } else {
      stack.push(rows[0]);
    }
  }

  return stack.length;
}

const $board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const $moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution($board, $moves));
