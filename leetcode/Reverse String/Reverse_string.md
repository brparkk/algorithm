## 문제

한 단어의 문자열로 이루어진 배열을 역순으로 출력하여 다음 배열을 반환합니다.

### Example 1:
```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

### Example 2:
```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### Constraints:

1 <= s.length <= 10<sup>5</sup>

### 풀이
```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};
```

