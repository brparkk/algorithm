## 문제

정수 배열 nums가 주어지면 중복되는 요소가 있을 경우 true를 반환하고, 모든 요소가 고유하면 false를 반환합니다.

### Example 1:
```
Input: nums = [1,2,3,1]
Output: true
```

### Example 2:
```
Input: nums = [1,2,3,4]
Output: false
```

### Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Constraints:

1 <= nums.length <= 10<sup>5</sup>
-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

### 풀이

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    arr = nums.filter((num, idx) => nums.indexOf(num) !== idx);
    if(arr.length > 0){
      return true
    }else{
      return false
    }
};
```
![Screen Shot 2022-07-02 at 1 44 11 PM](https://user-images.githubusercontent.com/88074487/176986838-fb50775e-f1ff-48f5-8adf-40b6d555f9af.png)

메모리 줄이기 성공
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
const duplicate = (currValue, index, arr) => index !== arr.indexOf(currValue) && arr.includes(currValue);
return nums.some(duplicate);

};
```
![Screen Shot 2022-07-02 at 2 54 50 PM](https://user-images.githubusercontent.com/88074487/176988506-164c4b4d-0902-4f75-97a5-8fbbdafad3f0.png)

#### 사용한 개념
> Array.prototype.some() : [Array.prototype.some()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)<br/>
> Array.prototype.includes() : [Array.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)<br/>
> Array.prototype.indexOf() : [Array.prototype.indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)<br/>
