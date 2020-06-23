'use strict';

const Hashtable = require('./hashtable');

const hashtable = new Hashtable();

describe('testing out hashtable', () => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hashtable.add('Eggs', 'Delicious');
    let contained = hashtable.contains('Eggs');
    expect(contained).toBeTruthy();
  });

  test('Retrieving based on a key returns the value stored', () => {
    let contained = hashtable.contains('Eggs');
    expect(contained).toBeTruthy();
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let notThere = hashtable.get('waffles');
    expect(notThere).toBeNull();
  });

  test('Successfully handle a collision within the hashtable', () => {
    let hashed = hashtable.hash('Eggs');
    hashtable.add('gEgs', 'Not so delicious');
    expect(hashtable.list[hashed].count()).toBe(2);
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let retrieved = hashtable.get('Eggs');
    expect(retrieved.key).toBe('Eggs');
    expect(retrieved.value).toBe('Delicious');
  });
  test('Successfully hash a key to an in-range value', () => {
    const high = hashtable.list.length;
    const low = 0;
    const hashed = hashtable.hash('Something totally different than eggs');
    expect(hashed >= low && hashed < high).toBeTruthy();
  });
});
