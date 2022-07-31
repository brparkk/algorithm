## Hamming Dance
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.

### Example 1:
```
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
```

### Example 2:
```
Input: x = 3, y = 1
Output: 1
```

### Constraints:

0 <= x, y <= 2<sup>31</sup> - 1

### Solutions
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let bx = x.toString(2);
    let by = y.toString(2);
    let res = 0;
    let sub = bx.length - by.length
    
    for(let i = 1; i<=Math.abs(sub); i++){
        if(sub>0){
          by = '0' + by
        }else{
          bx = '0' + bx
        }
    }
    
    for(let i=bx.length-1; i>=0; i--){
        if(bx[i] !== by[i]){
          ++res;
        }
    }
    return res;
};
```
