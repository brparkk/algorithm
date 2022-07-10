## 문제

정수 배열 자릿수로 표현되는 큰 정수가 주어집니다. <br/>
여기서 각 자릿수[i]는 정수의 i번째 자릿수입니다. 숫자는 왼쪽에서 오른쪽 순서로 최상위에서 최하위 순으로 정렬됩니다. <br/>
큰 정수에는 선행 0이 포함되지 않습니다.<br/>
큰 정수를 1씩 증가시키고 결과 배열을 반환합니다.<br/>

### Example 1
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

### Example 2
```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

### Example 3
```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

### Constraints
- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
- digits does not contain any leading 0's.

### Solutions
(1) 첫번째 풀이
```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num =Number(digits.join(""))+1
    const output=[]

    for(let i=0; i<digits.length; i++){
        let n = Math.pow(10, -i) * num;
        let floorN = Math.floor(n%10);
        if(flooN === 0){
            output.push(floorN);
            output.push(1);
        }else {
            output.push(floorN);
        }
    }

    return output.reverse()
};
```
=> run time error
(2)
```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = Number(digits.join(""))+1;
    let output =[];
    output = num.toString().split("");

    return output.map(n => parseInt(n))
};
```
Number로 제대로 전환이 안된다. 이유를 모르겠음
<img width="458" alt="Screen Shot 2022-07-10 at 7 18 48 PM" src="https://user-images.githubusercontent.com/88074487/178140757-ae416477-cfb5-4246-8b34-7a062caaf5dd.png">

