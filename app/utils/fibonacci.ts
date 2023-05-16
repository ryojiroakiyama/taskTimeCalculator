// フィボナッチ数列を生成する関数
const fibonacci = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// フィボナッチ数列の中で、指定された数値以下の最大の値を見つける関数
export const findNearestFibonacci = (num: number): number => {
  let i = 0;
  while (true) {
    const fib = fibonacci(i);
    if (fib > num) return fibonacci(i - 1);
    i++;
  }
}
