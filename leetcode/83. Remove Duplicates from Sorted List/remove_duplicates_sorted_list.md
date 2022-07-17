## 문제

정렬된 linked list의 맨 앞에 각 요소가 한 번만 나타나도록 모든 중복 항목을 삭제합니다. 정렬된 연결된 목록도 반환합니다.

### Example1
<img width="377" alt="Screen Shot 2022-07-14 at 11 18 52 PM" src="https://user-images.githubusercontent.com/88074487/179004371-49447339-f306-4772-9fa6-eb01621b610e.png"><br/>

```
Input: head = [1,1,2]
Output: [1,2]
```

### Example2
<img width="545" alt="Screen Shot 2022-07-14 at 11 20 09 PM" src="https://user-images.githubusercontent.com/88074487/179004659-041a8c0d-8236-40cf-b080-bd3c7e06488d.png"><br/>

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```
 
### Constraints:

- The number of nodes in the list is in the range [0, 300].
- -100 <= Node.val <= 100
- The list is guaranteed to be sorted in ascending order.

✅ 이 문제는 사실 자바스크립트보다는 파이썬으로 푸는 것이 적절해 보인다.
파이썬 접근 방식 : https://velog.io/@yeseolee/python-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B8Linked-List-feat.LeetCode
<br/>

자바스크립트로 풀 때의 문제점은 주어지는 인자값인 head가 단순 배열이 아니라 listnode 형태여서 자바스크립트 메소드를 사용할 수 없다.
head의 자리가 고유한 자리가 아니기 때문에..먼저 고유한 자리로 만들어서 새 배열을 만들어주는 것이 좋겠다.
```javascript

```



