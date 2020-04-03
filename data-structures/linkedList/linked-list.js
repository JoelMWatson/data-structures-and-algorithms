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

    count() {
        if (!this.head) {
            return 0;
        }
        let current = this.head;
        let count = 1;
        while(current.next) {
            count++;
            current = current.next;
        }
        return count;
    }

    insert(val) {
        if (!this.head) {
            this.head = new Node(val);
        } else {
            let newHead = new Node(val, this.head);
            this.head = newHead;
        }
    }

    includes(val) {
        let current = this.head;
        let verdict = false;
        while (current) {
            if (current.val === val) {
                verdict = true;
                break;
            }
            current = current.next;
        }
        return verdict;
    }

    toString() {
        if (!this.head) {
            return '';
        }
        let current = this.head;
        let str = ''
        while (current) {
            if (str !== '') str += ' -> ';
            str += `{ ${current.val} }`;
            current = current.next;
        }
        str += ' -> NULL'
        return str;
    }

    append(value) {
        //which adds a new node with the given value to the end of the list
    }

    insertBefore(value, newVal) {
        //which add a new node with the given newValue immediately before the first value node
    }

    insertAfter(value, newVal) {
        //which add a new node with the given newValue immediately after the first value node
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    insert(val) {
        if (!this.head) {
            this.head = this.tail = new Node(val);
        } else if (this.head === this.tail) {
            this.head = new Node(val);
            this.head.next = this.tail
        } else {
            let newHead = new Node(val, this.head);
            this.head.prev = newHead;
            this.head = newHead;
        }
    }

}

module.exports = { Node, LinkedList, DoublyLinkedList }