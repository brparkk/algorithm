## 문제

정렬된 연결된 목록의 맨 앞에 각 요소가 한 번만 나타나도록 모든 중복 항목을 삭제합니다. 정렬된 연결된 목록도 반환합니다.

### Example1
<img width="377" alt="Screen Shot 2022-07-14 at 11 18 52 PM" src="https://user-images.githubusercontent.com/88074487/179004371-49447339-f306-4772-9fa6-eb01621b610e.png">
```
Input: head = [1,1,2]
Output: [1,2]
```

### Example2
<img width="545" alt="Screen Shot 2022-07-14 at 11 20 09 PM" src="https://user-images.githubusercontent.com/88074487/179004659-041a8c0d-8236-40cf-b080-bd3c7e06488d.png">
```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```
 
### Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
