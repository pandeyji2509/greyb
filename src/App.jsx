import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isPalindrome = (num) => {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  const checkPalindrome = () => {
    if (number === '') {
      setResult('Please enter a number');
      return;
    }
    const palindromeCheck = isPalindrome(number);
    setResult(`The number ${number} is ${palindromeCheck ? '' : 'not '}a Palindrome`);
  };

  return (
    <div className="container">
      <div className="palindrome-checker">
        <h1>Palindrome</h1>
        <p>Check is the number palindrome?</p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={checkPalindrome}>Check</button>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
