## 문제

정수 배열 nums와 정수 target이 주어지면 nums 배열의 두 요소를 합해서 target이 될 때, 각 두 요소의 인덱스를 담은 배열을 반환한다.
동일한 요소를 두 번 사용하지 않고, 유효한 하나의 ouput을 출력해야 하며, 순서는 무관하다.

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints:

2 <= nums.length <= 10<sup>4</sup>
-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
-10<sup>9</sup> <= target <= 10<sup>9</sup>

### 풀이
(1)
```javascript
const output= [];

nums.forEach((num, i, arr)=> {
  console.log(num)
  console.log(arr[i])

    if(num + arr[i] === target) {
      if(num === arr[i]) return;
      output.concat(nums.indexOf(num));
      output.concat(i);
 	 }
})
```
