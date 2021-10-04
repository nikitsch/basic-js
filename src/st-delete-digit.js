import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n);
  let sole = [];
  for (let i = 0; i < n.length; i++) {
    sole.push(n.slice(0, i) + n.slice(i + 1));
  }
  let res = Math.max(...sole)
  return res;
}
