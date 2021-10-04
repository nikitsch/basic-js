import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  for (let key in date) {
    if (!Object.getOwnPropertyNames(date).includes("getTime"))
    throw new Error("Invalid date!");
  } 
  if (!Object.prototype.toString.call(date) || !(date instanceof Date))
  throw new Error("Invalid date!");
  let res = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  return res[date.getMonth()];
}
