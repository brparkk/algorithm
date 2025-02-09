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
            if(arr[j+1] < arr[j]){
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
    return newArr.sort((a, b) => b - a)
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

function solution(numbers){
    let newArr = [];
    for(let i = 0; i< numbers.length; i++){
        for(let j =i+1; j<numbers.length; j++){
            newArr.push(numbers[i] + numbers[j]);    
        }
    }

    return [...new Set(newArr)].sort((a,b) => a - b);
}

console.log(solution([2,1,3,4,1])) // [2,3,4,5,6,7]
