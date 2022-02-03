function solution(n, losts, reserve) {
  let result = [];

  //여벌 체육복이 있는 사람이 체육복을 잃어버린 경우에 대한 조건이 필요함
  for (let lost of losts) {
    for (let extra of reserve) {
      if (lost === extra) {
        losts = losts.filter((item) => item !== lost);
        reserve = reserve.filter((item) => item !== extra);
      }
    }
  }

  losts.forEach((lostItem) => {
    reserve.forEach((resItem) => {
      if (lostItem + 1 === resItem || lostItem - 1 === resItem) {
        result.push("T");
        reserve.shift();
      } else {
        result.push("F");
      }
    });
  });
  const findTrueVale = result.filter((res) => res === "T").length;
  return n - (losts.length - findTrueVale);
}

//다른사람 풀이
const solution = (n, lost, reserve) => {
  let Lost = lost.filter((a) => !reserve.includes(a)); //여벌이 없는데 체육복을 잃어버린 학생
  let Reserve = reserve.filter((a) => !lost.includes(a)); //여벌이 있는데 체육복을 잃어버린 학생

  return (
    n -
    Lost.filter((lostStudent) => {
      //앞, 뒤번호 학생 중 여벌이 있는지 확인
      let extra = Reserve.find(
        (reserveStudent) => Math.abs(reserveStudent - lostStudent) <= 1
      );
      //여벌이 없다면
      if (!extra) return true;
      //여벌을 빌려준 뒤 Reserve 배열에서 해당 학생의 번호 제거
      Reserve = Reserve.filter((reserveStudent) => reserveStudent !== extra);
    }).length
  );
};
