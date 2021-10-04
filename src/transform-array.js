import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(/* arr */) {
  if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`);
  let kom = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let v = [];
  for (let i = 0; i < arr.length; i++){
      if (arr[i] == '--discard-next') {
        i++;
      } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) {
        v.push(arr[i - 1]);
      } else if (arr[i + 1] !== undefined && arr[i] === '--double-next') {
        v.push(arr[i + 1]);
      } else if (arr[i - 2] !== '--discard-next' && arr[i] === '--discard-prev'){
        v.pop();
      } else if (!kom.includes(arr[i])){
        v.push(arr[i]);
      }
  }
  return v;
}
