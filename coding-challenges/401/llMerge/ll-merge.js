'use strict';

const {
  LinkedList,
} = require('../../../data-structures/linkedList/linked-list');

const mergeLists = (list1, list2) => {
  // create current vars for both lists
  let cur1 = list1.head;
  let cur2 = list2.head;
  let zipped = cur1 || cur2;
  let cur = zipped;

  while (cur1 && cur2) {
    // create 2 reference vars to the current next node for each list
    let ref1 = cur1.next;
    let ref2 = cur2.next;

    // point current list 1 to current list 2
    cur1.next = cur2;

    // point current list 2 to reference 1
    cur2.next = ref1;

    // iterate forward
    cur = cur2;
    cur1 = ref1;
    cur2 = ref2;
  }
  if (cur2) {
    cur.next = cur2;
  }
  // return reference to the head of the merged list
  return zipped;
};

const sortedMergeLists = (list1, list2) => {
  // create current vars for both lists
  let cur1 = list1.head;
  let cur2 = list2.head;
  let merged;
  if (cur1.val > cur2.val) {
    merged = cur2;
    cur2 = cur2.next;
  } else {
    merged = cur1;
    cur1 = cur1.next;
  }
  let cur = merged;

  while (cur1 && cur2) {
    // create 2 reference vars to the current next node for each list
    let ref1 = cur1.next;
    let ref2 = cur2.next;
    if (cur1.val > cur2.val) {
      // set next in merged to cur2.
      cur.next = cur2;

      //iterate forward
      cur = cur.next;
      cur2 = ref2;
    } else {
      // set next in merged to cur1.
      cur.next = cur1;

      //iterate forward
      cur = cur.next;
      cur1 = ref1;
    }
  }
  if (cur2) {
    cur.next = cur2;
  } else if (cur1) {
    cur.next = cur1;
  }
  // return reference to the head of the merged list
  return merged;
};

module.exports = { mergeLists, sortedMergeLists };
