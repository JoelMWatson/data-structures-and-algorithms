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

})

