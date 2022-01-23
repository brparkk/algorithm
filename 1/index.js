const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

let filter_list = [];

let count_arr = [];
for (const id of id_list) {
  filter_list.push(report.filter((list) => list.includes(id)));
}
report;
filter_list;

//신고당한 횟수 찾기
//배열안의 각 배열요소를  split 했을 때 공백으로
// console.log(filter_list[0][0].split(' '));
//이렇게 했을 때 뒤에 쪽이 id_list[0]이랑 같으면, 신고당한 횟수 +1
//이중반복문이 필요하네?
for (let j = 0; j < filter_list.length; j++) {
  let count = 0;
  for (let i = 0; i < filter_list[j].length; i++) {
    let filter_arr = filter_list[j][i].split(" ");
    // console.log(filter_arr);
    // console.log(filter_arr[filter_arr.length-1])
    // console.log(`id_list[j]: ${id_list[j]}`)
    if (filter_arr[filter_arr.length - 1] == id_list[j]) {
      count = count + 1;
    } else {
      count;
    }
  }
  count_arr.push(count);
}
count_arr; //신고당한 횟수 배열
//그러면 이 배열 요소 중에 k보다 크거나 같은 애를 찾으면  그게 바로 정지된 아이디
// const frozen_id = id_list.map((id) =>  count_arr.filter((count, idx) => count >= k ? idx : null)
const frozen_arr = count_arr
  .map((count, idx) => (count >= k ? idx : null))
  .filter((id) => id !== null);
frozen_arr;

let frozen_id = [];
for (const i of frozen_arr) {
  frozen_id.push(id_list[i]);
}
frozen_id; //신고당한 아이디 배열 [프로도, 네오]

//정지된 아이디를 신고한 사람은 메일을 받는다.
//프로도랑 네오가 filter_list의 뒤쪽에 있다면 메일 카운트 +1

let email_count_arr = [];

// report[0] //'muzi frodo'
// report[0].indexOf(' ')
// report[0].slice(5) //'frodo'

// if(report[0].slice(5) === frozen_id[0])이면 email count +1
for (let j = 0; j < report.length; j++) {
  let email_count = 0;
  let index = report[j].indexOf(" ");

  for (let i = 0; i < frozen_id.length; i++) {
    if (report[j].slice(index + 1) === frozen_id[i]) {
      console.log("앞 :" + report[j].slice(0, index));
      email_count = email_count + 1;
    } else {
      email_count;
    }
  }

  email_count_arr.push(email_count);
}
//   email_count_arr;
//   report;
