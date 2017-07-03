exports.getPrimes = N => {
  const numbers = [];
  const prime = [];
  //Find the square root of N
  const squareRoot = Math.sqrt(N);
  //Iterate through the loop
  for(let i = 2; i < squareRoot; i++){
    if(!numbers[i]){
      for(let k = i * i; k < N; k+=i){
        numbers[k] = 'replaced';
      }
    }
  }
  // separate the prime numbers
  for(i = 2; i < N; i++) {
    if(!numbers[i]){
      prime.push(i);
    }
  }
  return prime;
};
