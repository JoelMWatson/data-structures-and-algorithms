const HashTable = require('../../../data-structures/hashtable/hashtable');
const leftJoin = require('./left-join');

// 5 long
const table1 = new HashTable();
table1.add('fond', 'enamoured');
table1.add('wrath', 'anger');
table1.add('diligent', 'employed');
table1.add('outfit', 'garb');
table1.add('guide', 'usher');

// 5 long
const table2 = new HashTable();
table2.add('fond', 'averse');
table2.add('wrath', 'delight');
table2.add('diligent', 'idle');
table2.add('guide', 'follow');
table2.add('flow', 'jam');

// 13 long
const table3 = new HashTable();
table3.add('fond', 'averse');
table3.add('diligent', 'idle');
table3.add('guide', 'follow');
table3.add('amazing', 'incredible');
table3.add('answer', 'reply');
table3.add('plan', 'plot');
table3.add('mark', 'label');
table3.add('fall', 'drop');
table3.add('keep', 'retain');
table3.add('destroy', 'demolish');
table3.add('decide', 'determine');
table3.add('hurry', 'rush');
table3.add('obtain', 'aquire');

describe('testing lefJoin', () => {
  test('should return short list when left hashtable is short and right hashtable is large', () => {
    const output = leftJoin(table1, table3);
    expect(output.length).toBe(5);
  });
  test('should return long list when left hashtable is large and right hashtable is short', () => {
    const output = leftJoin(table3, table1);
    expect(output.length).toBe(13);
  });
  test('should have null for non matched elements and additional values for matched elements', () => {
    const output = leftJoin(table1, table2);
    expect(output).toStrictEqual([
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['diligent', 'employed', 'idle'],
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamoured', 'averse'],
    ]);
  });
});
