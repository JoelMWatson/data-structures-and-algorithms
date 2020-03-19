'use strict'

const insertShiftArray = (arr, num) => {
    let newArr = [];
    let half = Math.ceil(arr.length/2);
    for (let i=0; i < arr.length+1; i++) {
        if (i < half) {
            newArr[i] = arr[i];
        } else if (i > half) {
            newArr[i] = arr[i-1]
        } else {
            newArr[i] = num; 
        }
    }
    return newArr;
}

const removeShiftArray = (arr) => {
    let newArr = [];
    let half = Math.floor(arr.length/2);
    for (let i=0; i < arr.length-1; i++) {
        if (i < half) {
            newArr[i] = arr[i];
        } else {
            newArr[i] = arr[i+1]
        }
    }
    return newArr;
}

module.exports = { insertShiftArray, removeShiftArray };