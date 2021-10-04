import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let one = 1;
    for (let i of arr.filter(i => Array.isArray(i))) {
      let compare = this.calculateDepth(i) + 1;
      if (one < compare) {one = compare};
    }
    if (!arr.find(i => Array.isArray(i))) {return 1};
    return one;
  }
}
