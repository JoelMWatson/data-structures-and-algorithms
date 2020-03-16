const reverseArray = arr => {
  const revArr = [];
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    revArr[length(i + 1)] = arr[i];
  }
};

module.exports = reverseArray;
