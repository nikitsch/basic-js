import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const res = {}
  for (let v of domains) {
    let subStr = '.' + v.split('.').reverse().join('.')
    while (subStr !== '.') {
      if (res[subStr]) {
        res[subStr]++
      } else {
        res[subStr] = 1
      }
      subStr = '.' + subStr.split('.').slice(1,-1).join('.')
    }
  }
  return res
}
