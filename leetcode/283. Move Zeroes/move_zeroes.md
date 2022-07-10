
## 문제
정수 배열 nums가 주어지면 0이 아닌 요소의 상대적 순서를 유지하면서 모든 0을 끝으로 이동합니다.</br>
*배열의 복사본을 만들지 않고* 제자리에서 이 작업을 수행해야 합니다.

### Example 1
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### Example 2
```
Input: nums = [0]
Output: [0]
```

### Constraints
- 1 <= nums.length <= 10<sup>4</sup>
- 2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

### Solution
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function compareNums (a, b){
      if(a===0){
        return 1
      }else if(b===0){
        return -1
      }else{
        return 0
      }
    }
 return nums.sort(compareNums)
};
```
