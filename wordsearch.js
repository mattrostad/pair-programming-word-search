// Week 5 Pair Programming exercise co-authored by Matt Rostad (@MattRostad)
// and Denny Ng (@Desyn6) on 2023-02-25
//import transpose function
const transpose = require('./matrix_transposition');

const wordSearch = (letters, word) => {
  // error handling
  if (!Array.isArray(letters) || !word) return undefined;

  // DRY up code by making function of join and search
  const joinWords = (array) => array.map(ls => ls.join(''));
  const findWord = (wordBank, searchTerm) => {
  // Iterate through array of joined strings for word
    for (let word of wordBank) {
      if (word.includes(searchTerm)) return true;
    }
  };

  // call helper function to join words horizonally and search for word
  const horizontalJoin = joinWords(letters);
  if (findWord(horizontalJoin, word)) return true;
  
  // Repeat process for vertical rows
  const verticalJoin = joinWords(transpose(letters));
  if (findWord(verticalJoin, word)) return true;

  return false;
};

module.exports = wordSearch;