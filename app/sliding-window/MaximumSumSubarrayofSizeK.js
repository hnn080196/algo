const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

function maximumSumSubArrayOfSizeK(arr, K) {
  let maxSum = 0;
  let sumSubArray = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sumSubArray += arr[windowEnd];
    if (windowEnd >= K - 1) {
      maxSum = Math.max(sumSubArray, maxSum);
      sumSubArray -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

export default maximumSumSubArrayOfSizeK(arr, k);
