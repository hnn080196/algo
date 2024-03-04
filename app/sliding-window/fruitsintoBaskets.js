/**
 * 
 * @param {Array} fruits 
 *Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.
 */

const fake = ['A', 'B', 'C', 'A', 'C'];
function fruitsIntoBaskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    frequency = {};
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    //  fruits[windowEnd];
    const fruitRight = fruits[windowEnd];
    if (!frequency[fruitRight]) {
      frequency[fruitRight] = 0;
    }
    frequency[fruitRight] += 1;

    while (Object.keys(frequency).length > 2) {
      const fruitLeft = fruits[windowStart];
      frequency[fruitLeft] -= 1;
      if (frequency[fruitLeft] === 0) {
        delete frequency[fruitLeft];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

export default fruitsIntoBaskets(fake);
