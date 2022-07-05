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
