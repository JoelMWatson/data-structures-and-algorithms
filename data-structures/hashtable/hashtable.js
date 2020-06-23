'use strict';

const { LinkedList } = require('../linkedList/linked-list');

class Hashtable {
  constructor(size) {
    this.list = new Array(size);
  }

  add(key, value) {
    const hashedKey = this.hash(key);
    if (!this.list[hashedKey]) {
      this.list[hashedKey] = new LinkedList();
    }
    this.list[hashedKey].insert({ key, value });
  }

  get(key) {
    const hashedKey = this.hash(key);
    let current = this.list[hashedKey].head;
    let success = null;
    while (current) {
      if (current.val.key === key) {
        success = current.val;
      }
      current = current.next;
    }
    return success;
  }

  contains(key) {
    const hashedKey = this.hash(key);
    let current = this.list[hashedKey].head;
    let success = false;
    while (current) {
      if (current.val.key === key) {
        success = true;
        break;
      }
      current = current.next;
    }
    return success;
  }

  hash(key) {
    let ascii = 0;
    for (let i = 0; i < key.length; i++) {
      ascii += key.charCodeAt(i);
    }
    return ascii % this.list.length;
  }
}

module.exports = Hashtable;
