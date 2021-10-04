import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let inp = str;
  let space = '';
  let createOp = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|', ...options}
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = createOp;
  while (additionRepeatTimes > 0) {
    inp += addition + (additionRepeatTimes > 1 ? additionSeparator : '')
      additionRepeatTimes--;
  }
  while (repeatTimes > 0) {
    space += inp + (repeatTimes > 1 ? separator : '')
      repeatTimes--;
  }
  return space;
}
