const transpose = function(matrix) {
  // Put your solution here
  let output = [];

  for (let j = 0; j < matrix[0].length; j++) {
    let newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    output.push(newRow);
  }
  return output;
};

module.exports = transpose;