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
        let current = this.head;
        if (!current) {
            this.head = new Node(value);
            return;
        }
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    insertBefore(value, newVal) {
        let current = this.head;
        if (!current) {
            throw new Error(value + ' not found');
        } else if (current.val === value) {
            this.head = new Node(newVal, this.head);
            return;
        }
        while(current.next) {
            if (current.next.val === value) {
                let node = new Node(newVal, current.next);
                current.next = node;
                return
            }
            current = current.next;
        }
        throw new Error(value + ' not found');
    }

    insertAfter(value, newVal) {
        let current = this.head;
        let node;
        if (!current) {
            throw new Error(value + ' not found');
        }
        while(current) {
            if (current.val === value) {
                if (current.next) {
                    node = new Node(newVal, current.next);
                    current.next = node;
                } else {
                    node = new Node(newVal);
                    current.next = node;
                }
                return;
            }
            current = current.next;
        }
        throw new Error(value + ' not found');
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