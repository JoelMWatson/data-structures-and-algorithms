'use strict';

const mergeSort = (arr) => {
  const n = arr.length;
  let mid, left, right;
  if (n > 1) {
    mid = Math.ceil(n / 2);
    left = arr.slice(0, mid);
    right = arr.slice(mid, n);

    console.log('Mid: ', mid, '| Left: ', left, '| Right: ', right);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
  }
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    for (j; j < right.length; j++) {
      arr[k] = right[j];
      k++;
    }
  } else {
    for (i; i < left.length; i++) {
      arr[k] = left[i];
      k++;
    }
  }
  return arr;
};

module.exports = mergeSort;
