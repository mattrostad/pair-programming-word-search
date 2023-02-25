//import transpose function
const transpose = require('./matrix_transposition');

const wordSearch = (letters, word) => {
// error handling
  if (!Array.isArray(letters) || !word) return undefined;

  // Iterate through 2D letters array, and join each row
  // into a single string
  const horizontalJoin = letters.map(ls => ls.join(''));

  // Iterate through array of joined strings for word
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Repeat process for vertical rows
  // Iterate through transposed 2D array and join each transposed row
  // into a single string
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;