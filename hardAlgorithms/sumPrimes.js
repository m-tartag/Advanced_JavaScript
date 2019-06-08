function sumPrimes(num) {
  const prime = [];
  const notPrime = [];

  for (let i = 2; i <= num; i++) {
    // 2 is prime
    if (i === 2) {
      prime.push(i);
      // prime numbers are odd SO all evens are not prime
    } else if (i % 2 === 0) {
      notPrime.push(i);
      // logic for determining whether or not ODD numbers are prime
    } else {
      for (let j = 1; j <= i; j++) {
        console.log(i / j);
      }
    }
  }

  console.log(notPrime);
  console.log(prime);
}

sumPrimes(5);
