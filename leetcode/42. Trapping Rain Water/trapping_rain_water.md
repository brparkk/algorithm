## Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Example 1:
![image](https://user-images.githubusercontent.com/88074487/182014101-e2e49783-c413-4f39-9286-b2d16e1ada07.png)
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

### Example 2:
```
Input: height = [4,2,0,3,2,5]
Output: 9
```

### Constraints:

- n == height.length
- 1 <= n <= 2 * 10<supb>4</sup>
- 0 <= height[i] <= 10<sup>5</sup>

### Solutions
❗️ run time error
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0; let j = 1;
    let blue = 0; let black = 0;
    while(i<height.length){
        if(height[i]<height[j]){
            blue += (j -i -1)*height[i] - black;
            i = j;
        }else{
            black += height[j];
        }
        j++;
    }
    return blue;
    
};
```
#### using two pointer
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let left = 0; 
    let right = height.length -1;
    
    let left_max = height[left]; 
    let right_max = height[right];
    
    let volume = 0;
    
    while(left<right){
        left_max = Math.max(left_max, height[left]);
        right_max = Math.max(right_max, height[right]);
        
        if(left_max <= right_max){
            volume += left_max - height[left];
            left += 1
        }else{
            volume += right_max - height[right];
            right -= 1
        }
        
    }
    return volume;
    
};
```
```python
class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        
        if not height:
            return 0
        
        volume = 0
        left, right = 0, len(height) - 1
        left_max, right_max = height[left], height[right]
        
        while(left<right){
            left_max, right_max = max(height[left], left_max),
                                  max(height[right], right_max)
            if left_max <= right_max:
                volume += left_max - height[left]
                left +=1
            else:
                volume += right_max - height[right]
                right -=1
        }
        return volume;
```

최대높이 까지 좌측에서는 하나씩 더해서 오고, 우측에서는 하나씩 뺴서 온다.
좌/우측의 최대 높이값 - 현재 높이값 만큼 물을 채울 수 있다.
