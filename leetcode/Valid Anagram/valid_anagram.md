## 문제

두 개의 문자열 s와 t가 주어지면 t가 s의 Anagram이면 true를 반환하고 그렇지 않으면 false를 반환합니다.
Anagram(철자바꾸기)은 일반적으로 모든 원래 문자를 정확히 한 번 사용하여 다른 단어 또는 구의 문자를 재배열하여 형성된 단어 또는 구입니다.

### Example 1
```
Input: s = "anagram", t = "nagaram"
Output: true
```

### Example 2
```
Input: s = "rat", t = "car"
Output: false
```

Constraints:

- 1 <= s.length, t.length <= 5 * 10<sup>4</sup>
- s and t consist of lowercase English letters.

### 풀이
(1) Fail
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const s_arr=s.split("")
    const t_arr=t.split("")

    if(s_arr.length !== t_arr.length){
      return false
    }

    const s_anagram = s_arr.every((s) => t_arr.includes(s));
    const t_anagram = t_arr.every((t) => s_arr.includes(t));
    
    if(s_anagram && t_anagram){
        return true
    }else {
        return false
    }
};
```
error case
```
const s = "aacc"
const t = "ccac"
```
