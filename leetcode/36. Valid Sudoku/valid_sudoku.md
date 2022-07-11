## 문제

9 x 9 스도쿠 보드가 유효한지 확인합니다. 채워진 셀만 다음 규칙에 따라 검증해야 합니다.

각 행은 반복 없이 숫자 1-9를 포함해야 합니다.<br/>
각 열은 반복 없이 숫자 1-9를 포함해야 합니다.<br/>
그리드의 9개의 3 x 3 하위 상자 각각은 반복 없이 숫자 1-9를 포함해야 합니다.<br/>

스도쿠 보드(부분적으로 채워진)는 유효할 수 있지만 반드시 해결할 수 있는 것은 아닙니다.<br/>
채워진 셀만 언급된 규칙에 따라 유효성을 검사하면 됩니다.<br/>

### Example 1
![Screen Shot 2022-07-11 at 10 20 20 PM](https://user-images.githubusercontent.com/88074487/178273586-8a857dac-9d03-4018-9e54-a707317e3ad4.png)<br/>
#### (1)
```
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```
#### (2)
```
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```
### Constraints:

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit 1-9 or '.'.

### Solutions
- 접근방법
(1) board[i] 배열 중복체크<br/>
(2) board[i][j] 배열 중복체크<br/>
(3) combo = board[i+2][j+2] 배열 중복체크<br/>

```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let i=1;
    let j=1;
    let ver=[];
    let hor=[];
    let combo=board[i+2][j+2];
    
    while(i<10){
        ver = board[i]
            const v_set = new Set(ver)
            return !!ver.length !== v_set.size
        hor = board[i][j]
        while(j<10){
            const h_set = new Set(hor)
            return !!hor.length !== h_set.size
            
        }
    }
};
```
