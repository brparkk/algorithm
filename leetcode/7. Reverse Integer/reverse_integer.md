## 문제

부호 있는 32비트 정수 x가 주어지면 숫자가 반전된 x를 반환합니다. 
x를 반전하면 값이 부호 있는 32비트 정수 범위 [-2^31, 2^31 - 1]를 벗어나면 0을 반환합니다.
환경에서 64비트 정수(부호 있는 또는 부호 없는)를 저장할 수 없다고 가정합니다.

### Example 1
```
Input: x = 123
Output: 321
```

### Example 2
```
Input: x = -123
Output: -321
```

### Example 3
```
Input: x = 120
Output: 21
```

### Solutions
```javascript
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const str=x.toString();
    const digit = str.length;
    let output;

    if(str.split("").includes("-")){
       output = Math.floor("-" + str.split("").splice(1).reverse().join(""));
    }else if(str.split("")[digit-1] === 0){
        output = Math.floor(str.split("").reverse().splice(1).join(""));
    }else{
        output = Math.floor(str.split("").reverse().join(""));
    }
    
    return Math.abs(output) > Math.pow(2, 31) ? 0 : output;

};
```
✅ 다른사람의 풀이
```javascript
const reverse = n => (n < 0 ? -1 : 1) * +("" + Math.abs(n)).split``.reverse().join``;
```
```javascript
const reverse = function(x){
    let rev=0;
    let last_digit=0;
    
    while(x!==0){
        last_digit = x%10;
        x = parseInt(x/10);
        rev = rev * 10 + last_digit;
        if(Math.abs(rev) > Math.pow(2, 31)) return 0;
    }
    return rev
}
```
