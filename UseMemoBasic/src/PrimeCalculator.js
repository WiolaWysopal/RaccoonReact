import React, { useState, useMemo } from "react";

// Funkcja do znajdowania liczb pierwszych do limitu n
function findPrimes(limit) {
  console.log("Prime numbers counting ...");
  const primes = [];
  // 1 nie jest liczbą pierwszą - jest względnie pierwszą
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

function PrimeCalculator() {
  const [limit, setLimit] = useState(10000);
  const [refreshToggle, setRefreshToggle] = useState(false);

  // useMemo pamięta wynik obliczeń dopóki 'limit' się nie zmieni
  const primes = useMemo(() => findPrimes(limit), [limit]);

  return (
    <div>
      <h2>Prime numbers calculator</h2>
      <label>
        Limit:
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </label>
      <p>
        {" "}
        {primes.length} prime numbers have been found till limit of {limit}.
      </p>
      <button onClick={() => setRefreshToggle(!refreshToggle)}>
        Refresh component (without limit state change)
      </button>
    </div>
  );
}

export default PrimeCalculator;
