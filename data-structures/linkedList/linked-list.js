'use strict'

class Node {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        
    }

    includes(val) {
        
    }

    toString() {

    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }
}

module.exports = { Node, LinkedList, DoublyLinkedList }