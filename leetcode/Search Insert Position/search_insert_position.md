## 문제

고유한 정수의 정렬된 배열과 target value가 주어진다. 
target이 배열안에 있을 경우, 그 인덱스를 반환하고, 그렇지 않을 경우 인덱스를 순서대로 정렬했을 때 들어가게 될 위치를 반환한다.
단, 런타임 복잡도가 O(log n)인 알고리즘을 작성해야 합니다.

### Example 1
```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

### Example 2
```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

### Example 3
```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

Constraints
- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- nums contains distinct values sorted in ascending order.
- -10<sup>4</sup> <= target <= 10<sup>4</sup>

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if(nums.indexOf(target) !== -1){
        return nums.indexOf(target)
    }else{
        if(nums.length ===1){
            return target>nums[0] ? 1:0
        }
        
        for(let i=1; i<nums.length; i++){
            let cur = nums[i];
            let left = i-1;
            
            if(target>nums[left] && target < cur){
                    return nums.indexOf(cur)
            }else if(target>nums[nums.length-1]){
                return nums.length
            }else if(target<=nums[left]){
                return 0
            }
        }
    }
    
    
};
```

### Note
✅ 삽입정렬(Insertioni Sort)
- 정의 : 왼쪽에서 오른쪽으로 가면서 각 요소들을 왼쪽과ㅗ 비교해서 알맞은 자리에 "삽입"한다.
- 선택정렬은 모든 요소들을 스캔하는 반면, 삽입정렬은 필요한 요소들만 스캔한다. 
- 그럼에도 불구하고 시간복잡도는 O(n^2)이다.
- 그러나 평균적으로 최악의 경우에 이차 시간복잡도이고, best case인 경우 일차 시간복잡도를 가진다는 이점이 있다.
<img width="655" alt="Screen Shot 2022-07-10 at 8 13 27 PM" src="https://user-images.githubusercontent.com/88074487/178142519-bdf8a8b8-7a64-4b9b-9be4-b049760f9592.png">
- 장점 : 메모리 절약
- stable한 정렬 : 중복 데이터는 위치를 교환하지 않는다.
