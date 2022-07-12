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
```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
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
