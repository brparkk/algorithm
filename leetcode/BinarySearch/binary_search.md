## 문제

오름차순으로 정렬된 정수 배열 nums와 정수 대상이 있는 경우 대상을 nums로 검색하는 함수를 작성하십시오. 
대상이 존재하는 경우 해당 인덱스를 반환합니다. 그렇지 않으면 -1을 반환합니다.

### Example 1:
```
IInput: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

### Example 2:
```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```


### Constraints:
1 <= nums.length <= 10<sup>4</sup>
-10<sup>4</sup> < nums[i], target < 10<sup>4</sup>
All the integers in nums are unique.
nums is sorted in ascending order.

### 풀이
(1)Fail
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
(2)Success - 그런데 이중 for문이 맘에 들지 않다..
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output =[];
    for(let i=0; i<nums.length; i++){
      for(let k=i+1; k<nums.length; k++){
        if(nums[i] + nums[k] === target){
         output = [i, k];
        }
      }
    }
    return output;
};
```
