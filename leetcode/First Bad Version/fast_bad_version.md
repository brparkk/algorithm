## 문제

n개의 버전 [1, 2, ..., n]이 있고 첫 번째 잘못된 버전을 찾고자 한다고 가정합니다.
버전이 나쁜지 여부를 반환하는 API bool isBadVersion(version)이 제공됩니다. 첫 번째 잘못된 버전을 찾는 기능을 구현합니다. API에 대한 호출 수를 최소화해야 합니다.

- Example 1:
```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

- Example 2:
```
IInput: n = 1, bad = 1
Output: 1
```

Constraints:
1 <= bad <= n <= 2<sup>31</sup> - 1

### 나의 풀이

- 시나리오
1부터 n-1까지 중에서 랜덤수 하나를 뽑아서
API 호출함수에 넣었는데,,,
  1) false일 경우
  랜덤수 +1 계속해서 true가 나오는 첫번째 값을 반환
  2) true일 경우


```javascript

```

