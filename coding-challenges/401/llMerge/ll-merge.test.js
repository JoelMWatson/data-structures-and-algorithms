'use strict';

const {
  LinkedList,
} = require('../../../data-structures/linkedList/linked-list');
const { mergeLists, sortedMergeLists } = require('./ll-merge');

describe('Testing mergeLists function', () => {
  test('should work with lists of equal length', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    let list3 = new LinkedList();
    list3.head = mergeLists(list1, list2);
    expect(list3.toString()).toBe(
      '{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> NULL',
    );
  });

  test('should work with list1 longer than list2', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    list1.append(4);
    list1.append(5);
    let list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    let list3 = new LinkedList();
    list3.head = mergeLists(list1, list2);
    expect(list3.toString()).toBe(
      '{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> { 4 } -> { 5 } -> NULL',
    );
  });

  test('should work with list2 longer than list1', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    list2.append('d');
    list2.append('e');
    let list3 = new LinkedList();
    list3.head = mergeLists(list1, list2);
    expect(list3.toString()).toBe(
      '{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> { d } -> { e } -> NULL',
    );
  });
});

describe('Testing mergeLists function', () => {
  test('should work with lists of equal length', () => {
    let list1 = new LinkedList();
    list1.append(10);
    list1.append(21);
    list1.append(27);
    let list2 = new LinkedList();
    list2.append(2);
    list2.append(18);
    list2.append(31);
    let list3 = new LinkedList();
    list3.head = sortedMergeLists(list1, list2);
    expect(list3.toString()).toBe(
      '{ 2 } -> { 10 } -> { 18 } -> { 21 } -> { 27 } -> { 31 } -> NULL',
    );
  });

  test('should work with list1 longer than list2', () => {
    let list1 = new LinkedList();
    list1.append(10);
    list1.append(11);
    list1.append(12);
    list1.append(21);
    list1.append(27);
    let list2 = new LinkedList();
    list2.append(2);
    list2.append(18);
    list2.append(31);
    let list3 = new LinkedList();
    list3.head = sortedMergeLists(list1, list2);
    expect(list3.toString()).toBe(
      '{ 2 } -> { 10 } -> { 11 } -> { 12 } -> { 18 } -> { 21 } -> { 27 } -> { 31 } -> NULL',
    );
  });

  test('should work with list2 longer than list1', () => {
    let list1 = new LinkedList();
    list1.append(2);
    list1.append(21);
    list1.append(27);
    let list2 = new LinkedList();
    list2.append(10);
    list2.append(18);
    list2.append(19);
    list2.append(20);
    list2.append(31);
    let list3 = new LinkedList();
    list3.head = sortedMergeLists(list1, list2);
    expect(list3.toString()).toBe(
      '{ 2 } -> { 10 } -> { 18 } -> { 19 } -> { 20 } -> { 21 } -> { 27 } -> { 31 } -> NULL',
    );
  });
});
