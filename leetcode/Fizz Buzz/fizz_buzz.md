## 문제

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5. <br/>
answer[i] == "Fizz" if i is divisible by 3.<br/>
answer[i] == "Buzz" if i is divisible by 5.<br/>
answer[i] == i (as a string) if none of the above conditions are true.<br/>

### Example 1
```
Input: n = 3
Output: ["1","2","Fizz"]
```

### Example 2
```
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

### Example 3
```
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```
Constraints:

- 1 <= n <= 10<sup>4</sup>

### 풀이
(1)
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let count = [];

    for(let i=1; i<=n; i++){
      if(i%3 === 0 && i%5 !==0){
        count.push("Fizz")
      }else if(i%5 === 0 && i%3 !==0){
        count.push("Buzz")
      }else if(i%3 ===0 && i%5===0){
        count.push("FizzBuzz")
      }else{
        count.push(i.toString())
      }
    }
    
    return count
};
```
<img width="1172" alt="Screen Shot 2022-07-03 at 7 17 25 PM" src="https://user-images.githubusercontent.com/88074487/177035249-1f3cad3c-4152-46f1-800f-8c898b0120fc.png">
(2)

```javascript
e
```
