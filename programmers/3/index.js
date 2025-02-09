function solution(nums) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= 3; i++) {
    const rannum = Math.floor(Math.random() * nums.length);
    sum += nums[rannum];
    console.log(sum);
  }

  for (let j = 2; j <= sum / 2; j++) {
    if (sum % j == 0) return false;
    else count + 1;
  }

  return count;
}

/*
 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고
      합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는
      숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return
      하도록 solution 함수를 완성해주세요.
*/

/*
[랜덤수]

Math.floor(Math.random());
> 0부터 0.999... 사이의 값을 반환한다.
> 소수점 처리를 하면 항상 0이 출력된다.

Math.floor(Math.random() * 10);
> 0부터 9.999... 사이의 값을 반환한다.
> 소수점 처리를 하면 0~9사이의 값이 출력된다.

Math.floor(Math.random() * 10) + 1;
> 0부터 9.999... 사이의 값을 반환한다.
> 소수점 처리를 하고 1을 더하면 1~10사이의 값이 출력된다.

[소수]
public static boolean isPrime(int num){
  for(int i=2; i<=num/2; i++){
    if(num % i == 0) return false;
   }
  return true;
}

sum이 소수인지 아닌지 찾아야 함

*/
