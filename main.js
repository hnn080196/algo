import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import Result1 from './app/sliding-window/find-avg-of-subarr.js';
import Result2 from './app/sliding-window/MaximumSumSubarrayofSizeK.js';
import Result3 from './app/sliding-window/smallestSubarrayWithGivenSum.js';
import Result4 from './app/sliding-window/LongestSubstringWithKDistinctCharacters.js';
import Result5 from './app/sliding-window/fruitsintoBaskets.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h4 class="read-the-docs">
      Sliding Window - find average : ${JSON.stringify(Result1)}
    </h4>
    <h4 class="read-the-docs">
     Sliding Window - Maximum Sum Subarray of Size K (easy): ${JSON.stringify(Result2)}
    </h4>
    <h4 class="read-the-docs">
     Sliding Window - Smallest Subarray with a given sum (easy): ${JSON.stringify(Result3)}
    </h4>
    <h4 class="read-the-docs">
     Sliding Window - Smallest Subarray with a given sum (easy): ${JSON.stringify(Result4)}
    </h4>
    <h4 class="read-the-docs">
     Sliding Window - fruitsIntoBaskets (easy): ${JSON.stringify(Result5)}
    </h4>
  </div>
`;

setupCounter(document.querySelector('#counter'));
