'use strict';

class Node {
  constructor(value, next) {
    this.val = value;
    this.next = next || null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    let node;
    if (this.top === null) {
      node = new Node(value);
      this.top = node;
    } else {
      node = new Node(value, this.top);
      this.top = node;
    }
  }

  pop() {
    let node = this.top;
    this.top = this.top.next;

    return node.val;
  }

  toString() {
    let temp = this.top;
    let str = '';
    while (temp) {
      str += temp.val + ' -> ';
      temp = temp.next;
    }
    return str;
  }
}

const multiBracketValidation = (input) => {
  let brackets = new Stack();
  let currentBracket;
  for (let char of input) {
    console.log('backets: ', brackets.toString());
    switch (char) {
      case '{':
        brackets.push('}');
        currentBracket = brackets.top.val;
        break;
      case '[':
        brackets.push(']');
        currentBracket = brackets.top.val;
        break;
      case '(':
        brackets.push(')');
        currentBracket = brackets.top.val;
        break;
      case '}':
        currentBracket = brackets.pop();
        if (char !== currentBracket) return false;
        break;
      case ']':
        currentBracket = brackets.pop();
        if (char !== currentBracket) return false;
        break;
      case ')':
        currentBracket = brackets.pop();
        if (char !== currentBracket) return false;
        break;
      default:
      // do nothing for all other chars
    }
  }
  return brackets.isEmpty();
};

module.exports = multiBracketValidation;
