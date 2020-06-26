const { stringToWordArray, repeatedWord } = require('./repeated-word');

describe('stringToWordArray Tests', () => {
  test('should not add any weird punctuation or numbers in', () => {
    const str = '. , 1 !!!Apple';
    const arr = stringToWordArray(str);
    expect(arr).toEqual(['apple']);
  });

  test('should break string into words', () => {
    const str = 'should break string into words';
    const arr = stringToWordArray(str);
    expect(arr).toEqual(['should', 'break', 'string', 'into', 'words']);
  });

  test('should remove capitalizations', () => {
    const str = 'Apple IS just A Great TestinG WoRD';
    const arr = stringToWordArray(str);
    expect(arr).toEqual([
      'apple',
      'is',
      'just',
      'a',
      'great',
      'testing',
      'word',
    ]);
  });
});

describe('repeatedWord Tests', () => {
  test('should find repeated word', () => {
    const str = 'apple was, Was';
    const dup = repeatedWord(str);
    expect(dup).toBe('was');
  });

  test('should return null if no words repeat', () => {
    const str = 'No words repeat themselves';
    const dup = repeatedWord(str);
    expect(dup).toBeNull();
  });

  test('should find the FIRST repeated word', () => {
    const str = 'It was good, that was good';
    const dup = repeatedWord(str);
    expect(dup).toBe('was');
  });
});
