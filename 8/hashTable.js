function hashStringToInt(s, tableSize) {
  //   return 5; //고정값. 해시 함수를 통해 배열안에 키 값이 계속해서 새롭게 저장되어야 함.
  //8. 문자열을 순환하고 각 문자열에 대해 문자 코드를 얻는다.
  let hash = 17; //9. 소수 선택 : 키가 저장된 위치(테이블)에서 spred out 될 것이므로 항목에 대해 임의의 소수를 지정한다.

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    //10.해시가 너무 커지는 것을 막기 위해 테이블 크기 만큼 수정한다.
    //10-1. 임의의 소수 두 개를 골라서 만든 매우 흔한 임의의 해시 함수이다.
    /*내가 선택한 해시 함수가 얼마나 잘 수행되는지, 숫자를 고르게 뿌리는지는 매우 중요하다. 
    왜냐하면 이는 더 나은 성능과 성능속도를 제공하기 때문이다.
    즉, 뿌려진 key가 테이블 안에 들어가므로 내가 고른 해시 함수는 성능을 좌지우지할만큼 중요하단 뜻!
    */
  }

  return hash; //10-2.이름과 같은 키 값을 실제 정수로 반환해야 테이블의 인덱스로 써먹을 수 있다.
}

class HashTable {
  table = new Array(100);

  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length);
    this.table[idx] = value;
  };
  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Rachel");
myTable.getItem("firstName");
myTable.setItem("lastName", "Park");
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
/*
작동 방식 : key를 전달할 수 있다.
해시테이블 만들기
1. 데이터 구조에 대한 클래스 생성
class HastTable {
    setItem = (key, value) => {
        value를 설정하거나 몇 가지 logic를 추가한다.

    };
    //key, value를 매개변수로 갖는다.

    getItem = (key) => {
        return ''
    }
    //key를 가져오고 값을 반환한다.
}
2. 그리고 아래에서 내가 만든 테이블이 해시 테이블과 같다고 선언하면, 실제로 이를 호출 할 수 있게 된다.
const myTable = new HashTable()

3. 테이블에 배열 항목을 저장할 것이다.
새로운 배열 만들기
class HastTable {
    table = new Array(100);

    4. key를 테이블에 저장하고 싶다
    그런데, table은 배열이므로 key 값에 인덱스, 즉 숫자만 들어갈 수 있다.
    setItem = (key, value) => {
        //table[5] = value;
        //4-1. 따라서 우리는 이 key를 숫자로 바꿔줘야 하므로 일반적으로 해시 함수라는 것을 생성한다.
        ↓
        //5.
        const idx = hasStringToInt(key)
        table[idx] = value;
    };

    getItem = (key) => {
        return '';
    }
}

5. function hashStringToInt(s){
    return 5
}
6. setItem 호출시 정의되지 않은 테이블이 표시된다.
this 바인딩을 해주어 해시테이블 내부에 있는 테이블을 참조한다.

7. 항목을 가져오기 위해서 getItem에서 this 바인딩을 한 table을 리턴한다.

*/
