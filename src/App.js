import React, { useState, useMemo } from "react";
import "./App.css";

// Function to check if a number is prime
const isPrime = (num) => {
  console.log(`Checking if ${num} is prime`);
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function App() {
  const [number, setNumber] = useState("");

  // Memoize the result of isPrime based on the number entered
  const memoizedPrimeCheck = useMemo(() => isPrime(number), [number]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumber(value);
    }
  };

  return (
    <div className="app-container">
      <h1>Prime Number Checker</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <div>
        {number && (
          <h2>
            {number} is {memoizedPrimeCheck ? "a Prime" : "not a Prime"}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
