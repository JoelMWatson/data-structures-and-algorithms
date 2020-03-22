'use strict'

const BinarySearch = (arr, key) => {
    let min = 0;
    let max = arr.length - 1;
    let check;
    while (max >= min) {
        check = Math.floor((max + min) / 2);
        if (key > arr[check]) {
            min = check + 1;
        } else if (key < arr[check]) {
            max = check -1;
        } else if (arr[check] === key) {
            return check;
        }
    }
    return -1;
}

module.exports = BinarySearch;