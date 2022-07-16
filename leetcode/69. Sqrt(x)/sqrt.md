## 문제
음이 아닌 정수 x가 주어지면 x의 제곱근을 계산하고 반환합니다.<br/>
리턴 타입이 정수이기 때문에 소수점 이하 자릿수는 잘리고 결과의 정수 부분만 리턴됩니다.<br/>
참고: pow(x, 0.5) 또는 x ** 0.5와 같은 내장 지수 함수 또는 연산자를 사용할 수 없습니다.<br/>

### Example 1:
```
Input: x = 4
Output: 2
```
### Example 2
```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

### Constraints

0 <= x <= 2<sup>31</sup> - 1

### Solutions
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let output = Math.sqrt(x);
    
    if(Number.isInteger(output)){
        return output;
    }else{
        return Math.floor(output);
    }
};
```
