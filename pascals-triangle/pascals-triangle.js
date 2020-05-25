//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  
  if (numRows === 0) {
    return [];
  };
  let triangle = [[1]];
  
  for (let i = 1; i < numRows; i++) { // filas
    let row = [];
    for (let j = 0; j < i+1; j++ ) { //numeros dentro de las filas
      let newNumber;
      let right = triangle[i-1][j] || 0;
      let left =  triangle[i-1][j-1] || 0;
      newNumber = right + left;
      row.push(newNumber);
    };
    triangle.push(row);
  };
  return triangle;
};