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
