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
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //Stack - push, pop, peek, count
//     class Stack {
//       constructor() {
//         this._arr = [];
//       }
//       push(item) {
//         this._arr.push(item);
//       }
//       pop() {
//         return this._arr.pop();
//       }
//       peek() {
//         return this._arr[this._arr.length - 1];
//       }
//     }
//     let stack = new Stack();

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

```python

```
