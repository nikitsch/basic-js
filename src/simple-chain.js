import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  kom: [],
  getLength() {return this.kom.length},
  addLink(value) {
    this.kom.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.kom = [];
      throw new Error ("You can't remove incorrect link!");
    }
    else {
      this.kom.splice(position - 1, 1)
    }
    return this;
  },
  reverseChain() {
    if(this.getLength() > 1) {
      this.kom.reverse();
    }
    return this;
  },
  finishChain() {
    let itg = this.kom.join('~~');
    this.kom = [];
    return itg;
  }
};
