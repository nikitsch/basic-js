import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let one = 1;
  let res = [],
  stArr = str.split('');
    stArr.forEach((kon, v)=>{
      if (kon === stArr[v + 1]) {
        one++;
      } else if (one === 1) {
        res.push(kon);
      } else {
        res.push(one);
        one = 1;
        res.push(kon);
      }
  });
  return res.join('');
}
