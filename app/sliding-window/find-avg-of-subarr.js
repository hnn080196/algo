const exampleArray = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const K = 5;
export const test = 'TESt';
function findAvgOfSubarray(K, arr) {
  const result = [];
  let windowSum = 0.0;

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return result;
}

export default findAvgOfSubarray(K, exampleArray);
