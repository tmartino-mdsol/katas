function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  return a * b === 0 ? NaN : a > b ? a % b : b % a;
}
