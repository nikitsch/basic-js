import { NotImplementedError } from '../extensions/index.js';

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
export default function getMatrixElementsSum(matrix) {
  let res = 0;
  let voc = [];
  for (const v of matrix) {
    v.forEach((el, i) => {
      if (!voc.includes(i)) {res += el};
      if (el === 0) {voc.push(i)};
    });
  }
  return res;
}
