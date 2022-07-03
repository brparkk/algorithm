## 문제

비어 있지 않은 정수 배열이 주어지면 모든 요소는 하나를 제외하고 두 번 나타납니다. 그 하나를 찾으십시오.
선형 런타임 복잡성이 있는 솔루션을 구현하고 일정한 추가 공간만 사용해야 합니다.

### Example 1
```
Input: nums = [2,2,1]
Output: 1
```

### Example 2
```
Input: nums = [4,1,2,1,2]
Output: 4
```

### Example 3
```
Input: nums = [1]
Output: 1
```

Constraints:

- 1 <= nums.length <= 3 * 10<sup>4</sup>
- -3 * 10<sup>4</sup> <= nums[i] <= 3 * 10<sup>4</sup>

### 풀이
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length===1) {
        return nums[0]
    }

    let result = nums.reduce((acc, num) => acc ^ num);
    return result
};
```
비트연산자 중 `xor` 활용한다.
`xor`연산은 서로 다른 비트에서 1, 같은 비트끼리 0이다.
single number를 제외한 모든 수는 2개씩 존재하기 때문에, 중복될 경우 `xor` 값은 0이 된다.
따라서 `0 ^ single number = single number`로 구할 수 있게 된다.

<img width="137" alt="Screen Shot 2022-07-03 at 5 55 52 PM" src="https://user-images.githubusercontent.com/88074487/177032597-b0f73377-cac8-4825-9e2d-e4556c4ed1fd.png">
