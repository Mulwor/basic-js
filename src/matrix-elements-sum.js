const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
getMatrixElementsSum = (matrix) => {
  let result = 0;
  const array = [];

  for (const line of matrix) {
    for (let i = 0; i < line.length; i++) {
      if (array.includes(i)) continue;
      if (line[i] === 0) array.push(i);
      result += line[i];
    }
  }

  return result;
}



module.exports = {
  getMatrixElementsSum
};
