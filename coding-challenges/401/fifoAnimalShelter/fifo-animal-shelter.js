'use strict';

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    if (animal.type === 'Dog' || animal.type === 'Cat') {
      const node = new Node(animal);
      if (!this.front) {
        this.front = node;
        this.back = node;
      } else {
        this.back.next = node;
        this.back = node;
      }
    } else {
      console.error('We only accept dogs and cats');
    }
  }

  dequeue(pref) {
    let temp = this.front;
    if (pref === 'Dog' || pref === 'Cat') {
      if (this.front.val.type === pref) {
        this.front = this.front.next;
        return temp.val;
      } else {
        let current = this.front;
        while (current.next) {
          if (current.next.val.type === pref) {
            temp = current.next;
            current.next = current.next.next;
            if (temp === this.back) this.back = current;
            return temp.val;
          }
          current = current.next;
        }
        console.error("We don't have any more " + pref + 's.');
        return null;
      }
    }
    this.front = this.front.next;
    return temp.val;
  }
}

module.exports = { AnimalShelter, Animal };
