
## 문제
이진 트리의 루트가 지정된 경우 노드 값의 순서에 따라 를 반환합니다.<br/>
(이진트리 중위 순회)<br/>
<br/>

✔ 트리의 모든 노드들을 방문하는 과정을 트리 순회(TreeTraversal)라고 한다.<br/>
- *전위 순회 (Preorder)*<br/>
  깊이 우선 순회(DFT, Depth-First Traversal)<br/>
  (1) 루트 노드를 방문한다. <br/>
  (2) 왼쪽 서브 트리를 먼저 순회한다. <br/>
  (3) 오른쪼고 서브 트리를 순회한다. <br/>
  <img width="552" alt="Screen Shot 2022-07-17 at 4 25 25 PM" src="https://user-images.githubusercontent.com/88074487/179388387-a3c8c49a-f6b2-42e8-b7cc-20adb67888f7.png"><br/>
  * 순서 : A→B→D→E→C→F→G<br/>
  <br/>

- *중위 순회 (Inorder)*<br/>
  왼쪽 오른쪽 대칭 순서로 순회, 대칭순회라고도 불림<br/>
  이진 탐색트리(BST)에서 오름차순 또는 내림차순으로 값을 가져올 때 사용<br/>
  (1) 왼쪽 서브 트리를 먼저 순회한다. <br/>
  (2) 루트 노드를 방문한다. <br/>
  (3) 오른쪽 서브 트리를 순회한다. <br/>
  <img width="529" alt="Screen Shot 2022-07-17 at 4 27 31 PM" src="https://user-images.githubusercontent.com/88074487/179388438-e5075d3b-c325-4f3e-82a0-ec074a18cc0e.png"><br/>
  * 순서 : D→B→E→A→F→C→G<br/>
  <br/>
  
- *후위 순회 (Postorder)*<br/>
  트리를 삭제하는데 주로 사용 <br/>
  (부모를 삭제할려면 자식 먼저 삭제해야 되기 때문이다.)
  (1) 왼쪽 서브트리를 후위 순회한다. <br/>
  (2) 오른쪽 서브트리를 순회한다. <br/>
  (3) 루트 노드를 방문한다. <br/>
  <img width="603" alt="Screen Shot 2022-07-17 at 4 30 26 PM" src="https://user-images.githubusercontent.com/88074487/179388537-75282eaa-c5a0-47f1-a6f1-5cb4076a1029.png"><br/>
  * 순서 : D→E→B→F→G→C→A<br/>
  <br/>

[참고 글 : https://yoongrammer.tistory.com/70]

### Example 1
<img width="182" alt="Screen Shot 2022-07-17 at 4 32 02 PM" src="https://user-images.githubusercontent.com/88074487/179388591-3d92dfc1-dcb1-4abb-a55f-69c4fd289f7c.png">
<br/>


```
Input: root = [1,null,2,3]
Output: [1,3,2]
```

### Example 2:
```
Input: root = []
Output: []
```

### Example 3:
```
Input: root = [1]
Output: [1]
```

### Constraints:

- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

### Solutions
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let tourist = root; //root를 참조하는 거지 복사한게 아님.
    let solution=[];
    
    while(tourist !== null){//투어리스트가 길을 잃기 전까지 계속함
        let guide = tourist.left; //가이드는 왼쪽 서브 루트로 이동을 안내함
        
        if(tourist.left !== null){
            while(guide.right !== null && guide.right !== tourist){
                //가이드의 오른쪽이 없거나 가이드의 오른쪽이 투어리스트와 같지 않을 때
                guide = guide.right;
            }
            if(guide.right === null){
                //오른쪽으로 더 이상 갈 수 없을 때 브릿지 생성
                guide.right = tourist;
                tourist = tourist.left;
            }else {
                guide.right = null;
                solution.push(tourist.val); //브릿지 파괴
                tourist = tourist.right;
            }
        }else {
            solution.push(tourist.val);
            tourist = tourist.right;
        }   
    }
    return solution;
};
```
