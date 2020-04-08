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
    cur1 = ref1;
    cur = cur2;
    cur2 = ref2;
  }
  if (cur2) {
    cur.next = cur2;
  }
  // return reference to the head of the merged list
  return zipped;
};

module.exports = mergeLists;
