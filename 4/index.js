let area = [];
for (let i = 0; i < height.length; i++) {
  for (let j = 1; j < height.length; j++) {
    if (height[i] >= height[j]) {
      area.push(Math.abs(j - i) * height[j]);
    } else {
      area.push(Math.abs(j - i) * height[i]);
    }
  }
}
const res = [...new Set(area)];
return Math.max(...res);
