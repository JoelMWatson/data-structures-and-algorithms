'use strict'

const { LinkedList, DoublyLinkedList} = require('./linked-list');

describe('Testing the LinkedList functionality', () => {

    test('LinkedList can successfully instantiate an empty list', () => {
        let list = new LinkedList();
        expect(list.count()).toBe(0);
    });

    test('LinkedList can properly insert a value into the list', () => {
        let list = new LinkedList();
        list.insert(10);
        expect(list.head.val).toBe(10);
    })

    test('LinkedList head property will correctly point to the beginning of the list', () => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);        
        expect(list.head.val).toBe(8);
    })

    test('LinkedList can insert multiple Nodes into the list successfully', () => {
        let list = new LinkedList();
        list.insert(0);        
        list.insert(9);        
        list.insert(8);     
        list.insert(7);        
        list.insert(6);        
        list.insert(5);     
        list.insert(4);        
        list.insert(3);        
        list.insert(2);     
        list.insert(1);                
        expect(list.count()).toBe(10);
    })

    test('LinkedList includes() function correctly finds a value in the list that exists', () => {
        let list = new LinkedList();
        list.insert(0);        
        list.insert(9);        
        list.insert(8);     
        list.insert(7);        
        list.insert(6);
        let verdict = list.includes(7);
        expect(verdict).toBeTruthy();
    })

    test('LinkedList includes() function correctly returns false when a value is not in the list', () => {
        let list = new LinkedList();
        list.insert(0);        
        list.insert(9);        
        list.insert(8);     
        list.insert(7);        
        list.insert(6);
        let verdict = list.includes(5);
        expect(verdict).toBeFalsy();
    })

    test('LinkedList toString() function prints out your LinkedList in an expected way', () => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);     
        let str = list.toString();   
        expect(str).toEqual('{ 8 } -> { 9 } -> { 10 } -> NULL');
    })
})

describe('Tests for coding challenge 06', () => {  

   test('Can successfully add a node to the end of the linked list',() => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        list.append(7);      
        expect(list.head.next.next.next.val).toBe(7);
   });

   test('Can successfully add multiple nodes to the end of a linked list',() => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        list.append(7);
        list.append(6);
        list.append(5);
        let results = [
            list.head.next.next.next.val,
            list.head.next.next.next.next.val,
            list.head.next.next.next.next.next.val
        ]
        expect(results).toEqual([7, 6, 5]);
   });

   test('Can successfully insert a node before a node located in the middle of a linked list',() => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        list.insertBefore(9, 15);
        expect(list.head.next.val).toBe(15);
   });

   test('Can successfully insert a node before the first node of a linked list',() => {
        let list = new LinkedList();
        list.insert(10);
        list.insertBefore(10, 15);
        expect(list.head.val).toBe(15);    
   });

   test('Can successfully insert after a node in the middle of the linked list',() => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        list.insertAfter(8, 15);
        expect(list.head.next.val).toBe(15);
   });

   test('Can successfully insert after a node at the head of the linked list',() => {
        let list = new LinkedList();
        list.insert(10);        
        list.insertAfter(10, 15);
        console.log(list.toString())
        expect(list.head.next.val).toBe(15);
    });

   test('Can successfully insert a node after the last node of the linked list',() => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(9);        
        list.insertAfter(10, 15);
        console.log(list.toString())
        expect(list.head.next.next.val).toBe(15);  
   });

});

describe('Tests for coding challenge 07', () => {  
    test('Where k is greater than the length of the linked list', () => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        expect(() => list.kthFromEnd(10)).toThrow(new Error('Invaid input for kth value'));
    });

    test('Where k and the length of the list are the same', () => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        expect(() => list.kthFromEnd(3)).toThrow(new Error('Invaid input for kth value'));
    });

    test('Where k is not a positive integer', () => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        expect(() =>list.kthFromEnd(-3)).toThrow(new Error('Invaid input for kth value'));
    });

    test('Where the linked list is of a size 1', () => {
        let list = new LinkedList();
        list.insert(10);        
        expect(list.kthFromEnd(0)).toBe(10);
    });

    test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let list = new LinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);
        expect(list.kthFromEnd(1)).toBe(9);
    });
});

describe('Testing the DoublyLinkedList functionality', () => {

    test('DoublyLinkedList can successfully instantiate an empty list', () => {
        let list = new DoublyLinkedList();
        expect(list.count()).toBe(0);
    });

    test('DoublyLinkedList can properly insert a value into the list', () => {
        let list = new DoublyLinkedList();
        list.insert(10);
        expect(list.head.val).toBe(10);
    })

    test('DoublyLinkedList head property will correctly point to the beginning of the list', () => {
        let list = new DoublyLinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);        
        expect(list.head.val).toBe(8);
    })

    test('DoublyLinkedList can insert multiple Nodes into the list successfully', () => {
        let list = new DoublyLinkedList();
        list.insert(0);        
        list.insert(9);        
        list.insert(8);     
        list.insert(7);        
        list.insert(6);        
        list.insert(5);     
        list.insert(4);        
        list.insert(3);        
        list.insert(2);     
        list.insert(1);                
        expect(list.count()).toBe(10);
    })

    test('DoublyLinkedList includes() function correctly finds a value in the list that exists', () => {
        let list = new DoublyLinkedList();
        list.insert(0);        
        list.insert(9);        
        list.insert(8);     
        list.insert(7);        
        list.insert(6);
        let verdict = list.includes(7);
        expect(verdict).toBeTruthy();
    })

    test('DoublyLinkedList includes() function correctly returns false when a value is not in the list', () => {
        let list = new DoublyLinkedList();
        list.insert(0);        
        list.insert(9);        
        list.insert(8);     
        list.insert(7);        
        list.insert(6);
        let verdict = list.includes(5);
        expect(verdict).toBeFalsy();
    })

    test('DoublyLinkedList toString() function prints out your DoublyLinkedList in an expected way', () => {
        let list = new DoublyLinkedList();
        list.insert(10);        
        list.insert(9);        
        list.insert(8);     
        let str = list.toString();   
        expect(str).toEqual('{ 8 } -> { 9 } -> { 10 } -> NULL');
    })

});

