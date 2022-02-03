function solution(n, lost, reserve) {
  let result = [];

  lost.forEach((lostItem) => {
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
  return n - (lost.length - findTrueVale);
}
