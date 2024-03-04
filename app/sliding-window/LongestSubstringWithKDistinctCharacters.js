/**
 *
 * @param {string} string
 * @param {number} k
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 */
const fakeString = 'araci';
const k = 2;
function longestSubstringWithKDistinctCharacters(string, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};
  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    const rightChar = string[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    while (Object.keys(charFrequency).length > k) {
      const leftChar = string[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

export default longestSubstringWithKDistinctCharacters(fakeString, k);
