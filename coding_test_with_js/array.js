/**
 * ### 문제 01. 배열 정렬하기
 * 정숩 배열을 정렬해서 반환하는 solution 함수를 구현하세요.
 * # 제약 조건
 *   - 정수 배열의 길이는 2이상 10^5 이하
 *   - 정수 배열의 각 데이터 값은 -100,000 이상 100,000 이하
 *
 */

// 🖍️ 여기서 포인트 : 정수 배열의 길이가 100,000 이하 이다.
// 즉, 제한시간이 3초 일경우 시간복잡도 O(N^2)은 사용할 수 없다.
function solution(arr) {
  return arr.sort((a, b) => a - b);
}

// 💡 만약 버블 정렬로 한다면?
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
/**
 * ### 문제 02. 배열 제어하기
 * 배열의 중복값을 제거하고, 배열 데이터를 내림차순으로 정렬해서 반한하는 solution 함수를 구현하세요.
 * # 제약 조건
 *   - 정수 배열의 길이는 2이상 1000 이하
 *   - 정수 배열의 각 데이터 값은 -100,000 이상 100,000 이하
 *
 */

function solution(arr) {
  const newArr = [...new Set(arr)];
  return newArr.sort((a, b) => b - a);
}

/**
 * ### 문제 03. 두 개 뽑아서 더하기
 * 정수 배열 numbers가 주어진다.
 * numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 solution 함수를 구현하세요.
 *
 * # 제약 조건
 *   - numbers의 길이는 2이상 100 이하
 *   - numbers의 모든 수 는 0 이상 100이하
 *
 */

function solution(numbers) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      newArr.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(newArr)].sort((a, b) => a - b);
}

/**
 * ### 문제 04. 모의고사
 * 수포자는 수학을 포기한 사람을 줄인 표현입니다. 수포자 삼인방은 모의고사에서 수학 문제를
 * 전부 찍으려합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 *
 * 1번 수포자 : 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자 : 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, ...
 * 3번 수포자 : 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ....
 *
 * 1번 부터 마지막 문제까지 정답이 순서대로 저장된 배열 answers가 주어질 때 가장 많은 문제를 맞춘
 * 사람이 누구인지 배열에 담아 반환하도록 solution 함수를 구현하세요.
 *
 * # 제약 조건
 *   - 시험 문제는 최대 10,000문제이다.
 *   - 문제의 정답은 1, 2, 3, 4, 5 중의 하나이다.
 *   - 가장 높은 점수를 받은 사람이 여럿이라면 오름차순으로 정렬한다.
 */

const STUDENT_A = [1, 2, 3, 4, 5];
const STUDENT_B = STUDENT_A.flatMap((a) => (a !== 2 ? [2, a] : []));
const STUDENT_C = [3, 1, 2, 4, 5].flatMap((a) => [a, a]);
// 각 학생 별로 문제를 얼마나 맞췄는지를 구해야 함
function getAnswerCount(answers, student_solutions) {
  return answers.reduce((count, answer, index) => {
    // answer가 끝날때까지 반복해서 비교해야 함
    const 배수 = student_solutions.length;
    let 인덱스 = index;
    if (index >= 배수) {
      인덱스 = index % 배수;
    }
    if (answer === student_solutions[인덱스]) {
      count++;
    }

    return count;
  }, 0);
}

const getKeyByValue = (object, value) =>
  Object.entries(object).find(([_, v]) => v === value)?.[0];

function solution(answers) {
  const count_A = getAnswerCount(answers, STUDENT_A);
  const count_B = getAnswerCount(answers, STUDENT_B);
  const count_C = getAnswerCount(answers, STUDENT_C);

  // 고친 부분 (Object -> Array로 고침)
  const scores = [count_A, count_B, count_C];
  const maxScore = Math.max(...scores); // A, B, C 중에서 최고 점수를 받은 학생을 뽑음

  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      // 최고점과 비교해서 같은 경우 result에 push - 동점일 경우를 해결하기 위함
      result.push(i + 1);
    }
  }

  return result;
}

// 답안
function _solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === patterns[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highScore = [];
  for (const [i, score] of scores.entries()) {
    if (score === maxScore) {
      highScore.push(i + 1);
    }
  }

  return highScore;
}

/**
 * ### 문제 05. 행렬의 곱셈
 * 2차원 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution() 함수를 구현하세요.
 *
 * # 제약 조건
 *   - arr1, arr2 의 행과 열의 길이는 2이상 100 이하입니다.
 *   - arr1, arr2의 데이터는 -10이상 20이하인 자연수입니다.
 *   - 곱할 수 있는 배열만 주어집니다.
 */

function solutions(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const row2 = arr2.length;
  const col2 = arr2[0].length;

  const result = [];
  for (let i = 0; i < row1; i++) {
    result.push(new Array(col2).fill(0));
  }

  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

// console.log(
//   solutions(
//     [
//       [1, 4],
//       [3, 2],
//       [4, 1],
//     ],
//     [
//       [3, 3],
//       [3, 3],
//     ]
//   )
// );

/**
 * ### 문제 07. 방문 길이
 *
 * 게임 캐릭터를 4가지 명령어를 통해 움직이려 한다.
 * U : 위로 한칸
 * D : 아래로 한칸
 * R : 오른쪽으로 한칸
 * L : 왼쪽으로 한칸
 *
 * 캐릭터는 (0,0) 위치에서 시작한다.
 * 갈 수 있는 최대 지점은 (-5, 5), (-5, -5), (5, 5), (5, -5)
 * 매개변수 dirs로 주어질 떄 게임 캐릭터가 처음 걸어본 길의 길이를 구해 반하는 solution 함수를 구현하세요.
 * # 제약조건
 *  - 이미 거쳐간 길은 무시한다.
 *  - 좌표평면의 경계를 넘어가는 명령어도 무시한다.
 *  - dirs는 string형으로 주어지며 'U', 'D', 'R', 'I'이외 문자는 주어지지 않는다.
 *  - dirs의 길이는 500이하의 자연수
 *
 * ex. dirs = 'ULURRDLLJ', answer = 7
 */

/**
 * @param {string} dirs
 * U: y + 1
 * D: y -1
 * R: x -1
 * L: x + 1
 */

// 🖍️ 여기서 포인트 : Set을 사용하여 중복을 제거하고, Set의 size를 이용하여 길이를 구한다.

function solution(dirs) {
  const directions = dirs.split("");
  let x = 0;
  let y = 0;
  const visited = new Set();

  for (const direction of directions) {
    let nx = x;
    let ny = y;

    switch (direction) {
      case "U":
        ny += 1;
        break;
      case "D":
        ny -= 1;
        break;
      case "R":
        nx += 1;
        break;
      case "L":
        nx -= 1;
        break;
    }

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);
    console.log(visited, "visited");
    x = nx;
    y = ny;
  }

  return Math.floor(visited.size / 2);
}

console.log(solution("ULURRDLLJ"));
// console.log(solution("LULLLLLU"));
