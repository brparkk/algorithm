## 문제

문자열 s가 주어지면 첫 번째 반복되지 않는 문자를 찾아 인덱스를 반환합니다. 존재하지 않으면 -1을 반환합니다.


### Example 1:
```
Input: s = "leetcode"
Output: 0
```

### Example 2:
```
Input: s = "loveleetcode"
Output: 2
```

### Example 3:
```
Input: s = "aabb"
Output: -1
```

### Constraints:

1 <= s.length <= 10<sup>5</sup> <br/>
s consists of only lowercase English letters.

### 나의 풀이

```javascript
function noneOverlapIndex(str){
  const strArr = str.split("");  
  const overlap = str.split("").filter((s, i)=> s2.indexOf(s) !== i)
  let result = 0;
  let resArr = [];
  let sum = 0;
  
  for(let str of strArr){
    for(let s of overlap){
			if(str !== s){
			result=1
			}else {
			result=-1
			}
      resArr.push(result)
    }}
// firstIndex = (el) => el===0;
// return resArr.findIndex(firstIndex)
  console.log(resArr)
   resArr.map((res) =>{
     sum += res
   })
  return sum
}

noneOverlapIndex(s1)
```
