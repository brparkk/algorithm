## Question
You are given an array of words where each word consists of lowercase English letters.
wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.
Return the length of the longest possible word chain with words chosen from the given list of words.

## Example 1:

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].

## Example 2:

Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5
Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].

## Example 3:

Input: words = ["abcd","dbqca"]
Output: 1
Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

 

## Constraints:

    `1 <= words.length <= 1000` <br/>
    `1 <= words[i].length <= 16` <br/>
    `words[i]` only consists of lowercase English letters.
    
## Solution
(1) First Time

```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let output = [];

    for (let word of words){
      output.push(word.length);
    }

    return output.filter((el, idx) => output.indexOf(el) === idx).length;
};
```
이랬더니, 여기서 오류남
```
Input ["abcd","dbqca"]
Output 2
Expected 1
```
=> 원인 : ["abcd","dbqca"]는 문자 순서가 변경되었기 때문에 유효한 단어 체인이 아닙니다.
=> 그래서 아마도 push를 하기 전에 유효성 체크를 할 필요성을 느낌.
=> 어떤 유효성 체크? : string이 알파벳순(=내림차순(?))으로 되어있는지 확인하자

..엇 문제를 완전히 잘 못 이해했다.
접근방식이 잘못된것 같다.
words 배열에서 word2의 순서를 변경하지 않고, 문자열의 요소로 word1을 만들 수 있는지, word3과 word2를 비교, 비교, 비교... 이런식으로..

(2)
이 문제는 DP 개념을 활용한 문제이다.
여기서 DP란 Dynamic Programming (동적계획법)으로, 하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용하는 개념을 뜻한다.

```javascript
var longestStrChain = function(words) {
 
};
```
