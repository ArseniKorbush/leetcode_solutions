var myPow = function(x, n) {
  if (n === 0) {
    return 1.0;
  }

  let result = 1.0;
  let absN = Math.abs(n);

  while (absN > 0) {
    if (absN % 2 === 1) {
      result *= x;
    }
    x *= x;
    absN = Math.floor(absN / 2);
  }

  return n < 0 ? 1 / result : result;
};
