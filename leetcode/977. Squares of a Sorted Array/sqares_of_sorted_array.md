## 문제

정수 배열 번호가 감소하지 않는 순서로 정렬된 경우, 감소하지 않는 순서로 정렬된 각 숫자의 제곱 배열을 반환합니다.

### Example 1
```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

### Example 2
```
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

Constraints
- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- nums is sorted in non-decreasing order.

### Solution
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(num => Math.pow(num, 2)).sort((a, b) => a-b)
};
```
