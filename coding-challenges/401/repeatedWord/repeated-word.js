function repeatedWord(string) {
  let words = stringToWordArray(string);
  let copy = [];
  for (let i = 0; i < words.length; i++) {
    for (let k = 0; k < copy.length; k++) {
      if (words[i] === copy[k]) return words[i];
    }
    copy[copy.length] = words[i];
  }
  return null;
}

function stringToWordArray(string) {
  let words = [];
  let word = '';
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    let charCode = string.charCodeAt(i);
    // only allow letters and apostrophes
    if (
      (charCode >= 65 && charCode <= 90) ||
      charCode === 39 ||
      (charCode >= 97 && charCode <= 122)
    ) {
      word += character;
    } else {
      if (word.length > 0) words[words.length] = word.toLowerCase();
      word = '';
    }
  }
  if (word.length > 0) words[words.length] = word.toLowerCase();
  return words;
}

module.exports = { stringToWordArray, repeatedWord };
