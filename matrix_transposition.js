// Week 4 pair programming exercise authored by Medhanie Alene (@MedaGrande)
// and Denny Ng (@Desyn6) on 2023-02-17
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
