## 문제

문자열 배열 중에서 가장 긴 공통 접두사 문자열을 찾는 함수를 작성하십시오.
공통 접두사가 없으면 빈 문자열 ""을 반환합니다.

### Example 1.
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

### Example 2.
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### Constraints
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.


### Solutions
(1)오답
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
const makeStringToArray = (s)=>{
    if(!s) return false;
    return s.split("")
}
let output;

var longestCommonPrefix = function(strs) {
	strs.map((str, i)=>{
        let curArr = makeStringToArray(str);
        let nextArr = makeStringToArray(strs[i+1]);

        if(nextArr){
            output = curArr.filter(s => nextArr.includes(s));
        }});
    return output.join("");
};
```
(2)다시 푼 풀이
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]; //ex. "flower"
    
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length -1)
        }
    }
    return prefix;
};
```
