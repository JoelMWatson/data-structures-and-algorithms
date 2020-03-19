const reverseArray = arr => {
  const revArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    revArr[(length - (i + 1))] = arr[i];
  }
  return revArr
};

module.exports = reverseArray;
