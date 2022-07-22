## 문제

두 개의 문자열 needle과 haystack이 주어지면 haystack에서 needle이 처음 나타나는 인덱스를 반환하거나
needle이 haystack의 일부가 아닌 경우 -1을 반환합니다.

✔ needle이 문자열일 때 무엇을 반환해야 하는지?<br/>
✔ needle이 빈 문자열일 때 0을 반환한다. (c의 strStr(), java의 indexOf()와 일치함)<br/>

### Exmaple1
```
Input: haystack = "hello", needle = "ll"
Output: 2
```

### Example2
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

### Constraints:

- 1 <= haystack.length, needle.length <= 104
- haystack and needle consist of only lowercase English characters.

### Solutions
✅ two pointer 문제
[투포인터 알고리즘]
- 말 그대로 포인터가 2개이다.
- 2개의 포인터를 지정하고 그 간격을 계속해서 좁혀나가면서 값을 도출해나가는 방식이다.
- https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Algorithm/%ED%88%AC%ED%8F%AC%EC%9D%B8%ED%84%B0%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.md

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len = haystack.length;    
    let s = 0;
    let e = len - s - 1;
    let res = 0;
    
    while(s<=e){  
        if(needle.indexOf(haystack[s]) !== -1 || needle.indexOf(haystack[e]) !== -1){
            res ++;
        }
        needle.slice(s+1, e);
        s++;
        
        if(needle.length === 0 && res === 0) return -1;
    }

    return res 
        
};
```
```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    let resIdx = -1;
    
    for(let i=0; i<haystack.length; i++){
        if(haystack[i] === needle[0]){
            let tmp = haystack.substring(i, i+needle.length);
            if(tmp === needle) return i;
        }
    }
    return -1;
};
```
```python

```
