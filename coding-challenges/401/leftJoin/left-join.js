const leftJoin = (leftTable, rightTable) => {
  const output = [];
  leftTable.list.forEach((item) => {
    if (item) {
      let current = item.head;
      while (current) {
        const retrieved = rightTable.get(current.val.key);
        if (retrieved !== null) {
          output.push([current.val.key, current.val.value, retrieved.value]);
        } else {
          output.push([current.val.key, current.val.value, retrieved]);
        }
        current = current.next;
      }
    }
  });
  return output;
};

module.exports = leftJoin;
